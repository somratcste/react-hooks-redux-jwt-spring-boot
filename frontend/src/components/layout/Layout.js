import React, { Fragment } from "react";
import Header from "./Header";

const Layout = (props) => {
    return (
        <div className="container">
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    )
    
}

export default Layout;