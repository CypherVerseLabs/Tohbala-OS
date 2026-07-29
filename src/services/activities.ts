import { supabase } from "@/lib/supabase";


export interface ActivityInput {

company_id?:string|null;

opportunity_id?:string|null;

type:string;

title:string;

description?:string;

}



export interface Activity extends ActivityInput {

id:string;

owner_id:string;

created_at:string;

}





export async function getActivities(){


const {
data,
error
}=await supabase
.from("activities")
.select("*")
.order(
"created_at",
{
ascending:false
}
);



if(error)
throw error;


return data as Activity[];

}





export async function createActivity(
activity:ActivityInput
){


const {
data:{
user
}
}=await supabase.auth.getUser();



if(!user)
throw new Error(
"No authenticated user"
);



const {
data,
error
}=await supabase
.from("activities")
.insert({

...activity,

owner_id:user.id

})
.select()
.single();



if(error)
throw error;


return data as Activity;

}