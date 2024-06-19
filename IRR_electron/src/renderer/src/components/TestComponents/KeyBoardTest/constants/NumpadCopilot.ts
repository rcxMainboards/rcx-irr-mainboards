const keysStateMap = {
    'Escape': { key: 'Escape', label: 'ESC', pressed: false },
    'F1': { key: 'F1', label: 'FN + F1', pressed: false },
    'F2': { key: 'F2', label: 'FN + F2', pressed: false },
    'F3': { key: 'F3', label: 'FN + F3', pressed: false },
    'F4': { key: 'F4', label: 'FN + F4', pressed: false },
    'F5': { key: 'F5', label: 'FN + F5', pressed: false },
    'F6': { key: 'F6', label: 'FN + F6', pressed: false },
    'F7': { key: 'F7', label: 'FN + F7', pressed: false },
    'F8': { key: 'F8', label: 'FN + F8', pressed: false },
    'F9': { key: 'F9', label: 'FN + F9', pressed: false },
    'F10': { key: 'F10', label: 'FN + F10', pressed: false },
    'F11': { key: 'F11', label: 'FN + F11', pressed: false },
    'F12': { key: 'F12', label: 'FN + F12', pressed: false },
    'Insert': { key: 'Insert', label: 'Insert', pressed: false },
    'PrintScreen': { key: 'PrintScreen', label: 'PrintScreen', pressed: false },
    'Delete': { key: 'Delete', label: 'Delete', pressed: false },
    'Backquote': { key: 'Backquote', label: '~', pressed: false },
    'Digit1': { key: 'Digit1', label: '1', pressed: false },
    'Digit2': { key: 'Digit2', label: '2', pressed: false },
    'Digit3': { key: 'Digit3', label: '3', pressed: false },
    'Digit4': { key: 'Digit4', label: '4', pressed: false },
    'Digit5': { key: 'Digit5', label: '5', pressed: false },
    'Digit6': { key: 'Digit6', label: '6', pressed: false },
    'Digit7': { key: 'Digit7', label: '7', pressed: false },
    'Digit8': { key: 'Digit8', label: '8', pressed: false },
    'Digit9': { key: 'Digit9', label: '9', pressed: false },
    'Digit0': { key: 'Digit0', label: '0', pressed: false },
    'Minus': { key: 'Minus', label: '-', pressed: false },
    'Equal': { key: 'Equal', label: '=', pressed: false },
    'Backspace': { key: 'Backspace', label: 'Backspace', pressed: false },
    'Tab': { key: 'Tab', label: 'Tab', pressed: false },
    'KeyQ': { key: 'KeyQ', label: 'Q', pressed: false },
    'KeyW': { key: 'KeyW', label: 'W', pressed: false },
    'KeyE': { key: 'KeyE', label: 'E', pressed: false },
    'KeyR': { key: 'KeyR', label: 'R', pressed: false },
    'KeyT': { key: 'KeyT', label: 'T', pressed: false },
    'KeyY': { key: 'KeyY', label: 'Y', pressed: false },
    'KeyU': { key: 'KeyU', label: 'U', pressed: false },
    'KeyI': { key: 'KeyI', label: 'I', pressed: false },
    'KeyO': { key: 'KeyO', label: 'O', pressed: false },
    'KeyP': { key: 'KeyP', label: 'P', pressed: false },
    'BracketLeft': { key: 'BracketLeft', label: '[', pressed: false },
    'BracketRight': { key: 'BracketRight', label: ']', pressed: false },
    'Backslash': { key: 'Backslash', label: '\\', pressed: false },
    'CapsLock': { key: 'CapsLock', label: 'CapsLock', pressed: false },
    'KeyA': { key: 'KeyA', label: 'A', pressed: false },
    'KeyS': { key: 'KeyS', label: 'S', pressed: false },
    'KeyD': { key: 'KeyD', label: 'D', pressed: false },
    'KeyF': { key: 'KeyF', label: 'F', pressed: false },
    'KeyG': { key: 'KeyG', label: 'G', pressed: false },
    'KeyH': { key: 'KeyH', label: 'H', pressed: false },
    'KeyJ': { key: 'KeyJ', label: 'J', pressed: false },
    'KeyK': { key: 'KeyK', label: 'K', pressed: false },
    'KeyL': { key: 'KeyL', label: 'L', pressed: false },
    'Semicolon': { key: 'Semicolon', label: ';', pressed: false },
    'Quote': { key: 'Quote', label: "'", pressed: false },
    'Enter': { key: 'Enter', label: 'Enter', pressed: false },
    'ShiftLeft': { key: 'ShiftLeft', label: 'Shift', pressed: false },
    'KeyZ': { key: 'KeyZ', label: 'Z', pressed: false },
    'KeyX': { key: 'KeyX', label: 'X', pressed: false },
    'KeyC': { key: 'KeyC', label: 'C', pressed: false },
    'KeyV': { key: 'KeyV', label: 'V', pressed: false },
    'KeyB': { key: 'KeyB', label: 'B', pressed: false },
    'KeyN': { key: 'KeyN', label: 'N', pressed: false },
    'KeyM': { key: 'KeyM', label: 'M', pressed: false },
    'Comma': { key: 'Comma', label: ',', pressed: false },
    'Period': { key: 'Period', label: '.', pressed: false },
    'Slash': { key: 'Slash', label: '/', pressed: false },
    'ShiftRight': { key: 'ShiftRight', label: 'Shift', pressed: false },
    'ControlLeft': { key: 'ControlLeft', label: 'Ctrl', pressed: false },
    'MetaLeft': { key: 'MetaLeft', label: 'Win', pressed: false },
    'AltLeft': { key: 'AltLeft', label: 'Alt', pressed: false },
    'Space': { key: 'Space', label: 'Space', pressed: false },
    'AltRight': { key: 'AltRight', label: 'Alt', pressed: false },
    'Copilot': { key: 'Copilot', label: 'Copilot', pressed: false },
    'ArrowLeft': { key: 'ArrowLeft', label: '<', pressed: false },
    'ArrowUp': { key: 'ArrowUp', label: '^', pressed: false },
    'ArrowRight': { key: 'ArrowRight', label: '>', pressed: false },
    'ArrowDown': { key: 'ArrowDown', label: 'v', pressed: false },
    'Home': { key: 'Home', label: 'Home', pressed: false },
    'End': { key: 'End', label: 'End', pressed: false },
    'PageUp': { key: 'PageUp', label: 'PageUp', pressed: false },
    'PageDown': { key: 'PageDown', label: 'PageDown', pressed: false },
    'NumLock': { key: 'NumLock', label: 'NumLock', pressed: false },
    'NumpadDivide': { key: 'NumpadDivide', label: '/', pressed: false },
    'NumpadMultiply': { key: 'NumpadMultiply', label: '*', pressed: false },
    'NumpadSubtract': { key: 'NumpadSubtract', label: '-', pressed: false },
    'Numpad7': { key: 'Numpad7', label: '7', pressed: false },
    'Numpad8': { key: 'Numpad8', label: '8', pressed: false },
    'Numpad9': { key: 'Numpad9', label: '9', pressed: false },
    'NumpadAdd': { key: 'NumpadAdd', label: '+', pressed: false },
    'Numpad4': { key: 'Numpad4', label: '4', pressed: false },
    'Numpad5': { key: 'Numpad5', label: '5', pressed: false },
    'Numpad6': { key: 'Numpad6', label: '6', pressed: false },
    'Numpad1': { key: 'Numpad1', label: '1', pressed: false },
    'Numpad2': { key: 'Numpad2', label: '2', pressed: false },
    'Numpad3': { key: 'Numpad3', label: '3', pressed: false },
    'NumpadEnter': { key: 'NumpadEnter', label: 'Enter', pressed: false },
    'Numpad0': { key: 'Numpad0', label: '0', pressed: false },
    'NumpadDecimal': { key: 'NumpadDecimal', label: '.', pressed: false }
};

export default keysStateMap;
