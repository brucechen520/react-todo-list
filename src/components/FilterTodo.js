import React from 'react'

class FilterTodo extends React.Component {

    render() {
        return (
            <div className="filterTodoContainer">
                <button className="filterButton" value="all" onClick={(event) => this.props.click(event)}>All</button>
                <button className="filterButton" value="in progress" onClick={(event) => this.props.click(event)}>In Progress</button>
                <button className="filterButton" value="finished" onClick={(event) => this.props.click(event)}>Finished</button>
            </div>
        )
    }
}

export default FilterTodo;