import React, { setState, Component } from 'react'

class SortQuiz extends Component {
    constructor() {
        super()
        this.state = {
            ravenclaw: 0,
            gryffindor: 0,
            hufflepuff: 0,
            slytherin: 0
        }
    }

    
    render() {
        return (
            <form>
                <label for="q-one">
                    Which of these words best describes you?
                    <select>
                        <option>Ambitious</option>
                        <option>Kind</option>
                        <option>Brave</option>
                        <option>Curious</option>
                    </select>
                </label>
                <br />
                <label for="q-two">
                    Which person do you admire most?
                    <select>
                        <option>Severus Snape</option>
                        <option>Albus Dumbledore</option>
                        <option>Luna Lovegood</option>
                        <option>Nymphadora Tonks</option>
                    </select>
                </label>
                <br />
                <label for="q-three">
                    Which color do you like best?
                    <select>
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                    </select>
                </label>
                <br />
                <label for="q-four">
                    Your goal in life is to:
                    <select>
                        <option>Make morally right choices</option>
                        <option>Be good to everyone</option>
                        <option>Learn everything you possibly can</option>
                        <option>Be the best</option>
                    </select>
                </label>
                <br />
                <label for="q-five">
                    What animal do you like best?
                    <select>
                        <option>Badger</option>
                        <option>Raven</option>
                        <option>Lion</option>
                        <option>Snake</option>
                    </select>
                </label>
                <br />
                <label for="q-six">
                    If you found $50 on the ground, you would:
                    <select>
                        <option>Give it to lost and found</option>
                        <option>Give it to someone in need</option>
                        <option>Use it to buy books</option>
                        <option>Spend it for fun</option>
                    </select>
                </label>
                <br />
                <button type="submit"> Submit</button>
            </form>
        )
    }
}

export default SortQuiz