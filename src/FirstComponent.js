import React from 'react';

function FirstComponent(props) {
    console.log(props.items)
    return (
        <div>
            <ul>
                {props.items.map((item, index)=>{
                    return <li key={index}>{props.items[index]}</li>
                })}
            </ul>
        </div>
    )
}

export default FirstComponent;