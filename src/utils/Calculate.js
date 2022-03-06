export const Calculate = function() {
  return {
    execute: function(command) {
      return command.execute(
        command.leftOperand,
        command.rightOperand,
      )
    },
  }
}
