import React, { Component } from 'react'

class EditButton extends Component {
    constructor() {
        super()
        this.state = {
            isEditting: false
        }
        this.editTask = this.editTask.bind(this)
        this.submitTask = this.submitTask.bind(this)
    }

    editTask() {
        const { id } = this.props
        this.setState({
            isEditting: !this.state.isEditting
        })
        const textField = document.querySelector(`.textField#${id}`)
        textField.contentEditable = true
        textField.innerText = textField.innerText.slice(3)
        textField.focus()
        textField.style.cssText = "outline: none; padding-right: 4rem;"

        document.execCommand('selectAll', true, null)
        document.getSelection().collapseToEnd()

        const item = textField.parentNode
        item.style.cssText = "background-color: white; color: black;"
        item.onmouseover = () => {
            item.style.color = "black"
        }
    }
    submitTask() {
        const { id, updateTask } = this.props
        this.setState({
            isEditting: !this.state.isEditting
        })
        const textField = document.querySelector(`.textField#${id}`)
        textField.contentEditable = false
        textField.style.cssText = "padding-right: initial;"

        const item = textField.parentNode
        item.style.cssText = "background-color: initial; color: initial;"
        item.onmouseover = () => {
            item.style.color = "rgba(0, 0, 0, 0.2)"
        }
        item.onmouseout = () => {
            item.style.color = "black"
        }
        let text = textField.innerText
        updateTask(id, text)
    }
    render() {
        return (
            <div className="editButton" >
                {
                    this.state.isEditting ?
                        <i className="fas fa-check" onClick={this.submitTask}></i> :
                        <i className="fas fa-edit" onClick={this.editTask}></i>
                }
            </div>
        )
    }
}

export default EditButton