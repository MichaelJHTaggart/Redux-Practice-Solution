import React from 'react'
import { useSelector } from 'react-redux';

function Header() {
 const name = useSelector((state) => state.form.nameText)

 return (
  <div className='header'>
   <h1>Header.js Component</h1>
   <p>Hello, {name}</p>
  </div>
 )
}

export default Header