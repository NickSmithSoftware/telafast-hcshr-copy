import "../scss/custom.scss"

import React from "react" 

import Header from "./header"
import Footer from "./footer" 

export default function Layout(props) {
    return(
        <div className="container-fluid m-0 p-0" id="layout-container">
            <div className="container-fluid m-0 p-0" id="layout">
                <Header id="header" />
                <div id="body" className="mx-auto px-5" style={{maxWidth: "1080px"}}>
                    {props.children}
                </div>
                <Footer id="footer" />
            </div>
        </div>
    )
}