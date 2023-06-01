import React from 'react';
import "./App.css"

const FuncComp = () => {
  return (
    <div className="func inline">
      <h1>This is created using functional component</h1>
      <p className="external">This is done by external css</p>
      <p style={{color:"blue"}}>This is done by internal css</p>
    </div>
  )
}

export default FuncComp;