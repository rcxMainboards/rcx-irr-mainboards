import { useDrag } from 'react-dnd'
export default function DragableBox({ name, id, placeHolder }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Box',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <div
      className="flex h-[4.2rem] w-[9rem] items-center justify-center rounded-lg  bg-[#395fab] text-white"
      ref={placeHolder?.length === 1 ? undefined : drag}
      style={{ border: isDragging ? '3px solid pink' : '0px' }}
    >
      {name}
    </div>
  )
}
