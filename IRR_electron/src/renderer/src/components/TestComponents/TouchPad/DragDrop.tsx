import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragableBox from './DragableBox'
import DropZone from './DropZone'
import { useEffect, useState } from 'react'

export default function DragDrop({ TestName, nextTest }) {
  const [boxList, setBoxList] = useState([
    { id: 1, name: 'Caja1' },
    { id: 2, name: 'Caja2' },
    { id: 3, name: 'Caja3' },
    { id: 4, name: 'Caja4' }
  ])

  useEffect(() => {
    if (boxList.length === 0) {
      nextTest(TestName, { result: true, message: 'Prueba completada con éxito' })
    }
  }, [boxList])

  function updateDropZoneList(box: any) {
    setBoxList((oldBoxes) => oldBoxes.filter((item) => item.id !== box.id))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid h-screen grid-cols-3 grid-rows-3 p-3">
        <div
          className="col-star-2 row-start-2 grid grid-cols-[8rem_8rem] grid-rows-[3rem_3rem] gap-5 self-center justify-self-center
            "
        >
          {boxList.map((item) => {
            return (
              <DragableBox
                key={item.id}
                name={item.name}
                id={item.id}
                placeHolder={'aqui'}
              ></DragableBox>
            )
          })}
        </div>
        <DropZone
          boxList={boxList}
          updateDropZoneList={(box) => updateDropZoneList(box)}
          pos={1}
        ></DropZone>
        <DropZone
          boxList={boxList}
          updateDropZoneList={(box) => updateDropZoneList(box)}
          pos={2}
        ></DropZone>
        <DropZone
          boxList={boxList}
          updateDropZoneList={(box) => updateDropZoneList(box)}
          pos={3}
        ></DropZone>
        <DropZone
          boxList={boxList}
          updateDropZoneList={(box) => updateDropZoneList(box)}
          pos={4}
        ></DropZone>
      </div>
    </DndProvider>
  )
}
