import React from 'react'

export default function About(props) {
    return (
        <div>
            <h3>{props.match.params.id}</h3>
            <h3>{props.match.params.name}</h3>

            <h2>Page About</h2>
            <p> lore**** </p>
        </div>
    )
}
