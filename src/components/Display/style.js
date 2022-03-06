import styled from 'styled-components'

export const DisplayContainer = styled.div`
  width: 100%;
  text-align: right;
  padding-top: ${({ theme }) => theme.spaces[4]}px;
  padding-bottom: ${({ theme }) => theme.spaces[2]}px;
  padding-right: ${({ theme }) => theme.spaces[5]}px;
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.black};
`
