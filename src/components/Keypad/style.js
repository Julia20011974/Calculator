import styled from 'styled-components'

export const KeypadContainer = styled.div`
  width: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spaces[4]}px
    ${({ theme }) => theme.spaces[5]}px;
  & > button {
    padding: ${({ theme }) => theme.spaces[4]}px;
    flex-basis: 100px;
    border-radius: 15px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
  }
`
