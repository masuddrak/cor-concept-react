import React, { useEffect, useState } from 'react';

const Walk = () => {
    const [run,setRun]=useState(0)
    const RunBtn=()=>{
        const newRun=run+1;
        setRun(newRun)
        
    }
    useEffect(()=>{
        console.log(run)
    },[run])
    return (
        <div>
            <h1>Run to first life is easy</h1>
            <h3>Walking Count = {run}</h3>
            <button onClick={RunBtn}>Run.......</button>
        </div>
    );
};

export default Walk;