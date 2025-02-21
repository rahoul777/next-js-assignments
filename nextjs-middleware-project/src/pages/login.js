import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Initialize useRouter

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            // Ensure response is in JSON format
            if (response.ok) {
                const data = await response.json();
    
                if (data.token) {
                    // Store token in cookies
                    document.cookie = `auth-token=${data.token}; path=/`;
    
                    // Redirect using Router.push
                    router.push('/dashboard');
                } else {
                    console.error('No token received');
                }
            } else {
                console.error('Login failed:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}
