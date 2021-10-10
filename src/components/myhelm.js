import React from 'react'
import Helmet from 'react-helmet'
import JsonLd from './jsonld'

export default function MyHelm(props) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{props.title}</title>
            <description>{props.description}</description>
            <meta name="author" content="Nicolas Smith, Telafast LLC" />
            <JsonLd>
                {{
                "@context": "https://schema.org/",
                "@type": "",
                }}
            </JsonLd>
        </Helmet>
    )
}