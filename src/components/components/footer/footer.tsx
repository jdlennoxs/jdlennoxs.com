import { Box } from '../box'
import { Flex } from '../index'

export const Footer = () => {
    const author = "Jack Scott"
    return (
        <footer>
            <Box tw='bg-gray-800 text-white'>
                <Box tw='max-w-4xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <Flex tw='items-center justify-between pt-8 pb-4'>
                        <div>{author && `${author} \u00A9 ${new Date().getFullYear()}`}</div>
                        <div />
                    </Flex>
                </Box >
            </Box >
        </footer >
    )
}
