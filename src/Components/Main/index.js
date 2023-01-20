import React from 'react'

const Main = ({ todoList }) => {
  return (

    <section className='main'>
      <ul>
        {todoList.map((item, idx) => (
          <li key={idx}>
            <h2>{item.todoTitle}</h2>
            <p>{item.todoContent}</p>
            <button>X</button>
          </li>
        ))}
      </ul>
    </section>

  )
}

export default Main