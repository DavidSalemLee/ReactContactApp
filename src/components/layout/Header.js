import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Header extends Component {
    render() {
        const { branding } = this.props;

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-10">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        {branding}
                    </a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact/add" className="nav-link">
                                    Add New Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.defaultProps = {
    branding: "My App"
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};
