// src/services/activityService.ts

import { supabase } from "@/lib/supabase";

import { Activity } from "@/types/activity";



function mapActivity(row:any):Activity {

return {

id: row.id,

companyId: row.company_id,

opportunityId: row.opportunity_id,

type: row.type,

title: row.title,

description: row.description ?? "",

createdAt: row.created_at,

ownerId: row.owner_id

};

}







export const ActivityService = {



async getAll():Promise<Activity[]> {


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



if(error){

throw error;

}



return (
data ?? []
).map(mapActivity);


},







async getById(
id:string
):Promise<Activity>{


const {
data,
error
}=await supabase

.from("activities")

.select("*")

.eq(
"id",
id
)

.single();



if(error){

throw error;

}



return mapActivity(data);


},







async getByCompany(
companyId:string
):Promise<Activity[]> {


const {
data,
error
}=await supabase

.from("activities")

.select("*")

.eq(
"company_id",
companyId
)

.order(
"created_at",
{
ascending:false
}
);



if(error){

throw error;

}



return (
data ?? []
).map(mapActivity);


},







async getByOpportunity(
opportunityId:string
):Promise<Activity[]> {


const {
data,
error
}=await supabase

.from("activities")

.select("*")

.eq(
"opportunity_id",
opportunityId
)

.order(
"created_at",
{
ascending:false
}
);



if(error){

throw error;

}



return (
data ?? []
).map(mapActivity);


},







async create(
activity:Activity
):Promise<Activity>{


const {
data,
error
}=await supabase

.from("activities")

.insert({

company_id:
activity.companyId,

opportunity_id:
activity.opportunityId || null,

type:
activity.type,

title:
activity.title,

description:
activity.description ?? "",

owner_id:
activity.ownerId

})

.select()

.single();



if(error){

throw error;

}



return mapActivity(data);


},







async update(
activity:Activity
):Promise<Activity>{


const {
data,
error
}=await supabase

.from("activities")

.update({

company_id:
activity.companyId,

opportunity_id:
activity.opportunityId || null,

type:
activity.type,

title:
activity.title,

description:
activity.description ?? "",

owner_id:
activity.ownerId

})

.eq(
"id",
activity.id
)

.select()

.single();



if(error){

throw error;

}



return mapActivity(data);


},







async remove(
id:string
):Promise<void>{


const {
error
}=await supabase

.from("activities")

.delete()

.eq(
"id",
id
);



if(error){

throw error;

}


}


};