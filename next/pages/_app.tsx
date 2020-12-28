import { FC } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;