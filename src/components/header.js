import { Link } from "gatsby"
import React from "react"
import Image from "./image"
import NavButton from "./navbutton"

export default function Header(props) {
    return (
        <div className="container-fluid">
            <div id="header" className="container-fluid py-5 mb-5">
                <div className="row h-25 m-0 p-0 d-flex justify-content-evenly">
                    <div className="col-lg-4 text-center align-self-center order-lg-3">
                        <Link to="/">
                            <Image src="logo_henryetta.png" id="banner" height="25vh" width="100%"/>
                        </Link>
                    </div>
                    <div className="d-none d-lg-inline col-lg text-center align-self-center order-lg-1">
                        <Link to="/COVID-19" className="hlink h5 text-brand fw-bold">
                        <span>COVID-19</span>
                        </Link>
                    </div>
                    <div className="d-none d-lg-inline col-lg text-center align-self-center order-lg-2">
                        <Link to="/Contact" className="hlink h5 text-brand fw-bold">
                        <span>Contact</span>
                        </Link>
                    </div>
                    <div className="d-none d-lg-inline col-lg text-center align-self-center order-lg-4">
                        <Link to="/Employment" className="hlink h5 text-brand fw-bold">
                        <span>Employment</span>
                        </Link>
                    </div>
                    <div className="d-none d-lg-inline col-lg text-center align-self-center order-lg-5">
                        <Link to="/Admissions" className="hlink h5 text-brand fw-bold">
                            <span>Admissions</span>
                        </Link>
                    </div>
                </div>
            </div>
            <NavButton />
        </div>
    )
}