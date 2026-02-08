export const wrapperVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export const itemVariants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-40px)',
  },
  visible: {
    transform: 'translateY(0)',
    opacity: [0.4, 1],
  },
}

export const reviewVariants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(30%)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
}
