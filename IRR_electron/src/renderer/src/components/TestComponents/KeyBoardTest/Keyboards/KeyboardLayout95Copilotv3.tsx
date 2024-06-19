import { useState } from 'react'
import keysStateMap from '../constants/NumpadCopilot'
import BkeyR from './BkeyR'
import { useEffect } from 'react'
export default function KeyboardLayout95v3({ handleKeyDown }) {

    const [keysGlobalState, setkeysGlobalState] = useState(keysStateMap)

    useEffect(() => {


        const handleKeyCode = (event) => {

            if (event.shiftKey && event.metaKey && !keysGlobalState["Copilot"].pressed) {

                setkeysGlobalState((prevState) => ({
                    ...prevState,
                    ["Copilot"]: {
                        ...prevState["Copilot"],
                        pressed: true,
                    },
                }));
                handleKeyDown()
            } else if (!keysGlobalState[event.code].pressed) {
                setkeysGlobalState((prevState) => ({
                    ...prevState,
                    [event.code]: {
                        ...prevState[event.code],
                        pressed: true,
                    },
                }));

                handleKeyDown()
            }

            
        };

        const handleKeyUp = (event) => {
            if (event.code === 'PrintScreen') {
                if (!keysGlobalState[event.code].pressed) {
                    setkeysGlobalState((prevState) => ({
                        ...prevState,
                        [event.code]: {
                            ...prevState[event.code],
                            pressed: true,
                        },
                    }));
                    handleKeyDown()
                }
            }
        }

        window.addEventListener('keydown', handleKeyCode)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyCode)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [keysGlobalState])


    return (
        <div className="grid grid-cols-[70rem,20rem] gap-2 ">
            <div className="grid grid-rows-6 gap-2">
                <div className="flex gap-2">
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="ESC"
                        code={'Escape'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F1"
                        code={'F1'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F2"
                        code={'F2'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F3"
                        code={'F3'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F4"
                        code={'F4'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F5"
                        code={'F5'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F6"
                        code={'F6'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F7"
                        code={'F7'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F8"
                        code={'F8'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F9"
                        code={'F9'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F10"
                        code={'F10'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F11"
                        code={'F11'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="FN + F12"
                        code={'F12'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="PrintScreen"
                        code={'PrintScreen'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="Delete"
                        code={'Delete'}

                    />
                </div>
                <div className="grid grid-cols-[repeat(16,1fr)] gap-2">
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="~"
                        code={'Backquote'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="1"
                        code={'Digit1'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="2"
                        code={'Digit2'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="3"
                        code={'Digit3'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="4"
                        code={'Digit4'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="5"
                        code={'Digit5'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="6"
                        code={'Digit6'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="7"
                        code={'Digit7'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="8"
                        code={'Digit8'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="9"
                        code={'Digit9'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="0"
                        code={'Digit0'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="-"
                        code={'Minus'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="+"
                        code={'Equal'}

                    />
                    <div className="col-span-3">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Backspace"
                            code={'Backspace'}

                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="Tab"
                        code={'Tab'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="Q"
                        code={'KeyQ'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="W"
                        code={'KeyW'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="E"
                        code={'KeyE'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="R"
                        code={'KeyR'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="T"
                        code={'KeyT'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="Y"
                        code={'KeyY'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="U"
                        code={'KeyU'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="I"
                        code={'KeyI'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="O"
                        code={'KeyO'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="P"
                        code={'KeyP'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="["
                        code={'BracketLeft'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="]"
                        code={'BracketRight'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="&#92;"
                        code={'Backslash'}

                    />
                </div>
                <div className="grid grid-cols-[repeat(15,1fr)] gap-2">
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="CapsLock"
                        code={'CapsLock'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="A"
                        code={'KeyA'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="S"
                        code={'KeyS'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="D"
                        code={'KeyD'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="F"
                        code={'KeyF'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="G"
                        code={'KeyG'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="H"
                        code={'KeyH'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="J"
                        code={'KeyJ'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="K"
                        code={'KeyK'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="L"
                        code={'KeyL'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label=";"
                        code={'Semicolon'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="'"
                        code={'Quote'}

                    />
                    <div className="col-span-3">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Enter"
                            code={'Enter'}

                        />
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(16,1fr)] gap-2">
                    <div className="col-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Shift"
                            code={'ShiftLeft'}

                        />
                    </div>
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="Z"
                        code={'KeyZ'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="X"
                        code={'KeyX'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="C"
                        code={'KeyC'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="V"
                        code={'KeyV'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="B"
                        code={'KeyB'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="N"
                        code={'KeyN'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="M"
                        code={'KeyM'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label=","
                        code={'Comma'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="."
                        code={'Period'}

                    />
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="/"
                        code={'Slash'}

                    />
                    <div className="col-span-4">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Shift"
                            code={'ShiftRight'}

                        />
                    </div>
                </div>
                <div className="grid w-full grid-cols-[repeat(4,1fr),500px,repeat(5,1fr)] grid-rows-2 gap-2">
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Ctrl"
                            code={'ControlLeft'}

                        />
                    </div>
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="FN"
                            code={'none'}

                        />
                    </div>
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Win"
                            code={'MetaLeft'}

                        />
                    </div>
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Alt"
                            code={'AltLeft'}

                        />
                    </div>
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Space"
                            code={'Space'}

                        />
                    </div>
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Alt"
                            code={'AltRight'}

                        />
                    </div>
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="Copilot"
                            code={'F23'}

                        >
                            <img src='https://freebiehive.com/wp-content/uploads/2023/09/Microsoft-AI-Copilot-Logo-PNG-728x409.jpg'></img>
                        </BkeyR>
                    </div>
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label="<"
                            code={'ArrowLeft'}

                        />
                    </div>
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="^"
                        code={'ArrowUp'}

                    />
                    <div className="row-span-2">
                        <BkeyR
                            keysGlobalState={keysGlobalState}
                            label=">"
                            code={'ArrowRight'}

                        />
                    </div>
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="v"
                        code={'ArrowDown'}

                    />
                </div>
            </div>
            <section className="grid grid-cols-4 grid-rows-6 gap-2">
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="Home"
                    code={'Home'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="End"
                    code={'End'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="PageUp"
                    code={'PageUp'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="PageDown"
                    code={'PageDown'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="NumLock"
                    code={'NumLock'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="/"
                    code={'NumpadDivide'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="*"
                    code={'NumpadMultiply'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="-"
                    code={'NumpadSubtract'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="7"
                    code={'Numpad7'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="8"
                    code={'Numpad8'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="9"
                    code={'Numpad9'}

                />
                <div className="row-span-2">
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="+"
                        code={'NumpadAdd'}

                    />
                </div>
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="4"
                    code={'Numpad4'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="5"
                    code={'Numpad5'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="6"
                    code={'Numpad6'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="1"
                    code={'Numpad1'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="2"
                    code={'Numpad2'}

                />
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="3"
                    code={'Numpad3'}

                />
                <div className="row-span-2">
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="Enter"
                        code={'NumpadEnter'}

                    />
                </div>
                <div className="col-span-2">
                    <BkeyR
                        keysGlobalState={keysGlobalState}
                        label="0"
                        code={'Numpad0'}

                    />
                </div>
                <BkeyR
                    keysGlobalState={keysGlobalState}
                    label="."
                    code={'NumpadDecimal'}

                />
            </section>
        </div>
    )
}
