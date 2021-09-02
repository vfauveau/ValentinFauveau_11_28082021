import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./index.css";
import Header from "./components/Header";
import Error from "./components/Error";
import About from "./pages/About";
import Home from "./pages/Home";
import Fiche from "./pages/FicheLogement";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/Fiche-Logement/:id" component={Fiche} />
                <Route path="/About/">
                    <About></About>
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
