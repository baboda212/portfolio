/* nav GNB */
import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <div>
         <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
        </nav>
    </div>
  )
}
