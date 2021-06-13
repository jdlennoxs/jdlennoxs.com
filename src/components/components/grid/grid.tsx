import tw, { styled } from 'twin.macro'
import { BoxProps } from '../box'
import { Box } from '../index'

export const Grid = styled(Box)<BoxProps>(() => [
    tw`grid`,
])