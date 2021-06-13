import styled from 'styled-components'
import css from '@styled-system/css'
import { variant, fontSize, FontSizeProps, space, SpaceProps } from 'styled-system'

const variants = (theme) => {
  return {
    normal: {
      backgroundColor: 'dark',
      color: 'white',
      '&:hover': {
        backgroundColor: 'darkAccent'
      }
    },
    cta: {
      color: 'dark',
      bg: 'white',
    },
  }
}

const BaseButton = styled.button(({ theme }) =>
  css({
    borderRadius: '0.25rem',
    height: 'auto',
    textAlign: 'center',
    fontFamily: 'sans',
  }),
  fontSize,
  space,
  ({ theme }) => variant({ prop: 'importance', variants: variants(theme) })
)


export type ButtonProps = {
  /**
   * style the button with shadow and click effect.
   */
  elevation?: 'none' | 'low' | 'medium' | 'high'
  /**
   * style variance ('cta', 'normal')
   */
  importance?: 'normal' | 'ghost' | 'cta' | 'muted'
} & SpaceProps & FontSizeProps & React.HTMLProps<HTMLButtonElement>

/**
 * Button component with click effect and built in loader.
 * Supports all props from native html button.
 * @name Button
 * @example
 * 	<Button importance="cta" elevation="medium" loading loader={<Loader/>}>Click me!</Button>
 */
export const Button = (props: ButtonProps) => {
  return <BaseButton {...props} />
}

Button.defaultProps = {
  importance: 'normal', //TODO
  elevation: 'low',
}
