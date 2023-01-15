import React from 'react'
import "../../App.css"

const Header = ({ todoTitle, setTodoTitle, todoContent, setTodoContent, todoList, setTodoList }) => {

  const onChangeTitleInput = (e) => {
    setTodoTitle(e.target.value)
    console.log("todoTitle", todoTitle)
  }
  const onChangeContentInput = (e) => {
    setTodoContent(e.target.value)
    console.log("todoContent", todoContent)
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (todoTitle === "" || todoContent === "") {
      console.log("Karakter Giriniz");
      return false;
    }
    setTodoList([...todoList, { todoTitle: todoTitle, todoContent: todoContent, completed: false, id: Math.random() * 1000 }])
    console.log("todoList", todoList);
    setTodoTitle("");
    setTodoContent("");
  }

  return (
    <header className='header'>
      {/* <h1>To Do List</h1> */}
      <form onSubmit={onSubmitForm}>
        <div className='grid-container'>

          <input className='title-input' placeholder="Title..?" onChange={onChangeTitleInput} value={todoTitle} />


          <input className='content-input' placeholder="Content..?" onChange={onChangeContentInput} value={todoContent} />


          <button className='submit-btn'>+</button>


        </div>
      </form>
    </header>
  )
}

export default Header