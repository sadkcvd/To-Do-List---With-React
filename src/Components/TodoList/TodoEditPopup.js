import React from 'react'
// import { useState } from 'react';

const TodoEditPopup = ({ editPopup, setEditPopup }) => {

    const displayEditPopup = (e) => {
        e.preventDefault();
        setEditPopup(false)
    }

    return (
        <>
            {editPopup ?
                <form className='edit-popup'>

                    <div className='close-popup'>
                        <button onClick={displayEditPopup}>X</button>
                    </div>
                    <div className='edit-body'>
                        <input className='edit-title' placeholder='Edit Title..' />
                        <input className='edit-content' placeholder='Edit Content..' />
                    </div>
                    <div className='edit-buttons'>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>

                </form>
                : null}
        </>
    )
}

export default TodoEditPopup