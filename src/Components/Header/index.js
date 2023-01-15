import React from 'react'
import "../../App.css"

const Header = ({ todo, setTodo, todoList, setTodoList }) => {

  const onChangeInput = (e) => {
    setTodo(e.target.value)
  }

  const onSubmitInput = (e) => {
    e.preventDefault();
    if(todo === ""){
      console.log("Karakter Giriniz");
      return false;
    }
    setTodoList([...todoList, { text: todo, completed: false, id: Math.random() * 1000 }])
    setTodo("");
  }

  return (
    <div>
      <header className='header'>
        <h1>todos</h1>
        <form onSubmit={onSubmitInput}>
          <input className='new-todo' placeholder="What needs to be done?" onChange={onChangeInput} value={todo} />
        </form>
      </header>
    </div>
  )
}

export default Header