import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spaces[4]}px;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin: auto 0;
`

export const NavUnlisted = styled.ul`
  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: ${({ theme }) => theme.colors.white};
    margin: 0 ${({ theme }) => theme.spaces[3]}px;
    padding: ${({ theme }) => theme.spaces[1]}px 0;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.white};
    }
  }
`
