import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE } from '@/constants'

const HomePage = lazy(() => import('@/pages/Home'))

export default () => (
  <Suspense>
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
    </Switch>
  </Suspense>
)
