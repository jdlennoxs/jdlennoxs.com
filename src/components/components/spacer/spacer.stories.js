import { Spacer } from '.'

export default {
  title: 'Components/Spacer',
  component: Spacer,
}

const Template = (args) => (
  <>
    <div>Item 1</div>
    <div>Item 2</div>
    <Spacer {...args} />
    <div>Item 3</div>
  </>
)

export const Default = Template.bind({})
Default.args = {
  space: 2,
}
