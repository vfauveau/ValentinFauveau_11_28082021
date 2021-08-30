import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./index.css";
import Header from  "./components/Header"
import Banner from "./components/Banner"
import Footer from  "./components/Footer"
import Error from "./components/Error"
import Gallery from "./components/Gallery/index"
import About from "./pages/About";
import banner from "./pictures/banner.jpg"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                  <Banner src={banner} text="Chez vous, et partout ailleurs"/>
                  <Gallery/>
                  <Footer/>
                </Route>
                <Route path="/Fiche-Logement/">
                </Route>
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
