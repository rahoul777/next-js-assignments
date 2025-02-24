import { useRouter } from 'next/router';

const UserDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>User Details for ID: {id}</h1>;
};

export default UserDetails;
