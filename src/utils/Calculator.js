import { Calculate } from './Calculate'
import { AddCommand } from './AddCommand'
import { SubCommand } from './SubCommand'
import { MulCommand } from './MulCommand'
import { DivCommand } from './DivCommand'

export const Calculator = function(value) {
  let arr = []
  const stack1 = []
  const stack2 = []
  let result = 0

  function parsingStr(value) {
    arr = value.split(' ').map(item => {
      if (!isNaN(item)) return Number(item)
      return item
    })
  }

  function getPriority(str) {
    if (str === '+' || str === '-') return 1
    if (str === '*' || str === '/') return 2
  }

  function stack(condition) {
    while (stack2[stack2.length - 1] !== condition) {
      action()
    }
    stack2.pop()
  }

  function action() {
    const calculate = new Calculate()
    const rightOperand = stack1.pop()
    const leftOperand = stack1.pop()
    const operator = stack2.pop()

    let result = 0

    switch (operator) {
      case '+':
        result = calculate.execute(
          new AddCommand(leftOperand, rightOperand),
        )
        break
      case '-':
        result = calculate.execute(
          new SubCommand(leftOperand, rightOperand),
        )
        break
      case '*':
        result = calculate.execute(
          new MulCommand(leftOperand, rightOperand),
        )
        break
      case '/':
        result = calculate.execute(
          new DivCommand(leftOperand, rightOperand),
        )
    }

    stack1.push(result)
  }

  function counting() {
    let i = 0

    while (i !== arr.length) {
      while (typeof arr[i] === 'string')
        if (arr[i] === ')') {
          stack('(')
          i++
          /// после выполнения скобок нужно проверить приоритет операций, прежде чем добавлять следующий оператор
          while (
            getPriority(arr[i]) <
            getPriority(stack2[stack2.length - 1])
          )
            action()
        } else {
          stack2.push(arr[i])
          i++
        }

      stack1.push(arr[i])
      i++

      if (stack2[stack2.length - 1] !== '(')
        while (
          getPriority(arr[i]) <
          getPriority(stack2[stack2.length - 1])
        )
          action()
      else if (arr[i] !== ')') {
        stack2.push(arr[i])
        i++
      }
    }

    stack(undefined)
    result = stack1.pop()
  }

  return {
    calculate: function() {
      parsingStr(value)
      counting()
    },
    getResult: function() {
      return String(result)
    },
  }
}
