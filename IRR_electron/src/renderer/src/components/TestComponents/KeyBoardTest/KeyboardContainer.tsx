import {
  KeyboardLayoutBase,
  KeyboardLayoutBaseV1,
  KeyboardLayoutNumPad
} from './Keyboards/index'

function KeyboardContainer({ handleKeyDown, profile }) {
  if (profile.keyboard === 'Base') {
    return <KeyboardLayoutBase handleKeyDown={handleKeyDown} />
  } else if (profile.keyboard === 'NumPad') {
    return <KeyboardLayoutNumPad handleKeyDown={handleKeyDown} />
  } else if (profile.keyboard === 'BaseV1') {
    return <KeyboardLayoutBaseV1 handleKeyDown={handleKeyDown} />
  }
  return <h1>No se le encontro un keyboardValido</h1>
}

export default KeyboardContainer
