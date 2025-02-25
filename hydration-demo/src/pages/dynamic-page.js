// pages/dynamic-page.js
import { useState, useEffect } from 'react';

export default function DynamicPage() {
    const [userAgent, setUserAgent] = useState('Server side...');

    useEffect(() => {
        setUserAgent(navigator.userAgent);
    }, []);

    return (
        <div>
            <h1>Dynamic Page with Hydration</h1>
            <p>User Agent: {userAgent}</p>
        </div>
    );
}