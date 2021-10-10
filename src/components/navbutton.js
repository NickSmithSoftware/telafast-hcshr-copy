import { Link } from 'gatsby'
import React, { useState } from 'react'
import { ListGroup, ListGroupItem, Fade } from 'react-bootstrap'

export default function NavButton() {
    const [open, setOpen] = useState(false)
    let navButtonClasses = "btn btn-brand rounded-circle overflow-hidden h-100 w-100 translate-middle position-relative border-3 border-dshade"
    let closeButtonClasses = "btn btn-brand rounded-circle overflow-hidden h-100 w-100 translate-middle position-relative border-3 border-dshade"
    let close = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x navIcon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    )
    let openIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list navIcon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    )
    const navButton = <button type="button" onClick={() => setOpen(!open)} class={navButtonClasses}>{openIcon}</button>
    const closeButton = <button type="button" onClick={() => setOpen(!open)} class={closeButtonClasses} aria-label="Close">{close}</button>
    let navMenu = (
        <ListGroup className="w-100 position-absolute bg-dshade border border-brand border-2 rounded">
            <ListGroupItem className="bg-dshade border-bottom border-laccent">
                <Link to="/" className="text-decoration-none text-lshade">Home</Link>
            </ListGroupItem>
            <ListGroupItem className="bg-dshade border-bottom border-laccent">
                <Link to="/COVID-19" className="text-decoration-none text-lshade">COVID-19</Link>
            </ListGroupItem>
            <ListGroupItem className="bg-dshade border-bottom border-laccent">
                <Link to="/Contact" className="text-decoration-none text-lshade">Contact</Link>
            </ListGroupItem>
            <ListGroupItem className="bg-dshade border-bottom border-laccent">
                <Link to="/Employment" className="text-decoration-none text-lshade">Employment</Link>
            </ListGroupItem>
            <ListGroupItem className="bg-dshade border-bottom border-laccent">
                <Link to="/Admissions" className="text-decoration-none text-lshade">Admissions</Link>
            </ListGroupItem>
        </ListGroup>
    )
    return (
        <div id="nav" className="d-lg-none position-fixed bottom-0 end-0 m-3">
            <div id="navMenu" className="position-absolute">
                <Fade in={open} out={!open} style={open ? {} : {width: "0", height: "0"}}>
                    {open ? navMenu : <div></div>}
                </Fade>
            </div>
            <div id="navButton" className="position-absolute translate-middle">
                {open ? closeButton : navButton}
            </div>
        </div>
    )
}