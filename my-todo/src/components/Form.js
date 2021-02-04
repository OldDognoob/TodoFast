import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  // we going to write javascript code and function
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  //prevents the refresh to lost the todo
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      //spreading todos using the three dots
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //resetting our setInputText back to zero
    setInputText("");
  };
  const statusHandler = (e) => {
      console.log(e.target.value);

  }
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option name="todos" className="filter-todo">
            All
          </option>
          <option value="completed">Completed</option>
          <option value="unclompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
