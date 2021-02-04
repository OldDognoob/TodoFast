import React, { useState, useEffect } from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State
  // this piece of state will be submit it again every time it runs
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

   //useEffect : it will run only once when the component is rendered
  // But we can rerun this function if we add a value in the empty array we have in the end
  //Every time our todo changes run the above function
  useEffect(()=> {
    //UseEffect
    const filterHandler = () =>{
      // eslint-disable-next-line default-case
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true))
          break;
        case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.uncompleted === false))
        break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status])

  //Save to local Storage
  

  return (
    <div className="App">
      <header>
        <h1>Maria Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus = {setStatus}
        
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
