import ButtonKey from '../ButtonKey'

function KeyboardLayoutNumpad({ handleKeyDown }) {
  return (
    <div className="grid grid-cols-[70rem,20rem] gap-2 ">
      <div className="grid grid-rows-6 gap-2">
        <div className="flex gap-2">
          <ButtonKey
            label="ESC"
            code={'Escape'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F1"
            code={'F1'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F2"
            code={'F2'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F3"
            code={'F3'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F4"
            code={'F4'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F5"
            code={'F5'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F6"
            code={'F6'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F7"
            code={'F7'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F8"
            code={'F8'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F9"
            code={'F9'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F10"
            code={'F10'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F11"
            code={'F11'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="FN + F12"
            code={'F12'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="PrintScreen"
            code={'PrintScreen'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="Delete"
            code={'Delete'}
            handleKeyDown={() => handleKeyDown()}
          />
        </div>
        <div className="grid grid-cols-[repeat(16,1fr)] gap-2">
          <ButtonKey
            label="~"
            code={'Backquote'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="1"
            code={'Digit1'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="2"
            code={'Digit2'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="3"
            code={'Digit3'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="4"
            code={'Digit4'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="5"
            code={'Digit5'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="6"
            code={'Digit6'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="7"
            code={'Digit7'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="8"
            code={'Digit8'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="9"
            code={'Digit9'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="0"
            code={'Digit0'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="-"
            code={'Minus'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="+"
            code={'Equal'}
            handleKeyDown={() => handleKeyDown()}
          />
          <div className="col-span-3">
            <ButtonKey
              label="Backspace"
              code={'Backspace'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <ButtonKey
            label="Tab"
            code={'Tab'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="Q"
            code={'KeyQ'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="W"
            code={'KeyW'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="E"
            code={'KeyE'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="R"
            code={'KeyR'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="T"
            code={'KeyT'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="Y"
            code={'KeyY'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="U"
            code={'KeyU'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="I"
            code={'KeyI'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="O"
            code={'KeyO'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="P"
            code={'KeyP'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="["
            code={'BracketLeft'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="]"
            code={'BracketRight'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="&#92;"
            code={'Backslash'}
            handleKeyDown={() => handleKeyDown()}
          />
        </div>
        <div className="grid grid-cols-[repeat(15,1fr)] gap-2">
          <ButtonKey
            label="CapsLock"
            code={'CapsLock'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="A"
            code={'KeyA'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="S"
            code={'KeyS'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="D"
            code={'KeyD'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="F"
            code={'KeyF'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="G"
            code={'KeyG'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="H"
            code={'KeyH'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="J"
            code={'KeyJ'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="K"
            code={'KeyK'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="L"
            code={'KeyL'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label=";"
            code={'Semicolon'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="'"
            code={'Quote'}
            handleKeyDown={() => handleKeyDown()}
          />
          <div className="col-span-3">
            <ButtonKey
              label="Enter"
              code={'Enter'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(16,1fr)] gap-2">
          <div className="col-span-2">
            <ButtonKey
              label="Shift"
              code={'ShiftLeft'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <ButtonKey
            label="Z"
            code={'KeyZ'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="X"
            code={'KeyX'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="C"
            code={'KeyC'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="V"
            code={'KeyV'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="B"
            code={'KeyB'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="N"
            code={'KeyN'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="M"
            code={'KeyM'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label=","
            code={'Comma'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="."
            code={'Period'}
            handleKeyDown={() => handleKeyDown()}
          />
          <ButtonKey
            label="/"
            code={'Slash'}
            handleKeyDown={() => handleKeyDown()}
          />
          <div className="col-span-4">
            <ButtonKey
              label="Shift"
              code={'ShiftRight'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-[repeat(4,1fr),500px,repeat(5,1fr)] grid-rows-2 gap-2">
          <div className="row-span-2">
            <ButtonKey
              label="Ctrl"
              code={'ControlLeft'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <div className="row-span-2">
            <ButtonKey
              label="FN"
              code={'none'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <div className="row-span-2">
            <ButtonKey
              label="Win"
              code={'MetaLeft'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <div className="row-span-2">
            <ButtonKey
              label="Alt"
              code={'AltLeft'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <div className="row-span-2">
            <ButtonKey
              label="Space"
              code={'Space'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <div className="row-span-2">
            <ButtonKey
              label="Alt"
              code={'AltRight'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <div className="row-span-2">
            <ButtonKey
              label="Ctrl"
              code={'ControlRight'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <div className="row-span-2">
            <ButtonKey
              label="<"
              code={'ArrowLeft'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <ButtonKey
            label="^"
            code={'ArrowUp'}
            handleKeyDown={() => handleKeyDown()}
          />
          <div className="row-span-2">
            <ButtonKey
              label=">"
              code={'ArrowRight'}
              handleKeyDown={() => handleKeyDown()}
            />
          </div>
          <ButtonKey
            label="v"
            code={'ArrowDown'}
            handleKeyDown={() => handleKeyDown()}
          />
        </div>
      </div>
      <section className="grid grid-cols-4 grid-rows-6 gap-2">
        <ButtonKey
          label="Home"
          code={'Home'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="End"
          code={'End'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="PageUp"
          code={'PageUp'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="PageDown"
          code={'PageDown'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="NumLock"
          code={'NumLock'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="/"
          code={'NumpadDivide'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="*"
          code={'NumpadMultiply'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="-"
          code={'NumpadSubtract'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="7"
          code={'Numpad7'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="8"
          code={'Numpad8'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="9"
          code={'Numpad9'}
          handleKeyDown={() => handleKeyDown()}
        />
        <div className="row-span-2">
          <ButtonKey
            label="+"
            code={'NumpadAdd'}
            handleKeyDown={() => handleKeyDown()}
          />
        </div>
        <ButtonKey
          label="4"
          code={'Numpad4'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="5"
          code={'Numpad5'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="6"
          code={'Numpad6'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="1"
          code={'Numpad1'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="2"
          code={'Numpad2'}
          handleKeyDown={() => handleKeyDown()}
        />
        <ButtonKey
          label="3"
          code={'Numpad3'}
          handleKeyDown={() => handleKeyDown()}
        />
        <div className="row-span-2">
          <ButtonKey
            label="Enter"
            code={'NumpadEnter'}
            handleKeyDown={() => handleKeyDown()}
          />
        </div>
        <div className="col-span-2">
          <ButtonKey
            label="0"
            code={'Numpad0'}
            handleKeyDown={() => handleKeyDown()}
          />
        </div>
        <ButtonKey
          label="."
          code={'NumpadDecimal'}
          handleKeyDown={() => handleKeyDown()}
        />
      </section>
    </div>
  )
}

export default KeyboardLayoutNumpad
