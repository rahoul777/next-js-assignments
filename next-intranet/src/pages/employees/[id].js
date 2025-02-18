import { useRouter } from 'next/router';

export default function EmployeeProfile() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Employee ID: {id}</h1>;
}