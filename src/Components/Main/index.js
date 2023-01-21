import React from 'react'

const Main = ({ todoList }) => {
  return (

    <section className='main'>
      {todoList.length > 0 ?
        <ul>
          {todoList.map((item, idx) => (
            <li key={idx}>
              <h2>{item.todoTitle}</h2>
              <p>{item.todoContent}</p>
              <button>X</button>
            </li>
          ))}
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