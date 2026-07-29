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

const opportunityToDb = (o: Opportunity) => ({
  company_id: o.companyId || null,
  company_name: o.companyName,
  contact_name: o.contactName,
  email: o.email,
  phone: o.phone,
  website: o.website,
  industry: o.industry,
  company_size: o.companySize,
  business_problem: o.businessProblem,
  proposed_solution: o.proposedSolution,
  technology_needs: o.technologyNeeds,
  status: o.status,
  estimated_value: o.estimatedValue,
  source: o.source,
  last_contact: o.lastContact,
  next_follow_up: o.nextFollowUp,
  notes: o.notes,
  created_at: o.createdAt,
  updated_at: o.updatedAt,
});

const opportunityFromDb = (row: any): Opportunity => ({
  id: row.id,
  companyId: row.company_id ?? "",
  companyName: row.company_name,
  contactName: row.contact_name,
  email: row.email ?? "",
  phone: row.phone ?? "",
  website: row.website ?? "",
  industry: row.industry ?? "",
  companySize: row.company_size ?? "",
  businessProblem: row.business_problem ?? "",
  proposedSolution: row.proposed_solution ?? "",
  technologyNeeds: row.technology_needs ?? [],
  status: row.status,
  estimatedValue: Number(row.estimated_value),
  source: row.source ?? "",
  lastContact: row.last_contact ?? "",
  nextFollowUp: row.next_follow_up ?? "",
  notes: row.notes ?? "",
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











export const DataProvider = ({
children,
}:{
children:ReactNode;
})=>{



const [companies,setCompanies] =
useState<Company[]>([]);





const [opportunities, setOpportunities] =
  useState<Opportunity[]>([]);




const [activities, setActivities] = useState<Activity[]>([]);




useEffect(() => {
  loadCompanies();
  loadOpportunities();
  loadActivities();
}, []);

const loadOpportunities = async () => {
  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Load opportunities failed:", error);
    return;
  }

  setOpportunities(
    (data ?? []).map(opportunityFromDb)
  );


};

const activityFromDb = (row: any): Activity => ({
  id: row.id,
  companyId: row.company_id ?? "",
  opportunityId: row.opportunity_id ?? "",
  type: row.type,
  title: row.title,
  description: row.description,
  createdAt: row.created_at,
});


const loadActivities = async () => {
  const { data, error } = await supabase
  .from("activities")
  .select("*")
  .order("created_at", { ascending:false });
  if (error) {
    console.error(error);
    return;
  }

  setActivities(
  (data ?? []).map(activityFromDb)
);
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
await loadOpportunities();
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
await loadOpportunities();
await loadActivities();

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
await loadOpportunities();
await loadActivities();

};









const addOpportunity = async (opportunity: Opportunity) => {


const { data, error } = await supabase
  .from("opportunities")
  .insert(
    opportunityToDb(opportunity)
  )
  .select()
  .single();


if(error){
  console.error("Add opportunity failed:", error);
  return;
}


await loadOpportunities();


await addActivity({

id: crypto.randomUUID(),

companyId:data.company_id,

opportunityId:data.id,

type:"note",

title:"Opportunity Created",

description:`${data.company_name} opportunity created`,

createdAt:new Date().toISOString()

});


};









const updateOpportunity = async (opportunity: Opportunity) => {

  const { error } = await supabase
    .from("opportunities")
    .update(
      opportunityToDb({
        ...opportunity,
        updatedAt:new Date().toISOString(),
      })
    )
    .eq("id", opportunity.id);


  if(error){
    console.error("Update opportunity failed:", error);
    return;
  }


  await loadOpportunities();


  await addActivity({
    id: crypto.randomUUID(),
    companyId: opportunity.companyId,
    opportunityId: opportunity.id,
    type:"note",
    title:"Opportunity Updated",
    description:`${opportunity.companyName} opportunity updated`,
    createdAt:new Date().toISOString()
  });

};








const deleteOpportunity = async (id: string) => {
  const opportunity = opportunities.find(
    item => item.id === id
  );

  const { error } = await supabase
    .from("opportunities")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Delete opportunity failed:", error);
    return;
  }

  await loadOpportunities();

  if (opportunity) {
    await addActivity({
      id: crypto.randomUUID(),
      companyId: opportunity.companyId,
      opportunityId: opportunity.id,
      type: "note",
      title: "Opportunity Deleted",
      description: `${opportunity.companyName} opportunity deleted`,
      createdAt: new Date().toISOString(),
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