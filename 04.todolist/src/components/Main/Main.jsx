import "./Main.css"
import { useState } from "react";


const Main = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
      setList([...list, inputValue])
      setInputValue("");
  }
  return (
  <main>
    <div className="form">
    <input type="text" placeholder="New task..." 
    onInput={(ev) => setInputValue(ev.target.value)} />
    <button onClick={addTodo}>Add</button>
    </div>
    <ul>
      {list.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </main>
  )

}
export default Main;