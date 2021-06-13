import styled from 'styled-components'
import tw, { css, TwStyle } from 'twin.macro'
import { Flex } from '../flex/flex'

const BaseStack = styled(Flex)<StackProps>(({ gap }) => [
    tw`flex-col justify-start`,
    css`
        & > * {
            /* Reset any margins*/
            margin: 0;
        }

        & > * + * {
            margin-top: ${gap}rem;
        }
    `
])

// const HorizontalStack = styled(Box)<StackProps>(
//     system({
//         gap: {
//             property: '&& > * + *',
//             scale: 'space',
//             transform: (value, scale) => ({
//                 marginLeft: scale[value]
//             })
//         }
//     })
// )

export type StackProps = {
    // horizontal?: boolean
    /**
     * style the stack with space between.
     */
    gap?: number
    /**
     * child elements to be spaced
     */
    children: React.ReactNode | React.ReactNodeArray
}

/**
 * Stack component for vertical spacing of elements.
 * Support gap prop to adjust spacing.
 * @name Stack
 * @example
 * <Stack gap={2}>{...children}</Stack>
 */
export const Stack = ({ gap, children, ...rest }: StackProps) => {
    // if (horizontal) return <HorizontalStack gap={gap}>{children}</HorizontalStack>
    return <BaseStack gap={gap}>{children}</BaseStack>
}

Stack.defaultProps = {
    gap: 2
}