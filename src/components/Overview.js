import React, { Component } from 'react'
import EditButton from './EditButton'

class Overview extends Component {
    render() {
        const { tasks, deleteTask, updateTask } = this.props
        let i = 0
        return (
            <div className="Overview">
                {
                    tasks.map(task => {
                        i++
                        const num = `${i}. `
                        return (
                            <div className="items" key={task.id}>
                                <div className="textField" id={task.id} minLength="3">{`${num}${task.text}`}</div>
                                <div className="right">
                                    <EditButton id={task.id} updateTask={updateTask} />
                                    <i className="fas fa-trash-alt" id={task.id} onClick={deleteTask}></i>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    }
}

export default Overview