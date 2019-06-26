import React from "react"

class Add extends React.Component {
    state = {
        title: ''
    }
    whileTyping = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addToDo(this.state.title)
        this.setState({ title: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input onChange={this.whileTyping} value={this.state.title} type="text" name="title" placeholder="Add Task..." className="inputtask"></input>
                    <input type="submit" value="submit" className="buttonsubmit"></input>
                </form>
            </div>
        )
    }
}

export default Add;