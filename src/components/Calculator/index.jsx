import React, { useState } from 'react'
import Keypad from '@/components/Keypad'
import Display from '@/components/Display'
import History from '@/components/History'

import { Container } from './style'

export default () => {
  const [value, setValue] = useState('0')

  return (
    <React.Fragment>
      <Container>
        <Display value={value} />
        <Keypad value={value} setValue={setValue} />
      </Container>
      <History />
    </React.Fragment>
  )
}
