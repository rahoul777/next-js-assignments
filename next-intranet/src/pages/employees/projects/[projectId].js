import { useRouter } from 'next/router';

export default function EmployeeProject() {
  const router = useRouter();
  const { id, projectId } = router.query;

  return (
    <h1>
      Employee {id} is working on Project {projectId}
    </h1>
  );
}