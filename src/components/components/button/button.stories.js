import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => (
  <Button tw="p-5" {...args}>
    default button
  </Button>
)

export const Default = Template.bind({})

export const CTA = Template.bind({})
CTA.args = {
  importance: 'cta',
}
