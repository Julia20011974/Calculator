import styled from 'styled-components'

export const Container = styled.div`
  width: 600px;
  border-left: 1px solid
    ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;

  margin-left: ${({ theme }) => theme.spaces[4]}px;
  background-color: ${props => props.color};
`

export const Tittle = styled.div`
  width: 120px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
`

export const HistoryContainer = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  width: 500px;
  height: 600px;
  overflow: auto;
  overflow-y: scroll;
  scrollbar-color: ${({ theme }) => theme.colors.black}
    ${props => props.color};
`
