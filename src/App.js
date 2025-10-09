import React from 'react';
import './App.css';
// import Login from './components/Login/Login';
import Home from './components/Home/Home';

import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                {/* <Route path='/home' component={Home}></Route> */}
            </Switch>
        </>
    )
}

export default App;
