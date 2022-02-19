import React from 'react'
import { NavLink } from 'react-router-dom'

import { Wrapper, Container, NavUnlisted } from './style'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

const pages = [
  { name: 'Home', path: HOME_PAGE_ROUTE },
  { name: 'Settings', path: SETTINGS_PAGE_ROUTE },
]

export default () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
