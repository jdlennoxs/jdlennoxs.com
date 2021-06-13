import React from 'react'
import '../globals.css'
import { withNextRouter } from 'storybook-addon-next-router'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/theme/globalStyle'
// import theme from '../src/theme/theme'

export const decorators = [
  (Story) => (
    // <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Story />
    </>
    // </ThemeProvider>
  ),
  withNextRouter,
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
