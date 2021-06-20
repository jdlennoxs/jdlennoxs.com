
import { Icon } from '@iconify/react'
import sun from '@iconify/icons-la/sun'
import moon from '@iconify/icons-la/moon'
import bulb from '@iconify/icons-la/lightbulb'


import tw, { styled } from 'twin.macro'


const Pill = styled.div(() => [
    tw`rounded-full transition-colors flex items-center`,
    `position: relative;
    // height: 2em;
    // width: 2em;
    `
])

const ToggleButton = styled.div(() => [
    // tw`bg-yellow-100 rounded-full`,
    `
    transform: translateX(1.75em);
    position: absolute;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    background-color: #ffeccf;
    box-shadow: inset 0px 0px 0px 0.1em #ffbb52;
    transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.28,1.52,.4,.92);
    `
])

const Light = styled.div(() => [
    tw`p-1`,
    `
    // position: absolute;
  opacity: 1;
//   transform: translate(0.5em, 0.2em) rotate(15deg);

  transform: rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
    `
])

const Dark = styled.div(() => [

    tw`p-1`,
    `
    position: absolute;
  opacity: 0;
//   transform: translate(0.5em, 0.2em) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
    `
])

const Toggle = styled.input(() => [
    tw`cursor-pointer`,
    `position: absolute;
    opacity: 0;
    height: 0;
    width: 0;`,
    `&:checked + ${Pill} {
        background: #374151; 
        ${ToggleButton} {
            background-color: #485367;
            box-shadow: inset 0px 0px 0px 0.75em white;
            transform: translateX(0.25em);
        }
        ${Light} {
            opacity: 0;
            // transform: translate(1.75em, 0.2em) rotate(0deg);
            
            transform: rotate(0deg);
          }
          ${Dark} {
            opacity: 1;
            // transform: translate(1.75em, 0.2em) rotate(-15deg);
            
            transform:rotate(-15deg);
        }
    }`,
])



export const DarkModeToggle = () => {
    return (
        <label>
            <Toggle type='checkbox'></Toggle>
            <Pill >
                <Light>
                    <Icon icon={sun} color="#ffbb52" height="1.5em" />
                </Light>
                {/* <ToggleButton></ToggleButton> */}
                <Dark>
                    <Icon icon={moon} color="#fff" height="1.5em" />
                </Dark>
            </Pill>
        </label>
    )
}