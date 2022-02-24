import React, { Suspense } from 'react'

import Header from '@/components/Header'
import Heading from '@/pages/Home'
import Calculator from '@/components/Calculator'

export default () => (
  <React.Fragment>
    <Header />
    <Suspense fallback={<Heading />}>
      <Calculator />
    </Suspense>
  </React.Fragment>
)
