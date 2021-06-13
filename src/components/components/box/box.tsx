import { styled, TwStyle } from 'twin.macro'

export interface BoxProps {
    tw: TwStyle
    children: React.ReactNode
}

export const Box = styled.div<BoxProps>(
    <></>
)
