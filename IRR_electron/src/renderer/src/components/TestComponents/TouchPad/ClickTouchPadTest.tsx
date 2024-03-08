import { motion } from 'framer-motion'
export default function ClickTouchpadTest({ left, right, handleClick, handleContextMenu }) {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center gap-10 ">
        <h1 className="text-xl font-semibold" style={{ userSelect: 'none' }}>
          Presione 5 veces cada que con el boton que corresponda al Pad táctil
        </h1>
        <div className="flex gap-4">
          <motion.div
            className="w-[14rem] rounded-b-lg p-4 text-xl font-semibold text-white"
            style={{ backgroundColor: '#395fab', userSelect: 'none' }}
            whileHover={{ scale: 1.1 }}
            onPointerDown={handleClick}
          >
            Click Izq ({left})
          </motion.div>
          <motion.div
            className="w-[14rem] rounded-b-lg p-4 text-xl font-semibold text-white"
            style={{ backgroundColor: '#395fab', userSelect: 'none' }}
            whileHover={{ scale: 1.1 }}
            onContextMenu={handleContextMenu}
          >
            Click Derecho ({right})
          </motion.div>
        </div>
      </div>
    </div>
  )
}
