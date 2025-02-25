import {useState} from "react";
import Navbar from "./components/Navbar";

function App() {
  const [addTodo, setAddTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd=()=>{
    setTodos([...todos, addTodo]);
    setAddTodo("");
  }

  const handleEdit = (id)=>{ 
    let t = todos.filter(i=>i.id === id) 
    if (t.length > 0) { 
      setAddTodo(t[0].todo); 
      let newTodos = todos.filter(item => item.id !== id);
      setTodos(newTodos);
    }    
  }
  
  const handleDelete= (id)=>{  
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos)
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
       {todos.map((item,index)=>{
        return  <div key={index} className="flex gap-2">
         <div>{item}</div>
         <div>
           <button onClick={(e)=>handleEdit(e, item.id)} className="bg-violet-600 text-white font-bold hover:bg-violet-800 px-3 py-0.5 rounded-lg mr-2 cursor-pointer">
             Edit
           </button>
           <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-violet-600 text-white font-bold hover:bg-violet-800 px-3 py-0.5 rounded-lg cursor-pointer">
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
