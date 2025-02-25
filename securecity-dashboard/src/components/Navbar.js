import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react'; // Icons for Hamburger Menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define Nav Links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/login', label: 'Login' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/admin', label: 'Admin Dashboard' },
    { href: '/dashboard/admin/users/123', label: 'User Details' },
    { href: '/dashboard/admin/users/admin', label: 'Role View (Admin)' },
    { href: '/dashboard/admin/users/settings', label: 'Settings' },
    { href: '/profile', label: 'Profile' },
    { href: '/unauthorized', label: 'Unauthorized' },
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              SecureCity
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  router.pathname === link.href
                    ? 'text-yellow-400'
                    : 'text-white'
                } hover:text-yellow-400`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block ${
                    router.pathname === link.href
                      ? 'text-yellow-400'
                      : 'text-white'
                  } hover:text-yellow-400`}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
