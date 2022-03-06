import styled from 'styled-components'

export const KeypadContainer = styled.div`
  width: 100%;
`

export const KeyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spaces[4]}px
    ${({ theme }) => theme.spaces[5]}px;
`
