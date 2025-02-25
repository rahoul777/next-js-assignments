import { useRouter } from 'next/router';

export default function UserActions() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>User Actions</h1>
      <p>Action Path: {slug?.join('/')}</p>
    </div>
  );
}
// Example URL:
// /dashboard/admin/users/123/edit
// /dashboard/admin/users/123/settings/security
// Output: Shows the full action path, e.g., 123/edit or 123/settings/security.