import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className="navbar-brand">
                Home
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/tutorials"} className="nav-link">
                        Todos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                        Add
                    </Link>
                </li>
            </div>
        </nav>
    );
};

export default Header;