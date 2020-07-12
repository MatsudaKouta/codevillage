import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setvalue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (value !== '') {
        addTodo(value)
        } else {
            alert('何か入力してください')
        }
        setvalue('')
    }       


    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                    value = {value}
                onChange={e => {
                    setvalue(e.target.value)
                }}
            />
        </form>
    )
}


export default Form

// import React, { useState } from 'react'

// const Form = ({ addTodo }) => {
//     const [value, setValue] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (value === '') {
//             alert('err')
//         } else {
//             addTodo(value)
//         }
//     }
//     setValue('')


// return (
//     <form onSubmit={handleSubmit}>
//         <input
//             type='text'
//             name='text'
//             placeholder='todo'
//             value={value}
//             onChange={e => {
//                 setValue(e.target.value)
//             }}
//         />
//     </form>
// )
// }

// export default Form
