import { useAuth } from '../context/AuthContext';

export default function Login() {
    const { login } = useAuth();

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={login}>Login</button>
        </div>
    );
}
