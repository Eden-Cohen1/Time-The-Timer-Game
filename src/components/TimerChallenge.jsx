import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){
    const [timeLeft, setTimeLeft] = useState(targetTime * 1000)
    const timer = useRef();
    const dialog = useRef();
    
    const timerIsActive = timeLeft > 0 && timeLeft < targetTime*1000;

    if(timeLeft <= 0) {
        clearInterval(timer.current)
        dialog.current.open();
    }
    
    const handleStart = function() {
        timer.current = setInterval( () => {
            setTimeLeft(oldTime => oldTime - 10)            
        }, 10)
    }
    
    const handleStop = function() {
        clearInterval(timer.current);
        dialog.current.open();
        
    }
    
    return <>
    <ResultModal ref={dialog} timeRemain={timeLeft} targetTime={targetTime} onReset={() => setTimeLeft(targetTime * 1000)}/> 
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
        <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ?"Stop": "Start"} Challenge</button>
        <p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? "Timer is running" : "Timer inactive"}</p>
    </section>
    </> 
}