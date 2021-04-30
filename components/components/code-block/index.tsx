import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

const Pre = styled.pre`
    border-radius: 1rem;
    scrollbar-width: none;
    text-align: left;
    margin: 1rem 0;
    padding: 0 1rem 1rem 1rem;
    overflow: scroll;
`

const LanguageHeader = styled.div`
    margin: 0.5rem;
    display: inline-block;
`

const Line = styled.div`
    display: table-row;
`

const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding-right: 1rem;
    user-select: none;
    opacitiy: 0.5;
`

const LineContent = styled.span`
    display: table-cell;
`

export const CodeBlock = ({ children, className }) => {
    const language = className ? className.replace(/language-/, '') : 'javascript'

    return (
        <Highlight {...defaultProps} code={children} language={language} theme={nightOwl}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={{ ...style }}>
                    <LanguageHeader>{language}</LanguageHeader>
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
                </Pre>
            )}
        </Highlight>
    )
}

