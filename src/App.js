import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Floweraura from './Components/floweraura';
// import floweraura from './Components/floweraura';
// import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Floweraura}></Route>
            </Switch>
        </Router>
    );
}

export default App;