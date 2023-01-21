import React from 'react'
import "../../App.css"

const Header = ({ todoTitle, setTodoTitle, todoContent, setTodoContent, todoList, setTodoList }) => {

  const onChangeTitleInput = (e) => {
    setTodoTitle(e.target.value)
  }
  const onChangeContentInput = (e) => {
    setTodoContent(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (todoTitle === "" || todoContent === "") {
      console.log("Karakter Giriniz");
      return false;
    }
    setTodoList([...todoList, { todoTitle: todoTitle, todoContent: todoContent, completed: false, id: Math.random() * 1000 }])
    setTodoTitle("");
    setTodoContent("");
  }

  return (
    <header className='header'>
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