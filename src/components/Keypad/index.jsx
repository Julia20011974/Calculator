import React from 'react'
import { KeypadContainer, ButtonContainer } from './style'

export default () => {
  return (
    <KeypadContainer>
      <ButtonContainer>
        <button>C</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </ButtonContainer>

      <ButtonContainer>
        <button>-</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>\</button>
      </ButtonContainer>

      <ButtonContainer>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>=</button>
      </ButtonContainer>

      <ButtonContainer>
        <button>.</button>
        <button>(</button>
        <button>0</button>
        <button>)</button>
        <button>CE</button>
      </ButtonContainer>
    </KeypadContainer>
  )
}
