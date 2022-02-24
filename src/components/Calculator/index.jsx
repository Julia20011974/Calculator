import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path={HOME_PAGE_ROUTE}
          component={HomePage}
        />
        <Route
          exact
          path={SETTINGS_PAGE_ROUTE}
          component={SettingsPage}
        />
      </Switch>
    </React.Fragment>
  )
}
