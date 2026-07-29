import { supabase } from "@/lib/supabase";


export interface OpportunityInput {

company_id?:string|null;

company_name:string;

contact_name?:string;

email?:string;

phone?:string;

website?:string;

industry?:string;

company_size?:string;

business_problem?:string;

proposed_solution?:string;

technology_needs?:string[];

status?:string;

estimated_value?:number;

source?:string;

last_contact?:string;

next_follow_up?:string;

notes?:string;

}



export interface Opportunity extends OpportunityInput {

id:string;

owner_id:string;

created_at:string;

updated_at:string;

}




export async function getOpportunities(){


const {
data,
error
}=await supabase
.from("opportunities")
.select("*")
.order(
"created_at",
{
ascending:false
}
);



if(error)
throw error;


return data as Opportunity[];

}





export async function createOpportunity(
opportunity:OpportunityInput
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
.from("opportunities")
.insert({

...opportunity,

owner_id:user.id

})
.select()
.single();



if(error)
throw error;


return data as Opportunity;


}





export async function updateOpportunity(
id:string,
updates:Partial<OpportunityInput>
){


const {
data,
error
}=await supabase
.from("opportunities")
.update({

...updates,

updated_at:
new Date()
.toISOString()

})
.eq(
"id",
id
)
.select()
.single();



if(error)
throw error;


return data as Opportunity;


}





export async function deleteOpportunity(
id:string
){


const {
error
}=await supabase
.from("opportunities")
.delete()
.eq(
"id",
id
);



if(error)
throw error;


}