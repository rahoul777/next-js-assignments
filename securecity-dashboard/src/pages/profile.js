import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';

export default function Profile() {
  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p>View and manage your profile information.</p>
      </main>
    </ProtectedRoute>
  );
}
