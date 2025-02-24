import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const token = Cookies.get('auth-token');
  const userRole = Cookies.get('user-role');

  useEffect(() => {
    if (!token) {
      router.push('/login');
    } else if (allowedRoles && !allowedRoles.includes(userRole)) {
      router.push('/unauthorized');
    }
  }, [token, userRole, allowedRoles, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
