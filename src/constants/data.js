import theme from '@/theme'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

export const themes = [
  {
    color: theme.colors.white,
    name: 'Light theme',
  },
  {
    color: theme.colors.secondary,
    name: 'Dark theme',
  },
  {
    color: theme.colors.primary,
    name: 'Color theme',
  },
]

export const pages = [
  { name: 'Home', path: HOME_PAGE_ROUTE },
  { name: 'Settings', path: SETTINGS_PAGE_ROUTE },
]
