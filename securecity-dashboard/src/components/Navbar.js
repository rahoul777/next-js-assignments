import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { pathname } = useRouter();

  const handleLogout = () => {
    Cookies.remove('auth-token');
    Cookies.remove('user-role');
    router.push('/login');
  };
  

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link href="/" className={pathname === '/' ? 'text-yellow-500' : ''}>Home
      </Link>  
      <Link href="/dashboard" className={pathname.startsWith('/dashboard') ? 'text-yellow-500' : ''}>Dashboard
      </Link>
      <Link href="/profile" className={pathname === '/profile' ? 'text-yellow-500' : ''}>Profile
      </Link>
      {/* <button onClick={handleLogout} className="ml-4 bg-red-500 p-2 rounded">
        Logout
      </button> */}
    </nav>
  );
};

export default Navbar;
