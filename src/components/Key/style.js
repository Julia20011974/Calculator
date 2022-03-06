import styled from 'styled-components'

export const Button = styled.button`
  flex-basis: 100px;
  border-radius: 10px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  padding: ${({ theme }) => theme.spaces[4]}px;
`
