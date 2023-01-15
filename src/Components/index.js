import React, { useState } from 'react'
import Header from "./Header/index"
import Main from "./Main/index"
import Footer from "./Footer/index"
const Todo = () => {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <section className='todoapp'>
        <Header todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
        <Main todoList={todoList}/>
        <Footer/>
    </section>
  )
}

export default Todo