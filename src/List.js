import React from 'react'
import Item from './Item'

const List = ({ deleteTodo, todos, setIsDone}) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Item content={todo.content}
                            id={todo.id}
                            key={todo.id}
                            deleteTodo={deleteTodo}
                            isDone = {isDone}
                            // isDone = {todo.isDone}
                            setIsDone = {setIsDone}
                        />
                    )
                })

            }
        </ul>
    )
}


export default List

