import React from 'react'

export default class GMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.setState({loaded: true})
    }

    render() {
        const { loaded } = this.state

        const innerHTML = {__html: '<iframe style="left:0;top:0;height:100%;width:100%;position:absolute;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.136323236089!2d-95.97537532015319!3d35.45141935024488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b438d0037917ef%3A0xbe33936cdc6b4cf5!2s212%20Antes%20St%2C%20Henryetta%2C%20OK%2074437!5e0!3m2!1sen!2sus!4v1598548552205!5m2!1sen!2sus" width="600" height="450" frameborder="1" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'}

        return (
            <div>
                { loaded && 
                    <div id="gmap" className="rounded" dangerouslySetInnerHTML={innerHTML} />
                }
            </div>
            
        )
    }
}
