import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Company } from "@/config/company";
import { Opportunity } from "@/types/opportunity";
import { Activity } from "@/types/activity";

import { supabase } from "@/lib/supabase";


const companyToDb = (company: Company) => ({
  name: company.name,
  website: company.website,
  industry: company.industry,
  size: company.size,
  description: company.description,
  location: company.location,
  primary_contact: company.primaryContact,
  email: company.email,
  phone: company.phone,
  created_at: company.createdAt,
  updated_at: company.updatedAt,
});


const companyFromDb = (row: any): Company => ({
  id: row.id,
  name: row.name,
  website: row.website ?? "",
  industry: row.industry ?? "",
  size: row.size ?? "",
  description: row.description ?? "",
  location: row.location ?? "",
  primaryContact: row.primary_contact ?? "",
  email: row.email ?? "",
  phone: row.phone ?? "",
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});


interface DataContextType {

  companies: Company[];

  opportunities: Opportunity[];

  activities: Activity[];


  addCompany:(company:Company)=>Promise<void>;

  updateCompany:(company:Company)=>Promise<void>;

  deleteCompany:(id:string)=>Promise<void>;


  addOpportunity:(opportunity:Opportunity)=>Promise<void>;

  updateOpportunity:(opportunity:Opportunity)=>Promise<void>;

  deleteOpportunity:(id:string)=>Promise<void>;


  addActivity:(activity:Activity)=>Promise<void>;

}


const DataContext =
createContext<DataContextType>(
{} as DataContextType
);



export const useData = () =>
useContext(DataContext);





const seedCompanies:Company[]=[

{
id:"1",

name:"ABC Construction",

industry:"Construction",

website:"abcconstruction.com",

description:
"Commercial construction company",

email:
"info@abcconstruction.com",

createdAt:
new Date().toISOString(),

updatedAt:
new Date().toISOString()

},


{
id:"2",

name:"XYZ Dental Group",

industry:"Healthcare",

website:"xyzdental.com",

description:
"Dental organization exploring automation solutions",

email:
"office@xyzdental.com",

createdAt:
new Date().toISOString(),

updatedAt:
new Date().toISOString()

}

];





export const DataProvider = ({
children,
}:{
children:ReactNode;
})=>{



const [companies,setCompanies] =
useState<Company[]>([]);





const [opportunities,setOpportunities] =
useState<Opportunity[]>([

{
id:"opp-1",

companyId:"1",

companyName:"ABC Construction",

contactName:"John Smith",

email:"john@abcconstruction.com",

phone:"555-555-5555",

website:"abcconstruction.com",

industry:"Construction",

companySize:"51-200",

businessProblem:
"Manual customer updates and disconnected project tracking.",

proposedSolution:
"CRM automation with customer portal and workflow management.",

technologyNeeds:[
"CRM",
"Workflow Automation",
"Customer Portal"
],

status:"discovery",

estimatedValue:25000,

source:"Referral",

lastContact:"2026-07-26",

nextFollowUp:"2026-08-01",

notes:
"Interested in improving customer communication.",

createdAt:
new Date().toISOString(),

updatedAt:
new Date().toISOString()

},


{
id:"opp-2",

companyId:"2",

companyName:"XYZ Dental Group",

contactName:"Sarah Johnson",

email:"sarah@xyzdental.com",

phone:"555-222-3333",

website:"xyzdental.com",

industry:"Healthcare",

companySize:"11-50",

businessProblem:
"Patient communication is handled manually.",

proposedSolution:
"Automated patient engagement system.",

technologyNeeds:[
"AI Automation",
"CRM",
"API Integration"
],

status:"proposal",

estimatedValue:40000,

source:"Networking",

lastContact:"2026-07-25",

nextFollowUp:"2026-08-05",

notes:
"Proposal being reviewed.",

createdAt:
new Date().toISOString(),

updatedAt:
new Date().toISOString()

}

]);





const [activities,setActivities]=
useState<Activity[]>(()=>{

const saved =
localStorage.getItem(
"tohbala_activities"
);


return saved
?
JSON.parse(saved)
:
[];

});




useEffect(() => {
  loadCompanies();
  loadOpportunities();
  loadActivities();
}, []);

const loadOpportunities = async () => {
  const { data, error } = await supabase
    .from("opportunities")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  setOpportunities(data ?? []);
};

const loadActivities = async () => {
  const { data, error } = await supabase
    .from("activities")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  setActivities(data ?? []);
};

const loadCompanies = async () => {
  const { data, error } = await supabase
    .from("companies")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  setCompanies(
    (data ?? []).map(companyFromDb)
  );
};



const addActivity = async (activity: Activity) => {

  const { error } = await supabase
    .from("activities")
    .insert({
      id: activity.id,
      company_id: activity.companyId,
      opportunity_id: activity.opportunityId,
      type: activity.type,
      title: activity.title,
      description: activity.description,
      created_at: activity.createdAt
    });


  if(error){
    console.error("Activity insert failed:", error);
    return;
  }


  await loadActivities();

};










const addCompany = async (company: Company) => {

  const { data, error } = await supabase
    .from("companies")
    .insert(companyToDb(company))
    .select()
    .single();


  if(error){
    console.error(error);
    return;
  }


  await loadCompanies();


  await addActivity({
    id: crypto.randomUUID(),
    companyId:data.id,
    type:"note",
    title:"Company Created",
    description:`${data.name} was added`,
    createdAt:new Date().toISOString()
  });

};









const updateCompany = async (company: Company) => {

  const { error } = await supabase
    .from("companies")
    .update(
      companyToDb({
        ...company,
        updatedAt:new Date().toISOString()
      })
    )
    .eq(
      "id",
      company.id
    );


  if(error){
    console.error(error);
    return;
  }


  await loadCompanies();

};







const deleteCompany = async (id:string)=>{

 const {error}=await supabase
   .from("companies")
   .delete()
   .eq("id",id);


 if(error){
   console.error(error);
   return;
 }


 await loadCompanies();

};









const addOpportunity = async (opportunity: Opportunity) => {


setOpportunities(prev=>[

...prev,

opportunity

]);



await addActivity({

id:
Date.now().toString(),

companyId:
opportunity.companyId,

opportunityId:
opportunity.id,

type:"note",

title:
"Opportunity Created",

description:
`${opportunity.companyName} opportunity created`,

createdAt:
new Date().toISOString()

});


};









const updateOpportunity = async (opportunity: Opportunity) => {


setOpportunities(prev=>

prev.map(item=>

item.id===opportunity.id

?

{

...opportunity,

updatedAt:
new Date().toISOString()

}

:

item

)

);



};









const deleteOpportunity = async (id: string) => {


const opportunity =
opportunities.find(
item=>item.id===id
);




setOpportunities(prev=>

prev.filter(
item=>item.id!==id
)

);




if(opportunity){


await addActivity({

id:
Date.now().toString(),

companyId:
opportunity.companyId,

opportunityId:
opportunity.id,

type:"note",

title:
"Opportunity Deleted",

description:
`${opportunity.companyName} opportunity deleted`,

createdAt:
new Date().toISOString()

});


}


};








return (

<DataContext.Provider

value={{

companies,

opportunities,

activities,


addCompany,

updateCompany,

deleteCompany,


addOpportunity,

updateOpportunity,

deleteOpportunity,


addActivity

}}

>

{children}

</DataContext.Provider>

);


};