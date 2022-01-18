import React from "react"

export default function Pic(props) {
    return (
        <div className="fullpic">
        <img alt="" src= {props.source} className="pic"/>
        <h3 className="plantname">{props.title}</h3>
        </div>
    )
}