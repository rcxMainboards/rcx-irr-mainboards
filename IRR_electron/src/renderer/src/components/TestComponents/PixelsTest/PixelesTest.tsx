import { useDisclosure } from '@nextui-org/react'
import { ModalUserSelectResult } from '../../ui/index'
import usePixelTest from './usePixelTest'

function PixelesTest({ TestName, nextTest }) {
  const { isOpen, onOpenChange } = useDisclosure()
  const { handlePress, handleRestTest, currentColor, COLORS } = usePixelTest(onOpenChange)

  return (
    <>
      <div
        className="h-screen w-screen"
        style={{ backgroundColor: COLORS[currentColor] }}
        onClick={handlePress}
      ></div>
      <ModalUserSelectResult
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        reset={handleRestTest}
        TestName={TestName}
        nextTest={nextTest}
      />
    </>
  )
}

export default PixelesTest
