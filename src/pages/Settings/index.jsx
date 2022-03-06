import React, { useContext } from 'react'
import { ThemeContext } from '@/constants'

import { PageLayout } from '@/layouts'
import ControlPanel from '@/components/ControlPanel'

export default () => {
  const { theme } = useContext(ThemeContext)
  return (
    <PageLayout color={theme.color}>
      <ControlPanel />
    </PageLayout>
  )
}
