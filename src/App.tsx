import React from 'react';
import './App.css';
import {Rating} from './Rating';
import {Accordion} from './Accordion';


function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Accordion"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props:any) {
    console.log("AppTitle rendered")
    return (
        <h1>{props.title}</h1>
    )
}
export default App;
