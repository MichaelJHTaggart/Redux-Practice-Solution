import React from 'react';
import { useDispatch } from 'react-redux'
import { nameAdded } from './formSlice'

function Form() {
 const dispatch = useDispatch()

 const handleInput = (e) => dispatch(nameAdded(e.target.value))

 return (
  <div className='form'>
   <h1>Form.js Component</h1>

   <form>
    <label>Type in a name here</label>
    <br />
    <input onChange={handleInput}></input>
   </form>

   <button>Submit</button>
  </div>
 )
}

export default Form
