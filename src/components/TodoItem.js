import React from "react"

class TodoItem extends React.Component {

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        return (
            <li className="todo-item">
                <input
                    type="checkbox"
                    checked={this.props.todo.completed}
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                />
                {/* <button style={{backgroundColor:'grey', border:'1px solid grey'}} onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                    Edit
            </button> */}
                <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                    Delete
            </button>
                <span style={this.props.todo.completed ? completedStyle : null}>
                    {this.props.todo.title}
                </span>
                {/* {this.props.todo.title} */}
            </li>
        );
    }
}

export default TodoItem