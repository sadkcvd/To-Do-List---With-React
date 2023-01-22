import React, { useState, useEffect } from 'react'
import Header from "./Header/index"
import Main from "./Main/index"
const Todo = () => {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todoList.filter(todo => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todoList.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todoList);
      }
    }
    filterHandler();
  }, [status, todoList])


  return (
    <section className='todoapp'>
      <Header
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoContent={todoContent}
        setTodoContent={setTodoContent}
        todoList={todoList}
        setTodoList={setTodoList} />

      <Main
        todoList={todoList}
        setTodoList={setTodoList}
        filteredTodos={filteredTodos}
        setStatus={setStatus}
      />

    </section>
  )
}

export default Todo