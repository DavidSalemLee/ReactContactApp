import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Contacts } from "./components/Contacts/Contacts";
import AddContact from "./components/Contacts/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound"

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="SuperContacts" />

                        <div className="container py-4">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route
                                    exact
                                    path="/contact/add"
                                    component={AddContact}
                                />
                                <Route
                                    exact
                                    path="/about"
                                    render={props => (
                                        <About {...props} branding="SuperContacts" />
                                    )}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
