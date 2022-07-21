import React from 'react'
import classes from './FormButton.module.css'

const FormButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.form_button}>
      {children}
    </button>
  )
}

export default FormButton