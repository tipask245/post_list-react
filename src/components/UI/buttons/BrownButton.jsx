import React from 'react'
import classes from './BrownButton.module.css'

const BrownButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.brown_button}>
      {children}
    </button>
  )
}

export default BrownButton