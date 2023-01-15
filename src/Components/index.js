import React, { useState } from 'react'
import Header from "./Header/index"
import Main from "./Main/index"
import Footer from "./Footer/index"
const Todo = () => {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <section className='todoapp'>
      <Header
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoContent={todoContent}
        setTodoContent={setTodoContent}
        todoList={todoList}
        setTodoList={setTodoList} />

      <Main todoList={todoList} />
      <Footer />
    </section>
  )
}

export default Todo