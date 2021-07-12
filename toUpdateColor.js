//react to change the para color by clicking upon the button

import {useState} from "react";
import  "./styles.css";

export default function App() {
    const [color,setColor] =  useState();
    return (
        <div className="App">
        <h1 style={{color:color}}>Hello Gouse we are going to change the color of  thhis sentence by clicking onn the button</h1>
        <h2 hai welcomr  to  react></h2>
        <UpdateColor setColor={setColor}/>
        </div>
        );
    }
function UpdateColor({setColor}){
    return(
        <>
        <button onClick={()=>setColor('crimson')}>UpdateColor</button>
        </>
    )
}