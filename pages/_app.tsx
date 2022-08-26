import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider} from "@nextui-org/react"

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#D9E73C',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
      textPrimary: '$white',
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
    },
    space: {},
    fonts: {}
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
