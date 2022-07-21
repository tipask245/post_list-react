import React from 'react'
import classes from'./FormInput.module.css'

const FormInput = (props) => {
  
  return (
    <div className={classes.form_input}>
      <label>{props.title}</label>
      <input {...props} className={classes.create_inp}/>
    </div>
  )
}

export default FormInput