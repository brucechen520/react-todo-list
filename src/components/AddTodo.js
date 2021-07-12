import React from 'react'

class AddTodo extends React.Component {
    render() {
        const placeHolder = 'Please input next todo'
        const handleChange = this.props.datas.handleAddTodoChange
        const addTodo = this.props.datas.addTodo
        const newTodo = this.props.datas.newTodo
        return (
            <div className="addTodoContainer">
                <input className="inputTodo" type="text" placeholder={placeHolder} value={newTodo.todoData} onChange={(event) => handleChange(event)}></input>
                <button className="addTodoButton" onClick={() => addTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;