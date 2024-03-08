import { useDisclosure } from '@nextui-org/react'
import { useState } from 'react'

function useCloseModal() {
  const { onOpenChange } = useDisclosure()
  const [open, setOpen] = useState(true)

  const changeOpen = () => {
    onOpenChange()
    setOpen(false)
  }

  const resetModal = () => {
    onOpenChange()
    setOpen(true)
  }

  return { open, changeOpen, resetModal }
}

export default useCloseModal
