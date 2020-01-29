import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Floweraura from './Components/floweraura';
import './less/constant.less';

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