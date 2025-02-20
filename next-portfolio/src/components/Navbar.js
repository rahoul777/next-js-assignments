import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
function Navbar() {
    const router = useRouter();
    const { isAuthenticated, logout } = useAuth();
    return (
        <nav>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>Home</Link>
            <Link href="/projects" className={router.pathname === "/projects" ? "active" : ""}>Projects</Link>
            <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>About</Link>
            <Link href="/contact" className={router.pathname === "/contact" ? "active" : ""}>Contact</Link>
            <Link href="/dashboard">Dashboard</Link>
            {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </nav>
    );
}
export default Navbar;
