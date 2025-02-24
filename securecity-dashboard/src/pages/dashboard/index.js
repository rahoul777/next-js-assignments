import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome to the Smart City Dashboard.</p>
      </main>
    </ProtectedRoute>
  );
}
