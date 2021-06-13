import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import React from 'react'
import tw, { styled } from 'twin.macro'
import { Box } from '../box'
import { Button } from '../button'
import { useState } from 'react'

const Container = styled(Box)(() => [
  tw`rounded`,
  tw`shadow-lg`,
  tw`mx-auto my-4 max-w-xl`
])

const Pre = styled.pre(() => [
  tw`overflow-scroll`,
  tw`rounded-b`,
  tw`text-left`,
  `scrollbar-width: none`
])

const LanguageHeader = styled.div(() => [
  tw`p-1`,
  tw`text-gray-300 text-center text-xs font-sans`,
  tw`w-full`
])

const Line = styled.div(() => [
  tw`table-row`
])

const LineNo = styled.span(() => [
  tw`table-cell pr-4 text-right select-none`,
  tw`opacity-50`,
  `color: #d0d0d0`
])

const LineContent = styled.span(() => [
  tw`table-cell`
])

export const CodeBlock = ({ children, className }) => {
  const [theme, setTheme] = useState(nightOwlLight)
  const language = className ? className.replace(/language-/, '') : 'javascript'

  return (

    <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Container>
          <Box tw='border-b border-gray-300 border-solid w-full overflow-hidden'>
            <LanguageHeader>{language}
              <Button tw='max-w-xs' onClick={() => theme === nightOwlLight ? setTheme(nightOwl) : setTheme(nightOwlLight)}>
                Dark
              </Button>
            </LanguageHeader>
          </Box>
          <Pre className={className} style={{ ...style }}>
            <Box tw='px-2 py-5 text-xs leading-snug font-mono'>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Box>
          </Pre>
        </Container>
      )
      }
    </Highlight >
  )
}
