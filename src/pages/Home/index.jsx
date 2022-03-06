import React, { useContext } from 'react'
import { ThemeContext } from '@/constants'

import Calculator from '@/components/Calculator'
import { PageLayout } from '@/layouts'

export default () => {
  const { theme } = useContext(ThemeContext)
  return (
    <PageLayout color={theme.color}>
      <Calculator />
    </PageLayout>
  )
}
