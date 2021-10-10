import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Accordion, AccordionCollapse, Card, Col, ListGroup, Row, Tab, } from "react-bootstrap"
import GMap from "../components/gmap"
import Abbr from "../components/abbr"

export default function IndexPage(props) {
  return (
    <Layout className="d-flex">
      <SEO title="Home" />
      <div className="container-fluid">
        <div className="row pb-4">
          <div className="p-2 col-lg pt-4">
            <h2 className="text-center">Sit back and relax.</h2>
            <p>
              At Henryetta Community Skilled Healthcare and Rehab, we'll make sure all of your unique needs are taken care of.
              A nursing center doesn't have to be a retirement from life -- it can be fun too!
              Whether you're looking for a short stay or you want to settle down with us, Henryetta Community Skilled Healthcare and Rehab provides everything you need for a comfortable and safe stay.
              Henryetta Community Skilled Healthcare and Rehab is a moderate facility with 53 beds and has for-profit individual ownership.
              Our facility participates in Medicare and Medicaid.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="p-2 col-md pt-4">
            <h2 className="text-center">Services Available</h2>
            <Accordion className="p-1 rounded">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-laccent user-select-none">
                  Long Term Stay
                </Accordion.Toggle>
                <AccordionCollapse eventKey="0">
                  <Card.Body>
                    Permanent residency for those who need help with their daily activities.
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="bg-laccent user-select-none">
                  Dietary Services
                </Accordion.Toggle>
                <AccordionCollapse eventKey="1">
                  <Card.Body>
                    Every resident is provided a personalized dietary meal plan by a registered dietician.
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="bg-laccent user-select-none">
                  Surgical/Join Replacement Surgery
                </Accordion.Toggle>
                <AccordionCollapse eventKey="2">
                  <Card.Body>
                    <span>
                      Post-surgical rehabilitation facilitated by our experienced staff. <br /> <br />
                      All care and discharge plans are coordinated with physicians and surgeons to ensure a healthy and expediant recovery.
                    </span>
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" className="bg-laccent user-select-none">
                  Skilled Nursing Care
                </Accordion.Toggle>
                <AccordionCollapse eventKey="3">
                  <Card.Body>
                    A higher Level of medical care provided by licensed healthcare professionals for short term residency. <br /> <br />
                    Examples of skilled nursing care <i>may</i> include wound care, IV therapy, and rehabilitation services.
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4" className="bg-laccent user-select-none">
                  Rehabilitation
                </Accordion.Toggle>
                <AccordionCollapse eventKey="4">
                  <Card.Body>
                    <Tab.Container defaultActiveKey="#4.1">
                      <Row>
                        <div className="col-xxxl">
                          <ListGroup className="pb-3">
                            <ListGroup.Item action variant="dark" href="#4.1" className="bg-lshade text-dshade">
                              Speech Therapy
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#4.2" className="bg-lshade text-dshade">
                              Occupational Therapy
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" action href="#4.3" className="bg-lshade text-dshade">
                              Physical Therapy
                            </ListGroup.Item>
                          </ListGroup>
                        </div>
                        <Col>
                          <Tab.Content>
                            <Tab.Pane eventKey="#4.1">
                              These services help maximize functional speech, language, cognition, and swallowing skills and techniques. <br /> <br />
                              Speech therapy is for motor speech disorders, treatment of aphasia, and swallowing disorders.
                            </Tab.Pane>
                            <Tab.Pane eventKey="#4.2">
                              Occupational therapy enables our residents to achieve a greater independence in their lives. <br /> <br />
                              The therapist will help promote, facilitate, maintain, and enhance activities of daily living skills, and include such things as hand rehabilitation, neuromuscular re-education, retraining in daily living activities, stroke rehabilitation, and mobility management such as wheelchair and walker use.
                            </Tab.Pane>
                            <Tab.Pane eventKey="#4.3">
                              This service enables our residents to restore optimal movement and function. <br /> <br />
                              Our physical therapists can treat diagnosis and conditions that include amputations, arthritis, balance/gait disorders, back and neck pain, other orthopedic injuries and treatments following join replacement surgeries.
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </Card.Body>
                </AccordionCollapse>
              </Card>
            </Accordion>
          </div>
      
      <div className="p-2 col-md pt-4">
            <h2 className="text-center">Amenities Available</h2>
            <Accordion className="p-1 rounded">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-laccent user-select-none">
                  Possible Private Room
                </Accordion.Toggle>
                <AccordionCollapse eventKey="0">
                  <Card.Body>
                    We have both private and semi-private rooms. Private room availability is limited.
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="bg-laccent user-select-none">
                  TV
                </Accordion.Toggle>
                <AccordionCollapse eventKey="1">
                  <Card.Body>
                    Free cable/satellite available in every room.
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" className="bg-laccent user-select-none">
                  Social Activities / Services
                </Accordion.Toggle>
                <AccordionCollapse eventKey="2">
                  <Card.Body>
                    Daily structured activities including arts/crafts, games, and music as well as social and group activities such as church and musical performances.
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" className="bg-laccent user-select-none">
                  Outside Courtyard
                </Accordion.Toggle>
                <AccordionCollapse eventKey="3">
                  <Card.Body>
                    We have plenty of landscaped porches and patios to enjoy the outdoors.
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4" className="bg-laccent user-select-none">
                  Laundry
                </Accordion.Toggle>
                <AccordionCollapse eventKey="4">
                  <Card.Body>
                    Personal laundry service is available to all residents.
                  </Card.Body>
                </AccordionCollapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5" className="bg-laccent user-select-none">
                  Housekeeping/Maintenance
                </Accordion.Toggle>
                <AccordionCollapse eventKey="5">
                  <Card.Body>
                    Daily housekeeping services and routine maintenance will be performed per <Abbr title="Oklahoma State Department of Health" words={[0,1,2,4]}/> and <Abbr title="Centers for Disease Control and Prevention" words={[0,2,3]} /> guidelines
                  </Card.Body>
                </AccordionCollapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center">Where are we located?</h2>
        <GMap />
      </div>

      <div className="pt-4 pb-4">
        <h2 className="text-center p-2">Frequently Asked Questions</h2>
        
        <Accordion className="p-1 bg-daccent rounded mb-3">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" className="h3 bg-laccent user-select-none">
              What government program will pay for my nursing home costs?
            </Accordion.Toggle>
            <AccordionCollapse eventKey="0">
              <Card.Body className="h5 fw-bolder">
                Medicaid is the largest pay source for nusing home care in the nation. Medicaid is a federal and state rules based program for those that apply.
              </Card.Body>
            </AccordionCollapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" className="h3 bg-laccent user-select-none">
              Will Medicare pay for my nursing home costs?
            </Accordion.Toggle>
            <AccordionCollapse eventKey="1">
              <Card.Body className="h5 fw-bolder">
                Yes in certain situations. Medicare provides limited coverage for short term nursing home rehab stays. Medicare does not pay for long term healthcare in nursing homes, assisted living facilities or in-home care.
              </Card.Body>
            </AccordionCollapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2" className="h3 bg-laccent user-select-none">
              How can I protect my assets from being wiped out to pay for nursing home costs?
            </Accordion.Toggle>
            <AccordionCollapse eventKey="2">
              <Card.Body className="h5 fw-bolder">
                  Proper planning with trained professionals is the best way to protect assets and pay for nursing home care. There are many strategies that can be used for single individuals and married couples.
              </Card.Body>
            </AccordionCollapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3" className="h3 bg-laccent user-select-none">
              Was your question not answered here?
            </Accordion.Toggle>
            <AccordionCollapse eventKey="3">
              <Card.Body className="h5 fw-bolder">
                Please feel free to come by and tour our facilities and ask those questions that you might have. We are eager and willing to help provide guidance to families during times when difficult decisions must be made.
              </Card.Body>
            </AccordionCollapse>
          </Card>
        </Accordion>
      </div>

      <div>
        <p>This facility is dual certified for Medicare/Medicaid and is licensed for 53 beds. Henryetta Community Skilled Healthcare and Rehab employs many well trained staff members to meet all of the residents' needs 24/7.</p>
        <br />
        <p>Our goal is to provide the most professional and caring experience with each resident. The healthcare requirements for each resident are analyzed and met by our facility. In addition this is a safe environment free of restraints. We want to make each resident feel as close to home as possible.</p>
        <br />
        <p>Check out our other sister facilities at
          <button type="button" className="hbutton position-relative mx-2 btn btn-sm btn-outline-brand">
            <a href="https://heritagevillagenursingcenter.com" className="color-inherit link stretched-link">
              Holdenville
            </a>
          </button>
          and
          <button type="button" className="hbutton position-relative mx-2 btn btn-sm btn-outline-brand">
            <a href="https://colonialparkmanor.com" className="color-inherit link stretched-link">
              Okemah
            </a>
          </button>
          .
        </p>
      </div>
    </Layout>
  )
}
