import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components"

import GlobalStyles from "../theme/globalStyle";
// import { GlobalStyles } from 'twin.macro'
import { Navbar } from "../components/components";
import theme from "../theme/theme"

const App = ({ Component, pageProps }: AppProps) => (
  // <ThemeProvider theme={theme}>
  <>
    <GlobalStyles />
    <Navbar />
    <Component {...pageProps} />
  </>
  // </ThemeProvider>
);

export default App;
