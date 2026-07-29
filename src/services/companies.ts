import { supabase } from "@/lib/supabase";


export interface CompanyInput {

  name:string;

  website?:string;

  industry?:string;

  size?:string;

  description?:string;

  location?:string;

  primary_contact?:string;

  email?:string;

  phone?:string;

}



export interface Company extends CompanyInput {

  id:string;

  owner_id:string;

  created_at:string;

  updated_at:string;

}




export async function getCompanies(){

  const {
    data,
    error
  } = await supabase
    .from("companies")
    .select("*")
    .order(
      "created_at",
      {
        ascending:false
      }
    );


  if(error)
    throw error;


  return data as Company[];

}




export async function createCompany(
company:CompanyInput
){

  const {
    data:{
      user
    }
  } = await supabase.auth.getUser();



  if(!user)
    throw new Error(
      "No authenticated user"
    );



  const {
    data,
    error
  } = await supabase
    .from("companies")
    .insert({

      ...company,

      owner_id:user.id

    })
    .select()
    .single();



  if(error)
    throw error;



  return data as Company;

}





export async function updateCompany(
id:string,
updates:Partial<CompanyInput>
){


const {
data,
error
}=await supabase
.from("companies")
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


return data as Company;


}





export async function deleteCompany(
id:string
){


const {
error
}=await supabase
.from("companies")
.delete()
.eq(
"id",
id
);



if(error)
throw error;


}