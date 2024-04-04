import {
  KeyboardLayoutBase,
  KeyboardLayoutBaseV1,
  KeyboardLayoutNumPad,
  KeyboardLayoutNumPadV1,
  KeyboardLayout60,
  KeyboardLayout65v3
} from './Keyboards/index'

const KeyboardLayouts = {
  '60%Keyboard': KeyboardLayout60,
  '65%Keyboardv1': KeyboardLayoutBase,
  '65%Keyboardv2': KeyboardLayoutBaseV1,
  '65Keyboardv3': KeyboardLayout65v3,
  '95%Keyboardv1': KeyboardLayoutNumPad,
  '95%Keyboardv2': KeyboardLayoutNumPadV1
}

function KeyboardContainer({ handleKeyDown, profile }) {
  const KeyboardLayout = KeyboardLayouts[profile.keyboard]

  if (KeyboardLayout) {
    return <KeyboardLayout handleKeyDown={handleKeyDown} />
  }

  return <h1 className="text-white">No se encontro un Teclado Válido para la prueba</h1>
}

export default KeyboardContainer
