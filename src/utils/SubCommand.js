import { Command } from './Command'

function sub(x, y) {
  return x - y
}

export const SubCommand = function(
  leftOperand,
  rightOperand,
) {
  return new Command(sub, leftOperand, rightOperand)
}
