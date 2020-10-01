import React , { useState } from 'react';
import './Room.css';

function Room(){ 
    let [isLit, setLit] = useState(true);
    let [isTemp, setTemp] = useState();
    
    return(
        <div className={`room ${isLit?"lit":"dark"}`}>
            The Room is {isLit? "Lit":"Dark"}
            <br/>
            The Temparature is {isTemp}
            <br/>
            <button onClick={()=>setLit(!isLit)}>Toggel</button>
            <button onClick={()=>setLit(true)}>ON</button>
            <button onClick={()=>setLit(false)}>OFF</button>
            <br/>
            <button onClick={()=>setTemp(22)}>Temparature</button>
            <button onClick={()=>setTemp(++isTemp)}>+</button>
            <button onClick={()=>setTemp(--isTemp)}>-</button>

        </div>
    );
}

export default Room;