import { Stack } from '.'

export default {
  title: 'Components/Stack',
  component: Stack,
}

const Template = (args) => (
  <Stack {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
)

export const Default = Template.bind({})
