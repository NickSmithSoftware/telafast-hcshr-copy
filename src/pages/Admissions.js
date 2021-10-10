import React from 'react'
import GMap from '../components/gmap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Abbr from '../components/abbr'

import Phone from '../svg/phone.inline.svg'
import Email from '../svg/email.inline.svg'
import Fax from '../svg/fax.inline.svg'

import {ListGroup, ListGroupItem} from 'react-bootstrap'

export default function Admissions(props) {
    return (
        <Layout className="d-flex">
            <SEO title="Admissions" />
            <div className="container-fluid pb-4">
                <h1 className="text-center pb-4">Admissions</h1>
                <div className="bg-laccent rounded-3 mb-4 p-2 pb-3 pt-4 h5 fw-bold">
                    <span>
                        <ul>
                            <li>
                                Admissions are done on a case by case basis to ensure we can meet the needs of your loved one.
                            </li>
                            <br />
                            <li>
                                If you are seeking admission to this facility, please contact the <Abbr title="Director of Nursing" /> or send medical records by fax or email with a cover letter.
                            </li>
                            <br />
                            <li>
                                All admissions are reviewed and approved by the <Abbr title="Director of Nursing" /> within 24 hours of submission.
                            </li>
                        </ul>
                    </span>
                </div>
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