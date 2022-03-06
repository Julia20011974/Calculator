import styled from 'styled-components'

export const Container = styled.div`
  width: 240px;
`

export const Tittle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  padding-bottom: ${({ theme }) => theme.spaces[4]}px;
`

export const Select = styled.select`
  padding: ${({ theme }) => theme.spaces[3]}px 0;
  padding-left: ${({ theme }) => theme.spaces[3]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  appearance: none;
  background: url(./src/assets/ControlPanel/arrow.png) 96% /
    15% no-repeat ${({ theme }) => theme.colors.white};
  cursor: pointer;
`

export const Button = styled.button`
  padding: ${({ theme }) => theme.spaces[3]}px 0;
  padding-left: ${({ theme }) => theme.spaces[3]}px;
  width: 100%;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  margin: ${({ theme }) => theme.spaces[4]}px 0;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) =>
      theme.colors.secondaryLight};
  }
  :active {
    //margin: 1px 1px 0;
    box-shadow: -1px -1px 1px #000;
  }
`
