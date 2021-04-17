import React from 'react'

import CodeBlock from './';

export default {
  title: 'Components/Code Block',
  component: CodeBlock,
};

const Template = (args) => <CodeBlock {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
  className: 'language-js',
  children: `const hello = () => {
  if(true) console.log('yes')
}
return {result: "some formatted code"}`,
};

