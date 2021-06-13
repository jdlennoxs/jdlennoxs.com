import tw, { styled } from 'twin.macro'
import { BoxProps } from '../box'
import { Box } from '../index'

export const Flex = styled(Box)<BoxProps>(() => [
    tw`flex`,
])