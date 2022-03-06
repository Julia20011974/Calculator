import React from 'react'
import { KeypadContainer, KeyContainer } from './style'
import Key from '@/components/Key'
import { Calculator } from '@/utils/Calculator'

export default props => {
  const { value, setValue } = props

  const changeValue = event => {
    let newValue = value

    if (newValue === '0') newValue = ''

    setValue(newValue + event.target.value)
  }

  const deleteChar = () => {
    let newValue = value

    if (newValue[newValue.length - 1] === ' ')
      newValue = newValue.substr(0, newValue.length - 2)
    else newValue = newValue.substr(0, newValue.length - 1)

    if (newValue.length === 0) newValue = '0'

    setValue(newValue)
  }

  const clearAll = () => {
    setValue('0')
  }

  const calculate = () => {
    // удаляем все пробелы и пустые строки
    const arr = value.split(' ').filter(item => item !== '')
    if (isNaN(arr[arr.length - 1]))
      alert('Ошибка! Неверное выражение, попробуйте снова ')
    else {
      localStorage.setItem(value, value)
      const calculator = Calculator(value)
      calculator.calculate()
      setValue(calculator.getResult())
    }
  }

  return (
    <KeypadContainer>
      <KeyContainer>
        <Key value="C" onClick={deleteChar} />
        <Key value="7" onClick={changeValue} />
        <Key value="8" onClick={changeValue} />
        <Key value="9" onClick={changeValue} />
        <Key value=" * " onClick={changeValue} />
      </KeyContainer>

      <KeyContainer>
        <Key value=" - " onClick={changeValue} />
        <Key value="4" onClick={changeValue} />
        <Key value="5" onClick={changeValue} />
        <Key value="6" onClick={changeValue} />
        <Key value=" / " onClick={changeValue} />
      </KeyContainer>

      <KeyContainer>
        <Key value=" + " onClick={changeValue} />
        <Key value="1" onClick={changeValue} />
        <Key value="2" onClick={changeValue} />
        <Key value="3" onClick={changeValue} />
        <Key value="=" onClick={calculate} />
      </KeyContainer>

      <KeyContainer>
        <Key value="." onClick={changeValue} />
        <Key value="( " onClick={changeValue} />
        <Key value="0" onClick={changeValue} />
        <Key value=" )" onClick={changeValue} />
        <Key value="CE" onClick={clearAll} />
      </KeyContainer>
    </KeypadContainer>
  )
}
