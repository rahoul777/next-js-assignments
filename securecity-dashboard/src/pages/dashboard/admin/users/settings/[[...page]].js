import { useRouter } from 'next/router';

export default function SettingsPage() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div>
      <h1>Settings Page</h1>
      <p>Sub-page Path: {page?.join('/') || 'Main Settings'}</p>
    </div>
  );
}
// Example URL:

// /dashboard/admin/users/settings/
// /dashboard/admin/users/settings/profile
// /dashboard/admin/users/settings/notifications/email
// Output:

// Shows "Main Settings" for the base URL.
// Shows the nested path for sub-pages.