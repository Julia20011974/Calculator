import { Command } from './Command'

function add(x, y) {
  return x + y
}

export const AddCommand = function(
  leftOperand,
  rightOperand,
) {
  return new Command(add, leftOperand, rightOperand)
}
