import Link from 'next/link';
import { useRouter } from 'next/router';  // Import useRouter
import '../styles/navbar.css'; 

export default function Navbar() {
  const router = useRouter();  // Get the current route

  return (
    <nav className="navbar">
      {/* Left: Company Logo/Name */}
      <Link href="/" className="navbar-logo">MyCompany</Link>
      
      {/* Middle: Navigation Links */}
      <div className="navbar-links">
        <Link href="/" className={`navbar-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/dashboard" className={`navbar-link ${router.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
        <Link href="/employees" className={`navbar-link ${router.pathname === '/employees' ? 'active' : ''}`}>Employees</Link>
      </div>

      {/* Right: Profile Section */}
      <div className="navbar-profile">
        <Link href="/profile" className={`navbar-profile-link ${router.pathname === '/profile' ? 'active' : ''}`}>Profile</Link>
      </div>
    </nav>
  );
}
