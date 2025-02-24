import { useRouter } from 'next/router';

export default function UserDetails() {
  const { query } = useRouter();
  const { id } = query;

  return (
    <div>
      <h1>User Details for ID: {id}</h1>
    </div>
  );
}
