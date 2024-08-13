import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import { Home } from './src/screens/Home'
import Toast from 'react-native-toast-message'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Toast />
    </ThemeProvider>
  )
}
