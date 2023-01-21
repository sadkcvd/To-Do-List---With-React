import React from 'react'

const TodoList = ({ todoItem, setTodoList, todoList }) => {

  const deleteHandler = () => {
    console.log("todoItem", todoItem);
    setTodoList(todoList.filter(item => item.id !== todoItem.id))
  }

  return (
      <li>
        <h2>{todoItem.todoTitle}</h2>
        <p>{todoItem.todoContent}</p>
        <button onClick={deleteHandler}>X</button>
      </li>
  )
}

export default TodoList
