import React, {
  Suspense,
  lazy,
  useState,
  useMemo,
} from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '@/components/Header'
import Loader from '@/components/Loader'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  themes,
  ThemeContext,
} from '@/constants'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => {
  const [theme, setTheme] = useState(themes[0])
  const value = useMemo(() => ({ theme, setTheme }))

  return (
    <ThemeContext.Provider value={value}>
      <Header />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </ThemeContext.Provider>
  )
}
