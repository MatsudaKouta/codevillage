import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'

const App = () => {
    const [todos, setTodos] = useState([])
    const [isDone, setIsDone] = useState(false)

    // const updateTodo = isDone =>{
    //     setIsDone(!isDone)
    // }


    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content: content,
                id: shortid.generate(),
                isDone:false
            }
        ])
    }


    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List deleteTodo={deleteTodo} todos={todos} setIsDone={setIsDone} isDone={isDone}/>
        </>
    )
}



export default App

