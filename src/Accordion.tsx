import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
    if (props.collapsed === true) {
        return (<div>
                <AccordionMenu title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }
    return (
        <div>
            <AccordionMenu title={props.titleValue}/>
        </div>
    )
}

type AccordionMenuPropsType = {
    title: string
}
function AccordionMenu(props: AccordionMenuPropsType) {
    console.log("AccordionMenu rendered")
    return (
        <h3>---{props.title}---</h3>
    )
}

function AccordionBody() {
    console.log("AccordionTitle rendered")
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>

    )
}