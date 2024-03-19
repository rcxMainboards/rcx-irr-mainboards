import {
  KeyboardLayoutBase,
  KeyboardLayoutBaseV1,
  KeyboardLayoutNumPad,
  KeyboardLayoutNumPadV1
} from './Keyboards/index'

function KeyboardContainer({ handleKeyDown, profile }) {
  if (profile.keyboard === 'Base') {
    return <KeyboardLayoutBase handleKeyDown={handleKeyDown} />
  } else if (profile.keyboard === 'NumPad') {
    return <KeyboardLayoutNumPad handleKeyDown={handleKeyDown} />
  } else if (profile.keyboard === 'NumPadV1') {
    return <KeyboardLayoutNumPadV1 handleKeyDown={handleKeyDown} />
  } else if (profile.keyboard === 'BaseV1') {
    return <KeyboardLayoutBaseV1 handleKeyDown={handleKeyDown} />
  }
  return <h1>No se pudo asignar un Teclado válido</h1>
}

export default KeyboardContainer
