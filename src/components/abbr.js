import React from "react"

export default function Abbr(props) {
    let abbr = ""
    let words = props.words
    for(let i = 0, s = 0, w = 0; i < props.title.length; i++) {
        if(s===0) {
            if(words === undefined) {
                abbr += (props.title).charAt(i)
            } else if(words.includes(w)) {
                abbr += (props.title).charAt(i)
            }
            abbr += (props.period) ? "." : "";
            s = 1
        } else {
            if((props.title).charAt(i) === ' ') {
                s = 0
                w++
            }
        }
    }
    return (
        <abbr title={props.title} className="text-decoration-none">
            {abbr}
        </abbr>
    )
}