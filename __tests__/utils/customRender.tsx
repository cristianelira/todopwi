import { ReactElement, ReactNode } from 'react'

import { ThemeProvider } from 'styled-components/native'
import { RenderOptions, render } from '@testing-library/react-native'
import theme from '../../src/theme'

function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react-native'
export { customRender as render, Providers }
