import {
  KeyboardLayoutBase,
  KeyboardLayoutBaseV1,
  KeyboardLayoutNumPad,
  KeyboardLayoutNumPadV1,
  KeyboardLayout60,
  KeyboardLayout65v3,
  KeyboardLayout95v3
} from './Keyboards/index'


const KeyboardLayouts = {
  '60%Keyboard': KeyboardLayout60,
  '65%Keyboardv1': KeyboardLayoutBase,
  '65%Keyboardv2': KeyboardLayoutBaseV1,
  '65%Keyboardv3': KeyboardLayout65v3,
  '95%Keyboardv1': KeyboardLayoutNumPad,
  '95%Keyboardv2': KeyboardLayoutNumPadV1,
  '95%Keyboardv3': KeyboardLayout95v3,
}

function KeyboardContainer({ handleKeyDown, profile }) {
  // const KeyboardLayout = KeyboardLayouts[profile.keyboard]

  return <KeyboardLayout95v3 handleKeyDown={handleKeyDown} ></KeyboardLayout95v3>
}

export default KeyboardContainer
