import styled from 'styled-components'
import { system } from 'styled-system'

const BaseSpacer = styled.span<SpacerProps>({
    display: 'block'
},
    system({
        space: {
            property: 'height',
            scale: 'space',
        }
    })
)

export type SpacerProps = {
    /**
     * style the spacer with a height.
     */
    space: number | number[]
}

/**
* Spacer component to apply space between elements.
* Supports the height property.
* @name Spacer
* @example
* 	<Space space={2} />
*/
export const Spacer = ({ space }: SpacerProps) => {
    return <BaseSpacer space={space} />
}
