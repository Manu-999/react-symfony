import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./components/Home";
import Second from "./components/Second";
// require("../css/style.css");
 

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <ul>
                    <NavLink to="/users-management/web/app_dev.php">Home</NavLink>
                    <NavLink to="/users-management/web/app_dev.php/second">Second</NavLink>
                </ul>
                <Switch>
                    <Route exact path="/users-management/web/app_dev.php/" component={Home} />
                    <Route path="/users-management/web/app_dev.php/second" component={Second} />
                </Switch>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);