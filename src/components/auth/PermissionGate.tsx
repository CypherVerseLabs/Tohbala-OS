import React from "react";

import {
useAuth
} from "@/contexts/AuthContext";


import {
hasPermission,
Permission
} from "@/config/permissions";



interface Props {

permission:Permission;

children:React.ReactNode;

}



export default function PermissionGate({

permission,

children

}:Props){


const {
role
}=useAuth();



if(
!hasPermission(
role,
permission
)
){

return null;

}



return <>{children}</>;

}