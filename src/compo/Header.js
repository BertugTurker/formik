import React from 'react'

function Header({increment}) {
    console.log("header rendered");
  return (
    <div>
        <h1>Header</h1>

        <br></br>
        <button onClick={increment} >click</button>


        {/* <code>{JSON.stringify(data)}</code> */}
    </div>
    
  )
}

export default React.memo(Header)