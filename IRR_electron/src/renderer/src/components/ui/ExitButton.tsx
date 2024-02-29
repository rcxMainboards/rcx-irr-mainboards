import { Button } from '@nextui-org/react'

const handleClick = () => {
  window.api.send('close-app')
}

function ExitButton() {
  return (
    <Button className="bg-secondary-100" onClick={handleClick}>
      Salir
    </Button>
  )
}

export default ExitButton
