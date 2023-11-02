import React from 'react';

// Timer Icon Component
function TimerIcon() {
    return <div className="timer-icon">🕒</div>;  
}

// Timer Digit Component
function TimerDigit({ value }) {
    return <div className="timer-digit">{value}</div>;
}

// Main Timer Component
function SecondsCounter({ seconds }) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return (
        <div className="timer-container">
            <TimerIcon />
            <TimerDigit value={Math.floor(hours/10)} />
            <TimerDigit value={hours % 10} />
            <TimerDigit value={Math.floor(minutes/10)} />
            <TimerDigit value={minutes % 10} />
            <TimerDigit value={Math.floor(secs/10)} />
            <TimerDigit value={secs % 10} />
        </div>
    );
}

export default SecondsCounter;