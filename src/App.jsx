import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleAdd = () => {
    if (edit !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === edit ? { ...todo, text: addTodo } : todo
        )
      );
      setEdit(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: addTodo, completed: false }]);
    }
    setAddTodo("");
  };

  const handleEdit = (todo) => {
    setAddTodo(todo.text);
    setEdit(todo.id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <>
      <div className="bg-violet-100 min-h-screen">
        <Navbar />
        <div className="border-2 bg-violet-200 shadow-xl sm:w-fit w-xs rounded-xl m-auto my-2 p-4">
          <h1 className="text-xl text-center font-bold">
            iTask - Manage your to-do's at one place
          </h1>
          <h1 className="text-xl pt-2 font-bold">
            {edit ? "Edit Task" : "Add a Task"}
          </h1>
          <div className="my-2">
            <input
              type="text"
              name="add"
              value={addTodo}
              onChange={(e) => {
                setAddTodo(e.target.value);
              }}
              className="border-1 bg-white sm:w-md w-40 rounded-xl"
            />
            <button
              onClick={handleAdd}
              className="bg-violet-600 text-white font-bold hover:bg-violet-800 px-4 py-0.5 rounded-xl mx-3 cursor-pointer"
            >
              {edit ? "Update" : "Add"}
            </button>
          </div>
          <h1 className="text-xl pt-2 font-bold">Your Tasks</h1>
          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className=" py-1 flex justify-center items-center my-2 gap-2"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheck(todo.id)}
                />
                <div className={`w-96 rounded-xl ${todo.completed ? "line-through text-gray-500" : ""}`}>{todo.text}</div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="bg-violet-600 text-white font-bold hover:bg-violet-800 px-3 py-0.5 rounded-xl mx-1 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-violet-600 text-white font-bold hover:bg-violet-800 px-3 py-0.5 rounded-xl mx-1 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
