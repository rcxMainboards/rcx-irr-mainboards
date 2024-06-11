import { Kbd } from '@nextui-org/react'

export default function BkeyR({ label, code, keysGlobalState, children }: { label, code, keysGlobalState, children?}) {

    const isKeypressed = keysGlobalState[code]?.pressed

    return (
        <Kbd
            style={{
                backgroundColor: !isKeypressed ? 'white' : '#09AACD'
            }}
            className={`flex h-full w-full items-center justify-center rounded-sm border`}
        >
            {children}
            {label}
        </Kbd>
    )
}
