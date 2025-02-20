import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <div>
            <h2>Dashboard</h2>
            {isAuthenticated ? (
                <>
                    <p>Welcome to your dashboard!</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <p>You are not authenticated !</p>
            )}
        </div>
    );
}
