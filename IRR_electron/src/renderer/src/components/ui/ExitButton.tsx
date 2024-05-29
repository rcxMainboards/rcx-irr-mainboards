import { Button } from '@nextui-org/react'

const handleClick = () => {
  window.api.send('close-app')
}

function ExitButton() {
  return (
    <Button className="bg-secondary-500 text-white font-semibold" fullWidth onClick={handleClick}>
      Salir
    </Button>
  )
}

export default ExitButton
