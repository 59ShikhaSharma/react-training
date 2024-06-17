import React from 'react';
import{useState,useRef} from 'react';


function StopWatch() {
    const [startTime,setStartTime] =  useState<number | null>(null);;
    const [now, setNow] =  useState<number | null>(null);;
    const intervalRef =  useRef<number | null>(null);;


    function handleStart() {
        const currentTime = Date.now();
        setStartTime(currentTime);
        setNow(currentTime);
    
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current); // Clear existing interval if it exists
        }
        intervalRef.current = window.setInterval(() => {
          setNow(Date.now());
        }, 10);
      }
    
      function handleStop() {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null; // Reset intervalRef.current after clearing interval
        }
      }
    
      let secondsPassed = 0;
      if (startTime !== null && now !== null) {
        secondsPassed = (now - startTime) / 1000;
      }

  return (
    <div>
        <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      
    </div>
  )
}

export default StopWatch
