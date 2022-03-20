import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Walk.css'

const Walk = () => {
    const [run,setRun]=useState(0)
    const RunBtn=()=>{
        const newRun=run+1;
        setRun(newRun)
        
    }
    useEffect(()=>{
    },[run])
    return (
        <div  className='walk'>
            <h1>Run to first life is easy</h1>
            <h3>Walking Count = {run}</h3>
            <button onClick={RunBtn}>Run.......</button>
            <Display run={run}></Display>
        </div>
    );
};

export default Walk;