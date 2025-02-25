import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/admin">Admin Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/admin/users/123">User Details</Link>
        </li>
        <li>
          <Link href="/dashboard/admin/users/admin">Role View (Admin)</Link>
        </li>
        <li>
          <Link href="/dashboard/admin/users/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
