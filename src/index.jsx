import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./styles/index.css";
import Error from "./components/Error.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Fiche from "./pages/Logement.jsx";
import Footer from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/Logement/:id" component={Fiche} />
                <Route path="/About/">
                    <About></About>
                </Route>
                <Route>
                    <Error />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
