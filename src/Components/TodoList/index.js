import React from 'react'
import { AiFillEdit, AiOutlineInfoCircle, AiOutlineShareAlt } from 'react-icons/ai';

const TodoList = ({ todoItem, setTodoList, todoList }) => {

  const deleteHandler = () => {
    console.log("todoItem", todoItem);
    setTodoList(todoList.filter(item => item.id !== todoItem.id))
  }

  return (
    <>
      <li>
        <h2>{todoItem.todoTitle}</h2>
        <p>{todoItem.todoContent}</p>
        <button onClick={deleteHandler}>X</button>
      </li>

      <div className='li-buttons'>
        <button><AiFillEdit /></button>
        <button><AiOutlineShareAlt /></button>
        <button><AiOutlineInfoCircle /></button>
      </div>
    </>
  )
}

export default TodoList
