import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    <div className='header contentVerticalCenter'>
      <Link to={'/'} className='title'>Demo Streamer</Link>
      <div className='cta contentCenter'>
        <Link to={'/err'}>
          <button className='transparent-text-button'>
            Log in
          </button>
        </Link>
        <button className='drak-button'>Start Your Free Trail</button>
      </div>
    </div>
  )
}

export default Header