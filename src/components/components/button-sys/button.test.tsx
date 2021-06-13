import { render } from '@testing-library/react'
import React from 'react'

import { Button } from './button'

test('should render', () => {
  const { getByText } = render(<Button>I am primary button</Button>)
  const rendered = getByText('I am primary button')

  expect(rendered).toBeDefined()
})

test('should use variation html attribute', () => {
  const { getByText } = render(<Button>I am primary button</Button>)
  const rendered = getByText('I am primary button')

  expect(rendered.getAttribute('data-variation')).to.equal('normal')
})

test('should have "cta" as html attribute, when using cta variation', () => {
  const { getByText } = render(<Button importance="cta">I am primary button</Button>)
  const rendered = getByText('I am primary button')

  expect(rendered.getAttribute('data-variation')).to.equal('cta')
})
