import React from 'react'
import { Link } from "react-router-dom";
import BrownButton from '../components/UI/buttons/BrownButton';

const ErrorPage = () => {
  return (
    <div className='Error'>
      <h1 className="error-title"> Ой, такой страицы не существует</h1>
      <BrownButton>
        <Link to='/'>На главную страницу</Link>
      </BrownButton>
    </div>
  )
}

export default ErrorPage