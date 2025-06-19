import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../../store/store';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const jwt = useSelector((s: RootState) => s.user.jwt);

  if (!jwt) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return children;
};
