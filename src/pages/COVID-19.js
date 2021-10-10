import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Abbr from '../components/abbr'

export default function COVID(props) {
    return (
        <Layout className="d-flex">
            <SEO title="COVID-19 Information" />
            <div className="container-fluid pb-4">
                <h1 className="text-center pb-4">COVID-19 (Coronavirus) Information</h1>
                <div className="bg-laccent rounded-3 p-2 pt-4">
                    <ul className="h5 text-dshade fw-bold">
                        <li>
                        We are following <Abbr title="Center for Medicare Services" words={[0,2,3]} /> and <Abbr title="Center for Disease Control and Prevention" words={[0,2,3]} /> guidelines during this pandemic.
                        </li>
                        <br />
                        <li>
                        We screen anyone that enters our building including staff, management, and state surveyors.
                        </li>
                        <br />
                        <li>
                        We are following a three phase reopening plan recommended by <Abbr title="Center for Medicare Services" words={[0,2,3]} />.
                        </li>
                        <br />
                        <li>
                        Our Infection preventionist will ensure our healthcare workers and residents are following all protocols to prevent infections.
                        </li>
                        <br />
                        <li>
                        We utililize a symptom based strategy instead of a test best strategy recommended by <Abbr title="Center for Medicare Services" words={[0,2,3]} />.
                        </li>
                        <br />
                        <li>
                        We will be evaluating our policies on a regular basis and continue to follow <Abbr title="Center for Medicare Services" words={[0,2,3]} /> and <Abbr title="Center for Disease Control and Prevention" words={[0,2,3]} /> guidelines.
                        </li>
                        <br />
                    </ul>
                </div>
            </div>
        </Layout>
    )
}