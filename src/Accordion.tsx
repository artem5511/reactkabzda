import React from 'react';

export function Accordion(props: any) {
    console.log("Accordion rendered")
    return <>
        <AccordionMenu title={props.title}/>
        <AccordionBody/>
    </>
}

function AccordionMenu(props: any) {
    console.log("AccordionMenu rendered")
    return (
        <h3>{props.title}</h3>
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