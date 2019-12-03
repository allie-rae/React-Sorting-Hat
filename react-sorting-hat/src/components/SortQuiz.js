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
            e.preventDefault()
            console.log(e.target.name)
                this.setState({
                    [e.target.name]: parseInt(e.target.value, 10) + 1
                })
            console.log(this.state)
        }


    }


    render() {
        return (
            <form>
                <label>
                Which of these words best describes you? <br />
                        <input value={this.state.slytherin} onClick={this.handleChange} name="slytherin" type="checkbox" />Ambitious<br />
                        <input value={this.state.hufflepuff} onClick={this.handleChange} name="hufflepuff" type="checkbox" />Kind<br />
                        <input value={this.state.gryffindor} onClick={this.handleChange} name="gryffindor" type="checkbox" />Brave<br />
                        <input value={this.state.ravenclaw} onClick={this.handleChange} name="ravenclaw" type="checkbox" />Curious<br />
                </label>
                <br />
                <label>
                    Which person do you admire most?<br />
                        <input value={this.state.slytherin} onClick={this.handleChange} name="slytherin" type="checkbox" />Severus Snape<br />
                        <input value={this.state.hufflepuff} onClick={this.handleChange} name="hufflepuff" type="checkbox" />Nymphadora Tonks<br />
                        <input value={this.state.gryffindor} onClick={this.handleChange} name="gryffindor" type="checkbox" />Albus Dumbledore<br />
                        <input value={this.state.ravenclaw} onClick={this.handleChange} name="ravenclaw" type="checkbox" />Luna Lovegood<br />
                </label>
                <br />
                <label>
                    Which color do you like best?<br />
                        <input value={this.state.slytherin} onClick={this.handleChange} name="slytherin" type="checkbox" />Green<br />
                        <input value={this.state.hufflepuff} onClick={this.handleChange} name="hufflepuff" type="checkbox" />Yellow<br />
                        <input value={this.state.gryffindor} onClick={this.handleChange} name="gryffindor" type="checkbox" />Red<br />
                        <input value={this.state.ravenclaw} onClick={this.handleChange} name="ravenclaw" type="checkbox" />Blue<br />
                </label>
                <br />
                <label>
                    Your goal in life is to:<br />
                        <input value={this.state.slytherin} onClick={this.handleChange} name="slytherin" type="checkbox" />Be the best<br />
                        <input value={this.state.hufflepuff} onClick={this.handleChange} name="hufflepuff" type="checkbox" />Be good to everyone<br />
                        <input value={this.state.gryffindor} onClick={this.handleChange} name="gryffindor" type="checkbox" />Make morally right choices<br />
                        <input value={this.state.ravenclaw} onClick={this.handleChange} name="ravenclaw" type="checkbox" />Learn everything you possibly can<br />
                </label>
                <br />
                <label>
                    What animal do you like best?<br />
                        <input value={this.state.slytherin} onClick={this.handleChange} name="slytherin" type="checkbox" />Snake<br />
                        <input value={this.state.hufflepuff} onClick={this.handleChange} name="hufflepuff" type="checkbox" />Badger<br />
                        <input value={this.state.gryffindor} onClick={this.handleChange} name="gryffindor" type="checkbox" />Lion<br />
                        <input value={this.state.ravenclaw} onClick={this.handleChange} name="ravenclaw" type="checkbox" />Raven<br />
                </label>
                <br />
                <label>
                    If you found $50 on the ground, you would:<br />
                        <input value={this.state.slytherin} onClick={this.handleChange} name="slytherin" type="checkbox" />Spend it for fun<br />
                        <input value={this.state.hufflepuff} onClick={this.handleChange} name="hufflepuff" type="checkbox" />Give it to someone in need<br />
                        <input value={this.state.gryffindor} onClick={this.handleChange} name="gryffindor" type="checkbox" />Give it to lost and found<br />
                        <input value={this.state.ravenclaw} onClick={this.handleChange} name="ravenclaw" type="checkbox" />Use it to buy books<br />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default SortQuiz