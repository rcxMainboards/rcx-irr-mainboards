import { ModalTimeOut } from '../../ui/index'
import KeyboardContainer from './KeyboardContainer'
import BaseLayout from '../../ui/baseLayout'
import useKeyboardTest from './useKeyboard'
import { useDisclosure } from '@nextui-org/react'

function KeyBoardTest({ TestName, nextTest, profile }) {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()
  const { handleKeyDown, handleResetTest, secondsLeft } = useKeyboardTest(
    TestName,
    nextTest,
    onOpen,
    profile
  )

  return (
    <BaseLayout>
      <>
        {!isOpen ? (
          <>
            <KeyboardContainer
              handleKeyDown={handleKeyDown}
              profile={profile}
            />
            <p className="text-lg font-semibold text-white">
              Tiempo restante: {secondsLeft}
            </p>
          </>
        ) : null}
        <ModalTimeOut
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          reset={handleResetTest}
          TestName={TestName}
          nextTest={nextTest}
        />
      </>
    </BaseLayout>
  )
}

export default KeyBoardTest
