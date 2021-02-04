import React from 'react';

const Form = ({setInputText}) =>{
    // we going to write javascript code and function
    const inputTextHandler = (e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    //prevents the refresh to lost the todo
    const submitTodoHandler = (e) => {
        e.preventDefault();
    };
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option name="todos" className="filter-todo">All</option>
                    <option value="completed">Completed</option>
                    <option value="unclompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;