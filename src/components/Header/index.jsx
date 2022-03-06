import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  HeaderContainer,
  Container,
  NavUnlisted,
} from './style'

import { pages } from '@/constants'

export default () => {
  return (
    <HeaderContainer>
      <Container>Calculator App</Container>
      <Container>
        <NavUnlisted>
          {pages.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              activeClassName="current"
              exact>
              <li>{link.name}</li>
            </NavLink>
          ))}
        </NavUnlisted>
      </Container>
    </HeaderContainer>
  )
}
