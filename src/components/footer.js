import { Link } from "gatsby"
import React from "react"
import Phone from "../svg/phone.inline.svg"
import Email from "../svg/email.inline.svg"
import Fax from "../svg/fax.inline.svg"

export default function Footer(props) {
    return (
        <div className="container-fluid text-center m-0 px-5 pt-4 pb-2 bg-dshade text-lshade">
            <div className="row pb-2">
                <h4 className="text-center pb-4">Henryetta Community Skilled Healthcare & Rehab</h4>
                <span className="col text-left">
                    212 Antes St <br />
                    Henryetta, OK 74437 <br />
                    <Phone /> (918) 652 - 8797 <br />
                    <Fax /> (918) 623 -1938 <br />
                    <Email /> Colonial@truenorthhc.net
                </span>
                <span className="col text-center">
                    <ul className="list-unstyled fw-bold">
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/COVID-19" className="link">COVID-19</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="link">Contact</Link>
                        </li>
                        <li>
                            <Link to="/Employment" className="link">Employment</Link>
                        </li>
                        <li>
                            <Link to="/Admissions" className="link">Admissions</Link>
                        </li>
                    </ul>
                </span>
                <span className="col text-right">
                    Powered by 
                    <a id="company" href="https://telafast.com" className="text-decoration-none disabled"> Telafast</a>
                </span>
            </div>
            <span className="fw-lighter small">Copyright © 2020 Telafast LLC</span>
        </div>
    )
}
