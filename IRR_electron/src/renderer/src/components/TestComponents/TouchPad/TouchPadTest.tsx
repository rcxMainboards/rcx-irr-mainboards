import ClickTouchpadTest from './ClickTouchPadTest'
import useTouchPad from './useTouchPad'
import DragDrop from './DragDrop'
import { ModalTimeOut } from '../../ui/index'
import { useDisclosure } from '@nextui-org/react'

function TouchPadTest({ TestName, nextTest, TestTimer }) {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()
  const {
    leftClick,
    rightClick,
    isLvl1Done,
    handleLeftClick,
    handleRigthClick,
    handleResetTest
  } = useTouchPad(TestTimer, onOpen)

  return (
    <>
      {!isLvl1Done ? (
        <ClickTouchpadTest
          left={leftClick}
          right={rightClick}
          handleClick={handleLeftClick}
          handleContextMenu={handleRigthClick}
        />
      ) : (
        <DragDrop TestName={TestName} nextTest={nextTest} />
      )}
      <ModalTimeOut
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        reset={handleResetTest}
        TestName={TestName}
        nextTest={nextTest}
      />
    </>
  )
}

export default TouchPadTest
