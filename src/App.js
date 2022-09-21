// import './App.css';
// import Sign from "./compo/Sign";
import { useState, useMemo, useCallback } from "react";
import Header from "./compo/Header";

function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState("")

  // const data = useMemo(()=> {
  //   return {name: "bertug"}
  // },[])

  const increment = useCallback(()=> {
    setNumber((prevState)=> prevState + 1)
  }, [])


  return (
    <div>
          <Header increment={increment} />
          <hr>
          </hr>
    <h1>{number}</h1>
    {/* <button onClick={()=> setNumber(number + 1)} >click</button> */}
    <br>
    </br>
    <input value={text} onChange={(e) => setText(e.value) } />
    </div>
  )
}

export default App;
