import React, { useContext } from 'react'
import {
  HistoryContainer,
  Container,
  Tittle,
} from './style'
import { ThemeContext } from '@/constants'

export default props => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container>
      <Tittle>History</Tittle>
      <HistoryContainer color={theme.color}>
        {Object.keys(localStorage)
          .filter(
            item => localStorage.getItem(item) !== 'INFO',
          )
          .map((item, index) => (
            <div key={index}>
              {localStorage.getItem(item)}
            </div>
          ))}
      </HistoryContainer>
    </Container>
  )
}
