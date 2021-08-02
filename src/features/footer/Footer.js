import React from 'react'
import { useSelector } from 'react-redux';

const selectName = state => state.form.nameText

function Footer() {
 const name = useSelector(selectName)

 return (
  <div className='footer'>
   <h1>Footer.js Component</h1>
   <p>Hello, {name}</p>

  </div>
 )
}

export default Footer
