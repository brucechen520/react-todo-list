import React from 'react'
import AddTodo from './AddTodo'
import FilterTodo from './FilterTodo'
import Todos from './Todos'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            todoDatas: [{
                'id': 1,
                'modifyTime': new Date(),
                'todoData': '洗澡', 
                'isFinished': false,
                'isEdit': false,
                'tag': 'default'
            }, {
                'id': 2,
                'modifyTime': new Date(),
                'todoData': '穿衣服', 
                'isFinished': false,
                'isEdit': false,
                'tag': 'default'
            }],
            filterData: 'all', // all, finished, !finished
            newTodo: {
                'id': '',
                'modifyTime': '',
                'todoData': '', 
                'isFinished': false,
                'isEdit': false,
                'tag': 'default'
            },
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.toggleEditTodo = this.toggleEditTodo.bind(this)
        this.toggleFinishTodo = this.toggleFinishTodo.bind(this)
        this.handleChangeTodo = this.handleChangeTodo.bind(this)
        this.handleAddTodoChange = this.handleAddTodoChange.bind(this)
        this.filterData = this.filterData.bind(this)
    }

    addTodo () {
        const newTodo = this.state.newTodo
        const todoDatas = this.state.todoDatas
        this.setState({
            todoDatas: [...todoDatas, newTodo],
            newTodo: {
                'id': '',
                'modifyTime': '',
                'todoData': '', 
                'isFinished': false,
                'isEdit': false,
                'tag': 'default'
            }
        })
    }

    handleAddTodoChange(event) {
        const val = event.target.value
        const todo = this.state.todoDatas
        const id = todo[todo.length - 1].id + 1
        this.setState({
            newTodo: {
                'id': id + 1,
                'modifyTime': new Date(),
                'todoData': val, 
                'isFinished': false,
                'isEdit': false,
                'tag': 'default'
            }
        })
    }

    removeTodo (index) {
        let todo = this.state.todoDatas
        if(index < todo.length) {
            todo.splice(index, 1)
            this.setState({todoDatas: todo})
        }
        else alert('Cannot Remove')
    }

    toggleEditTodo(index) {
        let todo = this.state.todoDatas
        let isEdit = todo[index].isEdit
        todo[index].isEdit = !isEdit
        if(todo.length <= index) {
            alert('Warning!')
            return
        }
        this.setState({todoDatas: todo})
    }

    handleChangeTodo(index, event) {
        const newTodo = event.target.value
        let todo = this.state.todoDatas
        todo[index].todoData = newTodo
        if(todo.length <= index) {
            alert('Warning!')
            return
        }
        this.setState({todoDatas: todo})
    }

    toggleFinishTodo (index) {
        let todo = this.state.todoDatas
        todo[index].isFinished = !todo[index].isFinished
        if(todo.length <= index) {
            alert('Warning!')
            return
        }
        this.setState({todoDatas: todo})
    }

    filterData (event) {
        const val = event.target.value;
        this.setState({
            filterData: val,
        })
    }

    render() {
        const addTodo = this.addTodo
        const handleAddTodoChange = this.handleAddTodoChange
        const newTodo = this.state.newTodo
        return (
            <div>
                <FilterTodo click={this.filterData} />
                <AddTodo datas={{addTodo, handleAddTodoChange, newTodo}} />
                <Todos datas={ {
                        todoDatas: this.state.todoDatas, 
                        filterData: this.state.filterData,
                        toggleEditTodo: this.toggleEditTodo,
                        removeTodo: this.removeTodo,
                        toggleFinishTodo: this.toggleFinishTodo,
                        handleChangeTodo: this.handleChangeTodo,
                        } } />
            </div>
        )
    }
}

export default TodoList;