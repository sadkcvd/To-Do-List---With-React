import React from 'react'
import TodoList from "../TodoList/index";
const Main = ({ todoList, setTodoList, filteredTodos }) => {


  return (
    <section className='main'>
      {todoList.length > 0 ?
        <ul>
          {
            filteredTodos.map(todoItem =>
              <TodoList key={todoItem.id} todoItem={todoItem} todoList={todoList} setTodoList={setTodoList} />
            )}
        </ul>
        :
        <div className='main-empty'>
          <hr />
          <p className='no-tasks'>No Tasks</p>
          <hr />
        </div>
      }
    </section>

  )
}

export default Main