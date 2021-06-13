const darkGrey = '#2b2726'
const salmon = '#f8b195'
const blue = '#355c7d'
const sky = '#8BC7D4'
const hot = '#FFA7CB'
// const muted = '#f7f6f3'
const muted = '#ECE9E0'
const charcoal = '#2A2A2C'
const lightCharcoal = '#3e3e41'
const pink = '#FFE0E0'

export default {
  colors: {
    white: '#ffffff',
    black: '#000000',
    background: muted,
    dark: charcoal,
    darkAccent: lightCharcoal,
    primary: hot,
    secondary: sky,
    text: darkGrey,
  },
  // fontFamily: {
  //   sans: [
  //     'system-ui',
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     '"Noto Sans"',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //     '"Noto Color Emoji"',
  //   ].join(','),
  //   serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(','),
  //   mono: ['fira-mono', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(','),
  // },
  fontSizes: {
    s: '0.875rem',
    m: '1rem',
    l: '1.125rem',
    xl: '1.5rem',
    '2xl': '3rem',
  },
  fontWeights: {
    light: 200,
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  borders: {
    none: 'none',
    thin: '1px solid',
  },
  radii: {
    none: 0,
    default: '0.25rem',
    lg: '0.5rem',
    full: 9999,
  },
  breakpoints: ['480px', '768px', '1024px'],
  space: ['0', '0.125rem', '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'],

  boxShadow: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  //   typography: {
  //     default: {
  //       fontSize: '1rem',
  //       lineHeight: 1.6,
  //     },
  //     xs: {
  //       fontSize: '0.7rem',
  //       lineHeight: 1.6,
  //     },
  //     sm: {
  //       fontSize: '0.875rem',
  //       lineHeight: 1.6,
  //     },
  //     lg: {
  //       fontSize: '1.125rem',
  //       lineHeight: 1.5,
  //     },
  //     xl: {
  //       fontSize: '1.25rem',
  //       lineHeight: 1.4,
  //     },
  //     '2xl': {
  //       fontSize: '1.5rem',
  //       lineHeight: 1.3,
  //     },
  //     '3xl': {
  //       fontSize: '1.875rem',
  //       lineHeight: 1.2,
  //     },
  //     '4xl': {
  //       fontSize: '2.25rem',
  //       lineHeight: 1.2,
  //     },
  //     '5xl': {
  //       fontSize: '3rem',
  //       lineHeight: 1.1,
  //     },
  //     '6xl': {
  //       fontSize: '4rem',
  //       lineHeight: 1.1,
  //     },
  //   },
  //   minHeight: {
  //     '0': '0',
  //     full: '100%',
  //     screen: '100vh',
  //   },
  //   minWidth: {
  //     '0': '0',
  //     full: '100%',
  //   },
  //   opacity: {
  //     '0': '0',
  //     '25': '0.25',
  //     '50': '0.5',
  //     '75': '0.75',
  //     '100': '1',
  //   },
  //   width: {
  //     auto: 'auto',
  //     '1/2': '50%',
  //     '1/3': '33.333333%',
  //     '2/3': '66.666667%',
  //     '1/4': '25%',
  //     '2/4': '50%',
  //     '3/4': '75%',
  //     '1/5': '20%',
  //     '2/5': '40%',
  //     '3/5': '60%',
  //     '4/5': '80%',
  //     '1/6': '16.666667%',
  //     '2/6': '33.333333%',
  //     '3/6': '50%',
  //     '4/6': '66.666667%',
  //     '5/6': '83.333333%',
  //     '1/12': '8.333333%',
  //     '2/12': '16.666667%',
  //     '3/12': '25%',
  //     '4/12': '33.333333%',
  //     '5/12': '41.666667%',
  //     '6/12': '50%',
  //     '7/12': '58.333333%',
  //     '8/12': '66.666667%',
  //     '9/12': '75%',
  //     '10/12': '83.333333%',
  //     '11/12': '91.666667%',
  //     full: '100%',
  //     screen: '100vw',
  //   },
  //   height: {
  //     auto: 'auto',
  //     full: '100%',
  //     screen: '100vh',
  //   },
}
