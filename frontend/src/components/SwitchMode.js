import React, { useState }  from 'react'

export default function Switch () {
  const [color, setColor] = useState(false)

  const ColorMode = () =>{
    setColor(!color)
    console.log(color)
  }
  
    return (
        <button onClick={ColorMode}>trocar modo</button>
    )
}