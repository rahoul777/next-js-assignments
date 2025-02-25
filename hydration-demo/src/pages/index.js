// pages/index.js
import { useState, useEffect } from 'react';
import ClientOnlyComponent from '@/components/ClientOnlyComponent';

export default function Home() {
    const [time, setTime] = useState(null);

    useEffect(() => {
        setTime(new Date().toLocaleTimeString());
    }, []);

    return (
        <div>
            <h1>Understanding Hydration in Next.js</h1>
            <p>Server-rendered at build time, hydrated with client-side data:</p>
            <p>Current Time: {time ? time : 'Loading...'}</p>
            <br/>
            <ClientOnlyComponent></ClientOnlyComponent>
        </div>
    );
}