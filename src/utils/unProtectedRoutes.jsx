import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function LoginUnProtectedWrapper({ children }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const role = localStorage.getItem("role");
 
  const location = useLocation();

  return token ? (
    role === 'user' ? 
    <Navigate to="/home" replace state={{ path: location.pathname }} /> 
    : 
    <Navigate to="/create" replace state={{ path: location.pathname }} /> 
  
  ) : (
    <div>
        {children}
    </div>  
  )
}

export default LoginUnProtectedWrapper;
