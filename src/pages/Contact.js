import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import GMap from '../components/gmap'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Phone from '../svg/phone.inline.svg'
import Email from '../svg/email.inline.svg'
import Fax from '../svg/fax.inline.svg'

export default function Contact(props) {
    return (
        <Layout className="d-flex">
            <SEO title="Contact" />
            <div className="container-fluid pb-4">
                <h1 className="text-center pb-4">Contact Us</h1>
                <ListGroup>
                    <ListGroupItem className="d-flex justify-content-between fw-bold">
                        <span>Phone: </span>
                        <span>
                            <span>
                                <Phone/>
                            </span>
                            (918) 652 - 8797
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between fw-bold">
                        <span>Fax: </span>
                        <span>
                            <span>
                                <Fax />
                            </span>
                            (918) 623 - 1938
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between fw-bold">
                        <span>Email: </span>
                        <span>
                            <span>
                                <Email />
                            </span>
                            Colonial@truenorthhc.net
                        </span>
                    </ListGroupItem>
                    <ListGroupItem className="p-0">
                        <GMap />
                    </ListGroupItem>
                </ListGroup>
            </div>
        </Layout>
    )
}