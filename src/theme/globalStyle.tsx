/* ./styles/global.css */
// @import url("https://use.typekit.net/tov0boo.css");
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

export const CustomStyles = createGlobalStyle`

:root {
  font-size: 21px;
  /* background-color: #ECE9E0; */
}
`

const GlobalStyles = () => (
  <>
    <CustomStyles />
    <BaseStyles />
  </>
)

export default GlobalStyles