export const nftImageAnimationVariants = {
    init: {
        y: "-600",
        opacity: 0,
      },
      animate: {
       y: 0,
      opacity: 1,
      },  
}
export const cardAnimationVariants = {
    init: {
        scale: 0,
        opacity: 0,
      },
      animate: {
       scale: 1,
      opacity: 1,
      },  
}

export const heroHeaderAnimations = {
    init: {
        y: '-100',
        opacity: 0,
        zIndex: -10,
    },
    animate: {
        y: 0,
        opacity: 1,
        zIndex: 0,
    }
}

export const heroHeaderTransitions = {
    ease: "easeInOut",
    duration: 0.8,
    delay: 1.3,
    type: "spring",
    stiffness: 60,
    damping: 7,
  }
export const heroTextTransitions = {
    ease: "easeInOut",
    duration: 0.8,
    delay: 1.6,
    type: "spring",
    stiffness: 60,
    damping: 7,
  }
export const heroButtonTransitions = {
    ease: "easeInOut",
    duration: 0.8,
    delay: 2,
    type: "spring",
    stiffness: 60,
    damping: 7,
  }