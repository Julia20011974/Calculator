import React, { useContext } from 'react'
import { Container, Tittle, Button, Select } from './style'
import { ThemeContext, themes } from '@/constants'

export default () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeHandler = event => {
    event.target.value === themes[0].name
      ? setTheme(themes[0])
      : event.target.value === themes[1].name
      ? setTheme(themes[1])
      : setTheme(themes[2])
  }

  const clearHistory = () => {
    localStorage.clear()
  }

  return (
    <Container>
      <Tittle>Settings</Tittle>
      <label htmlFor="themes">Switch Theme</label>
      <Select
        id="themes"
        value={theme.name}
        onChange={changeHandler}>
        {themes.map((item, index) => (
          <option key={index}>{item.name}</option>
        ))}
      </Select>
      <Button onClick={clearHistory}>
        Clear All History
      </Button>
    </Container>
  )
}
