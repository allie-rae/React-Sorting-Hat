import React, { Component } from 'react'

class SortQuiz extends Component {
    constructor() {
        super()
        this.state = {
            ravenclaw: 0,
            gryffindor: 0,
            hufflepuff: 0,
            slytherin: 0
        }

        this.handleChange = (e) => {
                this.setState({
                    [e.target.className]: parseInt(e.target.value, 10) + 1
                })
        }

        this.onSubmit = (e) => {
            e.preventDefault()
            if (this.state.ravenclaw > this.state.slytherin && this.state.ravenclaw > this.state.gryffindor && this.state.ravenclaw > this.state.hufflepuff) {
                console.log("Ravenclaw")
            } else if (this.state.gryffindor > this.state.slytherin && this.state.gryffindor > this.state.ravenclaw && this.state.gryffindor > this.state.hufflepuff) {
                console.log("Gryffindor")
            } else if (this.state.slytherin > this.state.gryffindor && this.state.slytherin > this.state.ravenclaw && this.state.slytherin > this.state.hufflepuff) {
                console.log("Slytherin")
            } else {
                console.log("Hufflepuff")
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                Which of these words best describes you? <br />
                        <input value={this.state.slytherin} onSubmit={this.handleChange} className="slytherin" name="q1" type="radio" />Ambitious<br />
                        <input value={this.state.hufflepuff} onSubmit={this.handleChange} className="hufflepuff" name="q1" type="radio" />Kind<br />
                        <input value={this.state.gryffindor} onSubmit={this.handleChange} className="gryffindor" name="q1" type="radio" />Brave<br />
                        <input value={this.state.ravenclaw} onSubmit={this.handleChange} className="ravenclaw" name="q1" type="radio" />Curious<br />
                <br />
                    Which person do you admire most?<br />
                        <input value={this.state.slytherin} onSubmit={this.handleChange} className="slytherin" name="q2" type="radio" />Severus Snape<br />
                        <input value={this.state.hufflepuff} onSubmit={this.handleChange} className="hufflepuff" name="q2" type="radio" />Nymphadora Tonks<br />
                        <input value={this.state.gryffindor} onSubmit={this.handleChange} className="gryffindor" name="q2" type="radio" />Albus Dumbledore<br />
                        <input value={this.state.ravenclaw} onSubmit={this.handleChange} className="ravenclaw" name="q2" type="radio" />Luna Lovegood<br />
                <br />
                    Which color do you like best?<br />
                        <input value={this.state.slytherin} onSubmit={this.handleChange} className="slytherin" name="q3" type="radio" />Green<br />
                        <input value={this.state.hufflepuff} onSubmit={this.handleChange} className="hufflepuff" name="q3" type="radio" />Yellow<br />
                        <input value={this.state.gryffindor} onSubmit={this.handleChange} className="gryffindor" name="q3" type="radio" />Red<br />
                        <input value={this.state.ravenclaw} onSubmit={this.handleChange} className="ravenclaw" name="q3" type="radio" />Blue<br />
                <br />
                    Your goal in life is to:<br />
                        <input value={this.state.slytherin} onSubmit={this.handleChange} className="slytherin" name="q4" type="radio" />Be the best<br />
                        <input value={this.state.hufflepuff} onSubmit={this.handleChange} className="hufflepuff" name="q4" type="radio" />Be good to everyone<br />
                        <input value={this.state.gryffindor} onSubmit={this.handleChange} className="gryffindor" name="q4" type="radio" />Make morally right choices<br />
                        <input value={this.state.ravenclaw} onSubmit={this.handleChange} className="ravenclaw" name="q4" type="radio" />Learn everything you possibly can<br />
                <br />
                    What animal do you like best?<br />
                        <input value={this.state.slytherin} onSubmit={this.handleChange} className="slytherin" name="q5" type="radio" />Snake<br />
                        <input value={this.state.hufflepuff} onSubmit={this.handleChange} className="hufflepuff" name="q5" type="radio" />Badger<br />
                        <input value={this.state.gryffindor} onSubmit={this.handleChange} className="gryffindor" name="q5" type="radio" />Lion<br />
                        <input value={this.state.ravenclaw} onSubmit={this.handleChange} className="ravenclaw" name="q5" type="radio" />Raven<br />
                <br />
                    If you found $50 on the ground, you would:<br />
                        <input value={this.state.slytherin} onSubmit={this.handleChange} className="slytherin" name="q6" type="radio" />Spend it for fun<br />
                        <input value={this.state.hufflepuff} onSubmit={this.handleChange} className="hufflepuff" name="q6" type="radio" />Give it to someone in need<br />
                        <input value={this.state.gryffindor} onSubmit={this.handleChange} className="gryffindor" name="q6" type="radio" />Give it to lost and found<br />
                        <input value={this.state.ravenclaw} onSubmit={this.handleChange} className="ravenclaw" name="q6" type="radio" />Use it to buy books<br />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SortQuiz