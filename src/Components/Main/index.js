import React from 'react'

const Main = ({ todoList }) => {
  return (
    <div>
      <section className='main'>
        <ul>
          {todoList.map((item, idx) => (
            <li key={idx}>
              {item.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Main