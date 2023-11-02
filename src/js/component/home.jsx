import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './secondsCounter'; 

function Home() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return <SecondsCounter seconds={seconds} />;
}

// Render the App component once the window loads
window.onload = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

export default Home;