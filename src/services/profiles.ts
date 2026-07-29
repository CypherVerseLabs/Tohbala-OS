import { supabase } from "@/lib/supabase";


export interface Profile {

id:string;

full_name:string|null;

company_name:string|null;

created_at:string;

updated_at:string;

}



export async function getProfile(){


const {
data:{
user
}
}=await supabase.auth.getUser();



if(!user)
throw new Error(
"User not authenticated"
);



const {
data,
error
}=await supabase
.from("profiles")
.select("*")
.eq(
"id",
user.id
)
.single();



if(error)
throw error;


return data as Profile;

}




export async function updateProfile(

updates:Partial<Profile>

){


const {
data:{
user
}
}=await supabase.auth.getUser();



if(!user)
throw new Error(
"User not authenticated"
);



const {
data,
error
}=await supabase
.from("profiles")
.update({

...updates,

updated_at:
new Date()
.toISOString()

})
.eq(
"id",
user.id
)
.select()
.single();



if(error)
throw error;


return data as Profile;

}