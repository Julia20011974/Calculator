import { Command } from './Command'

function div(x, y) {
  return x / y
}

export const DivCommand = function(
  leftOperand,
  rightOperand,
) {
  return new Command(div, leftOperand, rightOperand)
}
