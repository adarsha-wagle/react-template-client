import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'src/hooks/use-auth.ts';

interface AllowedRolesInterface {
  Employee: string;
}

const RequireAuth = ({ allowedRoles: AllowedRolesInterface }) => {
  const location = useLocation();
  const { roles } = useAuth();

  const content = roles.some((role: any) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  return content;
};
export default RequireAuth;
