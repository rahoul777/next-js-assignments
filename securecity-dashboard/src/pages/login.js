import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      Cookies.set('auth-token', 'fake-jwt-token');
      Cookies.set('user-role', 'admin');
      router.push('/dashboard');
    } else if (username === 'user' && password === 'user') {
      Cookies.set('auth-token', 'fake-jwt-token');
      Cookies.set('user-role', 'user');
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="p-8 bg-gray-100 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
}
