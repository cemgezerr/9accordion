import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [show,setShow] = useState(false)
  return (
    <div className='App'>
      <h1>Accordion</h1>

      <h3 onClick={()=> setShow(!show)}>Tıkla Açılsın</h3>

      {show && <p>Selamlar</p> }
    </div>
  )
}

export default App