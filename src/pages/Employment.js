import React from 'react'
import GMap from '../components/gmap'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Phone from '../svg/phone.inline.svg'
import Email from '../svg/email.inline.svg'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

export default function Employment(props) {
    return (
        <Layout className="d-flex">
            <SEO title="Employment" />
            <div className="container-fluid pb-4">
                <h1 className="text-center pb-4">Contact</h1>
                <ListGroup>
                    <ListGroupItem className="d-flex justify-content-between fw-bold">
                        <span>Phone: </span>
                        <span>
                            <span>
                                <Phone/>
                            </span>
                            (405) 379 - 6671
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