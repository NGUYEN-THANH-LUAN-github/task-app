import React, { Component } from 'react'
import './styles/index.css'
import Overview from './components/Overview'
import uniqid from 'uniqid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      task: { text: '', id: uniqid() },
      tasks: [{ text: 'do this', id: uniqid() }, { text: 'do that', id: uniqid() }]
    }

    this.submitTask = this.submitTask.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
  }

  handleChange(e) {
    this.setState({
      task: { text: e.target.value, id: this.state.task.id }
    })
  }

  submitTask(e) {
    e.preventDefault()
    let task = this.state.task
    if (task.text === "") task.text = "<empty>"
    this.setState({
      tasks: this.state.tasks.concat(task),
      task: { text: '', id: uniqid() },
    })
  }

  deleteTask(e) {
    const id = e.target.id
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id),
    })

  }

  updateTask(id, text) {
    this.setState({
      tasks: this.state.tasks.map(task => {
        return task.id === id ?
          Object.assign({}, task, { text }) :
          task
      })
    })
  }

  render() {
    const { tasks, task } = this.state
    return (
      <div className="App">
        <h1>Task App</h1>
        <div className="content">
          <form onSubmit={this.submitTask}>
            <input id="input" type="text" onChange={this.handleChange} value={task.text} autoComplete="off" maxLength={75} />
            <p>max chars: 75</p>
            <button type="submit">Add Task</button>
          </form>
          <Overview tasks={tasks} deleteTask={this.deleteTask} updateTask={this.updateTask} />
        </div>
      </div>
    )
  }
}

export default App
