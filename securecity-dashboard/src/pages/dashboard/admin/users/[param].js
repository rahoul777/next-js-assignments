import { useRouter } from 'next/router';

export default function UserDetailsOrRole() {
  const router = useRouter();
  const { param } = router.query;

  // Check if param is a number (for User ID) or a string (for Role)
  const isNumeric = !isNaN(param);

  return (
    <div>
      <h1>
        {isNumeric ? 'User Details' : 'Role-Based User View'}
      </h1>
      <p>
        {isNumeric
          ? `User ID: ${param}`
          : `Viewing as Role: ${param}`}
      </p>
    </div>
  );
}
// Example URLs:
// /dashboard/admin/users/123 → Shows User Details for ID 123
// /dashboard/admin/users/admin → Shows Role-Based View for Role admin