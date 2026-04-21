import { Navigate } from "react-router-dom";

type Props = {};

const ProtectedRoute = ({ user, children }: any) => {
  return console.log(user);
  if (!user) return <Navigate to="/auth" />;
  return children;
};
export default ProtectedRoute;
