import tw, { styled, TwStyle } from 'twin.macro'

const ButtonVariants: Record<ImportanceVariants, TwStyle> = {
  normal: tw`
    bg-white text-gray-500 border-gray-500
    hover:(
      text-gray-800 border-gray-800
    )
  `,
  cta: tw`
    bg-gray-800 text-white border-gray-800
    hover:(
      bg-white text-gray-800 
      border border-solid 
      ) 
  `,
  ghost: tw`
    bg-white text-gray-500 border-white
    shadow
    hover:(border border-solid border-gray-800)
    `,
  muted: tw`
    bg-white text-gray-500 border-white
    shadow
    hover:(border border-solid border-gray-800)
    `
}

const ButtonSizes = {
  sm: tw`p-1 text-sm`,
  default: tw`p-2`,
  lg: tw`p-2 text-xl`,
}

const BaseButton = styled.button(({ importance, size }) => [
  tw`px-4 py-2 w-full`,
  tw`rounded`,
  tw`text-center font-sans`,
  tw`border border-solid`,
  ButtonVariants[importance],
  ButtonSizes[size]
])


type ImportanceVariants = 'normal' | 'ghost' | 'cta' | 'muted'


export type ButtonProps = {
  /**
   * style the button with shadow and click effect.
   */
  elevation?: 'none' | 'low' | 'medium' | 'high'
  /**
  * style the button with padding and font-size.
  */
  size?: 'sm' | 'default' | 'lg'
  /**
   * style variance ('cta', 'normal')
   */
  importance?: ImportanceVariants
} & React.HTMLProps<HTMLButtonElement>

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
  size: 'default',
}
