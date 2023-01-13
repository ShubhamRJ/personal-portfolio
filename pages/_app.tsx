import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createContext } from 'react';
import { AppWrapper } from '../components/Context/AppContext';

const AppContext = createContext({});

export default function App({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: 'light',
    theme: {}
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {}
  })
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <AppWrapper >
          <Component {...pageProps} />
        </AppWrapper>
      </NextUIProvider>
    </NextThemesProvider>
  )
}