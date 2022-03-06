import { Command } from './Command'

function mul(x, y) {
  return x * y
}

export const MulCommand = function(
  leftOperand,
  rightOperand,
) {
  return new Command(mul, leftOperand, rightOperand)
}
