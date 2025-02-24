import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p>Manage users and city analytics.</p>
      </main>
    </ProtectedRoute>
  );
}
