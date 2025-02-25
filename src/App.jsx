import {useState} from "react";
import Navbar from "./components/Navbar";

function App() {
  const [addTodo, setAddTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd=()=>{
    setTodos([...todos, addTodo]);
    console.log(todos);
    
    setAddTodo("");
  }
  return (
    <>
      <Navbar />
      <div className="container m-auto bg-violet-200 min-w-screen p-4">
        <h1 className="text-xl font-bold">Add a Task</h1>
        <div className="py-1">
          <input type="text" name="add" value={addTodo} onChange={(e)=>{setAddTodo(e.target.value)}} className="border-1 bg-amber-50 w-56" />
          <button onClick={handleAdd} className="bg-violet-600 text-white font-bold hover:bg-violet-800 px-4 py-0.5 rounded-lg mx-3 cursor-pointer">
            Add
          </button>
        </div>
        <h1 className="text-xl font-bold">Your Tasks</h1>
       {todos.map((todo)=>{
        return  <div key={todo} className="flex justify-between items-center max-w-76 my-1 py-1 gap-2">
         <div className="flex justify-center items-center">{todo}</div>
         <div>
           <button className="bg-violet-600 text-white font-bold hover:bg-violet-800 px-3 py-0.5 rounded-lg mx-1 cursor-pointer">
             Edit
           </button>
           <button className="bg-violet-600 text-white font-bold hover:bg-violet-800 px-3 py-0.5 rounded-lg mx-1 cursor-pointer">
             Delete
           </button>
         </div>
       </div>
       })}
      </div>
    </>
  );
}

export default App;
