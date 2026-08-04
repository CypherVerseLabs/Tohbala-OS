import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";


import {
  Session,
  User,
} from "@supabase/supabase-js";


import {
  supabase
} from "@/lib/supabase";


import {
  UserProfile,
  UserRole
} from "@/types/user";





interface AuthContextType {


user:User|null;


session:Session|null;


profile:UserProfile|null;


role:UserRole;


loading:boolean;



signUp(
email:string,
password:string,
fullName?:string,
companyName?:string
):Promise<void>;



signIn(
email:string,
password:string
):Promise<void>;



signOut():Promise<void>;



refreshSession():Promise<void>;



hasRole(
role:UserRole
):boolean;


}





const AuthContext =
createContext<AuthContextType|null>(null);






export const useAuth = ()=>{


const context =
useContext(AuthContext);



if(!context){

throw new Error(
"useAuth must be inside AuthProvider"
);

}



return context;


};









export function AuthProvider({
children
}:{
children:ReactNode
}){



const [user,setUser]
=
useState<User|null>(null);



const [session,setSession]
=
useState<Session|null>(null);



const [profile,setProfile]
=
useState<UserProfile|null>(null);



const [loading,setLoading]
=
useState(true);









const loadProfile = async(
id:string,
email:string
)=>{


try{


const {
data,
error

}=await supabase

.from("profiles")

.select("*")

.eq(
"id",
id
)

.single();





if(error){


console.warn(
"Profile loading failed",
error.message
);


setProfile(null);

return;


}







setProfile({


id:data.id,


email,


fullName:
data.full_name ?? "",


companyName:
data.company_name ?? "",


role:
data.role ?? "ADMIN",


avatarUrl:
data.avatar_url ?? "",


createdAt:
data.created_at,


updatedAt:
data.updated_at


});





}catch(error){


console.error(
"Profile error",
error
);


}



};









const refreshSession =
async()=>{


const {

data:{
session

}

}=await supabase.auth.getSession();




setSession(session);



setUser(
session?.user ?? null
);




if(session?.user){


await loadProfile(

session.user.id,

session.user.email ?? ""

);


}

else{


setProfile(null);


}



};









useEffect(()=>{



refreshSession();



const {

data:{
subscription

}

}=supabase.auth.onAuthStateChange(

async(
_event,
session
)=>{



setSession(session);



setUser(
session?.user ?? null
);





if(session?.user){


await loadProfile(

session.user.id,

session.user.email ?? ""

);


}

else{


setProfile(null);


}



setLoading(false);



}

);





return()=>{


subscription.unsubscribe();


};



},[]);









const signUp = async(

email:string,

password:string,

fullName="",

companyName=""

)=>{



const {

error

}=await supabase.auth.signUp({


email:
email.trim(),


password,



options:{


data:{


full_name:
fullName,


company_name:
companyName


}


}


});





if(error)

throw error;



};












const signIn = async(

email:string,

password:string

)=>{



const {

error

}=await supabase.auth.signInWithPassword({

email:
email.trim(),


password


});





if(error)

throw error;



};









const signOut = async()=>{



await supabase.auth.signOut();



setUser(null);


setSession(null);


setProfile(null);



};









const role:UserRole =
profile?.role ??

"ADMIN";









return (


<AuthContext.Provider


value={{


user,


session,


profile,


role,


loading,



signUp,


signIn,


signOut,


refreshSession,



hasRole:(check)=>

role===check



}}



>


{children}



</AuthContext.Provider>



);



}