import React from 'react'

export default function CustomIcon(props) {
    return (
        <div>
            <img src={"/images/"+props.name+".png"} width={props.size}/>
        </div>
    )
}
