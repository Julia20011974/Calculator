import React from 'react'

import { Button } from './style'

export default props => {
  return (
    <Button value={props.value} onClick={props.onClick}>
      {props.value}
    </Button>
  )
}
