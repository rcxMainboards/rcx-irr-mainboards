import { useDisclosure } from '@nextui-org/react'
import { useState } from 'react'

function useCloseModal() {
  const { onOpenChange } = useDisclosure()

  const [open, setOpen] = useState(true)

  const changeOpen = () => {
    onOpenChange()
    setOpen(false)
  }
  return { open, changeOpen }
}

export default useCloseModal
