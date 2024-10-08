import React from 'react';

type AccordionPropsType = {
    titleValue: string
}
export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
    return <>
        <AccordionMenu title={props.titleValue}/>
        <AccordionBody/>
    </>
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