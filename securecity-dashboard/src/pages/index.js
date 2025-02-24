import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to SecureCity Dashboard</h1>
        <p>Manage city resources efficiently and securely.</p>
        <p>
        <Link href="/login" >Login
        </Link>
        </p>
      </main>
    </div>
  );
}
