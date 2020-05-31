import React from "react";
import {HashRouter, Route, Switch} from 'react-router-dom'
import {HttpTest} from "./view/HttpTest";
import CounterConnector from "./view/counter/CounterConnector";

function AppRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/test" component={HttpTest}/>
                <Route exact path="/counter" component={CounterConnector}/>
            </Switch>
        </HashRouter>
    );
}

export default AppRouter;