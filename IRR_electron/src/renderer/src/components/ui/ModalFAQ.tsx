import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem
} from '@nextui-org/react'
import FAQ_ITEMS from '../../data/fatqData'
import motionV1 from '../../utils/motionVariants'
import { FaQuestionCircle } from 'react-icons/fa'
import { IoHardwareChipOutline } from 'react-icons/io5'
import { RxLapTimer } from 'react-icons/rx'
import { SiOpenbugbounty } from 'react-icons/si'
const ICONS = {
  IoHardwareChipOutline: <IoHardwareChipOutline size={23} />,
  RxLapTimer: <RxLapTimer size={23} />,
  SiOpenbugbounty: <SiOpenbugbounty size={23} />
  // Agrega más iconos aquí si es necesario
}
function ModalFAQ() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <article>
      <Button
        className="border bg-primary-500 font-semibold text-white"
        endContent={<FaQuestionCircle size={20} />}
        onPress={onOpen}
      >
        FAQ
      </Button>
      <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange} motionProps={motionV1}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">
                Preguntas Frecuentes
              </ModalHeader>
              <ModalBody>
                {FAQ_ITEMS.map(({ key, title, content, iconName }) => (
                  <Accordion variant="bordered" isCompact>
                    <AccordionItem startContent={ICONS[iconName]} title={title} key={key}>
                      <p>{content}</p>
                    </AccordionItem>
                  </Accordion>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </article>
  )
}

export default ModalFAQ
