import React, { useState } from 'react'
import { AiFillEdit, AiOutlineShareAlt, AiOutlineCheckSquare } from 'react-icons/ai';

const TodoList = ({ todoItem, setTodoList, todoList }) => {

  const [displayButtons, setDisplayButtons] = useState(false);

  const deleteHandler = () => {
    setTodoList(todoList.filter(item => item.id !== todoItem.id))
  }

  const completeHandler = () => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  const displayButtonsFunc = () => {
    setDisplayButtons(!displayButtons)
  }

  return (
    <>
      <li className={`${todoItem.completed ? "todo-item-completed" : "todo-item"}`} onClick={displayButtonsFunc}>
        <h2>{todoItem.todoTitle}</h2>
        <p>{todoItem.todoContent}</p>
        <button onClick={deleteHandler}>X</button>
      </li>

      <div className={displayButtons ? 'show-buttons' : 'hide-buttons'}>
        <button><AiFillEdit /></button>
        <button><AiOutlineShareAlt /></button>
        <button onClick={completeHandler}><AiOutlineCheckSquare /></button>
      </div>
    </>
  )
}

export default TodoList
