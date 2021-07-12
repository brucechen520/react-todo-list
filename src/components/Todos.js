import React from 'react'

class SingleTodo extends React.Component {

    getModifyTime(date) {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
    }

    render() {
        const todo = this.props.data.todo
        const index = this.props.data.index
        const toggleEditTodo = this.props.data.toggleEditTodo
        const removeTodo = this.props.data.removeTodo
        const toggleFinishTodo = this.props.data.toggleFinishTodo
        const handleChangeTodo = this.props.data.handleChangeTodo
        const editOrSaveButton = todo.isEdit? 'Save': 'Edit'
        const singleBackGroundClass = index % 2? 'singleTodoData lightOrange': 'singleTodoData lightYellow'
        const isFinished = todo.isFinished
        return (
            <div className={ singleBackGroundClass } key = {todo.id}>
                <input type="checkbox" value={ isFinished } checked = {isFinished} onChange={ () => toggleFinishTodo(index)} ></input>
                { todo.isEdit? <input type="text" value={todo.todoData} onChange={(event) => handleChangeTodo(index, event)} /> 
                             : <label style={{textDecoration:isFinished?"line-through":"none"}} >{todo.todoData}</label> 
                }
                <div className="buttonGroup">
                    <button className="buttonClass" onClick={(event) => toggleEditTodo(index)} disabled={isFinished}> { editOrSaveButton } </button>
                    <button className="buttonClass" onClick={ () => removeTodo(index)} >Remove</button>
                </div>
            </div>
        )
    }
}

// todoDatas: this.state.todoDatas, 
// filterData: this.state.filterData,
// toggleEditTodo: this.state.toggleEditTodo,
// removeTodo: this.state.removeTodo,
// toggleFinishTodo: this.state.toggleFinishTodo,

class Todos extends React.Component {
    render() {
        const todoDatas = this.props.datas.todoDatas
        const filterData = this.props.datas.filterData
        const toggleEditTodo = this.props.datas.toggleEditTodo
        const removeTodo = this.props.datas.removeTodo
        const toggleFinishTodo = this.props.datas.toggleFinishTodo
        const handleChangeTodo = this.props.datas.handleChangeTodo
        let filter = []
        if(filterData === "finished") filter = todoDatas.filter(todo => todo.isFinished)
        else if(filterData === "all") filter = todoDatas
        else filter = todoDatas.filter(todo => !todo.isFinished)

        const render = filter.map((todo, index) => {
            return <SingleTodo data={{ todo, toggleEditTodo, removeTodo, toggleFinishTodo, index, handleChangeTodo }} />
        })
        
        return (
            <div className="todoListsContainer"> {render}</div>
        )
    }
}

export default Todos;