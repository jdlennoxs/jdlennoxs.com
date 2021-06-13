import { Box } from '.'

export default {
  title: 'Components/Box',
  component: Box,
}

const Template = (args) => <Box {...args} bg="accent" p={4} />

export const Default = Template.bind({})

const Children = (args) => <Box {...args}>This box has child elements</Box>

export const BoxWithChildren = Children.bind({})
