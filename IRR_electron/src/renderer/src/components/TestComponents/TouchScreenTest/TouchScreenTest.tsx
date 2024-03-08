import useTouchTest from './useTouchTest'
import TouchBox from './TouchBox'
import { ModalTimeOut } from '../../ui/index'
import { useDisclosure } from '@nextui-org/react'

function TouchScreenTest({ TestTimer, nextTest, TestName }) {
  const { onOpen, isOpen, onOpenChange } = useDisclosure()
  // Este hook activa un timer en cuanto se monta el componente
  const { boxes, handleTouch, handleRestTest, secondsLeft } = useTouchTest(
    onOpen,
    TestTimer,
    TestName,
    nextTest
  )

  return (
    <>
      <div
        className="relative grid min-h-screen grid-cols-[repeat(16,1fr)] gap-[8px]"
        onTouchMove={(e) => handleTouch(e)}
        onTouchStart={(e) => handleTouch(e)}
        onTouchEnd={(e) => handleTouch(e)}
      >
        {boxes.map((color, index) => (
          <TouchBox key={index} color={color} />
        ))}
        <h1 className="absolute z-10 text-2xl">{secondsLeft}</h1>
      </div>
      <ModalTimeOut
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        reset={handleRestTest}
        TestName={TestName}
        nextTest={nextTest}
        disableAnimation={true}
      />
    </>
  )
}

export default TouchScreenTest
