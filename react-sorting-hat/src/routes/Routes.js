import React from 'react';
import {
    Route,
    Link
} from "react-router-dom";
import App from '../App'
import SortQuiz from '../components/SortQuiz'
import Ravenclaw from '../components/Ravenclaw'

const Routes = () => {
    return (
        <div>
            <nav>
                <Link to="/SortQuiz">Get Sorted</Link>
            </nav>
                <Route exact path="/" component={App} />
                <Route exact path="/SortQuiz" component={SortQuiz} />
                <Route exact path="/Ravenclaw" component={Ravenclaw} />
        </div>
    )
}


export default Routes