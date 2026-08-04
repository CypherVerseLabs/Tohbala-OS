import {
  Navigate
} from "react-router-dom";

import {
  ReactNode
} from "react";

import {
  useAuth
} from "@/contexts/AuthContext";

import {
  UserRole
} from "@/types/user";



interface ProtectedRouteProps {

  children: ReactNode;

  allowedRoles?: UserRole[];

}



const ProtectedRoute = ({
  children,
  allowedRoles,
}: ProtectedRouteProps) => {


const {
  user,
  role,
  loading
}=useAuth();





if(loading){

return (

<div className="
min-h-screen
flex
items-center
justify-center
">

Loading...

</div>

);

}





if(!user){

return (

<Navigate
to="/login"
replace
/>

);

}







if(
allowedRoles &&
!allowedRoles.includes(role)
){

return (

<Navigate
to="/"
replace
/>

);

}






return <>{children}</>;

};



export default ProtectedRoute;