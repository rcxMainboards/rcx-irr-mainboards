import { useDrop } from 'react-dnd'
import DragableBox from './DragableBox'
import { useState } from 'react'
export default function DropZone({ boxList, updateDropZoneList, pos }) {
  const [placeHolder, setPlaceHolder] = useState<any[]>([])

  const addBoxToList = (id: number) => {
    const UnitBox = boxList.find((item: any) => item.id === id)
    setPlaceHolder([...placeHolder, UnitBox])
    updateDropZoneList(UnitBox)
  }

  const boxPos = {
    1: 'row-start-1 col-start-2 justify-self-center',
    2: 'row-start-2 col-start-1 self-center',
    3: 'row-start-2 col-start-3 self-center justify-self-end',
    4: 'row-start-3 col-start-2 self-end justify-self-center'
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'Box',
    drop: (item: any) => addBoxToList(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))
  return (
    <div
      className={`flex justify-center border border-dashed ${boxPos[pos]} relative h-[75px] w-[160px] items-center rounded-lg bg-green-400 py-1`}
      ref={placeHolder.length === 0 ? drop : undefined} // Asignar drop solo si placeHolder está vacío
      style={{ backgroundColor: isOver ? 'blue' : undefined }}
    >
      {placeHolder.length > 0 ? (
        placeHolder.map((item, index) => {
          return <DragableBox key={index} name={item.name} id={item.id} placeHolder={placeHolder} />
        })
      ) : (
        <p className="text-white">Suelte aquí</p>
      )}
    </div>
  )
}
