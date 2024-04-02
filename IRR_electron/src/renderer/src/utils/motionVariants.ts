const motionV1 = {
  variants: {
    enter: {
      scale: '1',
      y: '1.2',
      opacity: 1,
      transition: {
        scale: { duration: 0.4, ease: [0.36, 0.66, 0.4, 1] },
        opacity: { duration: 0.4, ease: [0.36, 0.66, 0.4, 1] },
        y: { type: 'spring', bounce: 0, duration: 0.6 }
      }
    },
    exit: {
      scale: '1',
      y: '1.2',
      opacity: 0,
      transition: { duration: 0.3, ease: [0.36, 0.66, 0.4, 1] }
    }
  }
}

export default motionV1
