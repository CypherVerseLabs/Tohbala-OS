// src/services/contactService.ts

import { supabase } from "@/lib/supabase";

import { Contact } from "@/types/contact";




function mapFromRow(
row:any
):Contact {

return {

id:row.id,

companyId:row.company_id,

firstName:row.first_name,

lastName:row.last_name,

email:row.email ?? "",

phone:row.phone ?? "",

title:row.title ?? "",

ownerId:row.owner_id,

createdAt:row.created_at,

updatedAt:row.updated_at

};

}







function mapToRow(
contact:Contact
){

return {

company_id:
contact.companyId,

first_name:
contact.firstName,

last_name:
contact.lastName,

email:
contact.email ?? "",

phone:
contact.phone ?? "",

title:
contact.title ?? "",

owner_id:
contact.ownerId

};

}







export const ContactService = {



async getAll():Promise<Contact[]> {


const {
data,
error
}=await supabase

.from("contacts")

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
).map(mapFromRow);


},







async getByCompany(
companyId:string
):Promise<Contact[]> {


const {
data,
error
}=await supabase

.from("contacts")

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
).map(mapFromRow);


},







async getById(
id:string
):Promise<Contact>{


const {
data,
error
}=await supabase

.from("contacts")

.select("*")

.eq(
"id",
id
)

.single();



if(error){

throw error;

}



return mapFromRow(data);


},







async create(
contact:Contact
):Promise<Contact>{


const {
data,
error
}=await supabase

.from("contacts")

.insert(
mapToRow(contact)
)

.select()

.single();



if(error){

throw error;

}



return mapFromRow(data);


},







async update(
contact:Contact
):Promise<Contact>{


const {
data,
error
}=await supabase

.from("contacts")

.update(
mapToRow(contact)
)

.eq(
"id",
contact.id
)

.select()

.single();



if(error){

throw error;

}



return mapFromRow(data);


},







async remove(
id:string
):Promise<void>{


const {
error
}=await supabase

.from("contacts")

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