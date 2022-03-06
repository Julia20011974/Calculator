import React from 'react'
import { themes } from './data'

export const ThemeContext = React.createContext({
  theme: themes[1],
  setTheme: () => {},
})
