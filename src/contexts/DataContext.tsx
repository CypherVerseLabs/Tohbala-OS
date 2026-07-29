// src/contexts/DataContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Company } from "@/config/company";
import { Opportunity } from "@/types/opportunity";
import { Activity } from "@/types/activity";

import { CompanyService } from "@/services/companyService";
import { OpportunityService } from "@/services/opportunityService";
import { ActivityService } from "@/services/activityService";



interface DataContextType {

  companies: Company[];

  opportunities: Opportunity[];

  activities: Activity[];


  addCompany(
    company: Company
  ): Promise<void>;

  updateCompany(
    company: Company
  ): Promise<void>;

  deleteCompany(
    id: string
  ): Promise<void>;


  addOpportunity(
    opportunity: Opportunity
  ): Promise<void>;

  updateOpportunity(
    opportunity: Opportunity
  ): Promise<void>;

  deleteOpportunity(
    id: string
  ): Promise<void>;


  addActivity(
    activity: Activity
  ): Promise<void>;

}



const DataContext =
createContext<DataContextType | null>(null);



export const useData = () => {

  const context = useContext(DataContext);


  if (!context) {

    throw new Error(
      "useData must be used inside DataProvider"
    );

  }


  return context;

};





export const DataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {



const [companies,setCompanies] =
useState<Company[]>([]);



const [opportunities,setOpportunities] =
useState<Opportunity[]>([]);



const [activities,setActivities] =
useState<Activity[]>([]);





const loadCompanies = async () => {

  try {

    const data =
    await CompanyService.getAll();

    setCompanies(data);

  } catch(error){

    console.error(
      "Load companies failed:",
      error
    );

  }

};





const loadOpportunities = async () => {

  try {

    const data =
    await OpportunityService.getAll();

    setOpportunities(data);

  } catch(error){

    console.error(
      "Load opportunities failed:",
      error
    );

  }

};





const loadActivities = async () => {

  try {

    const data =
    await ActivityService.getAll();

    setActivities(data);

  } catch(error){

    console.error(
      "Load activities failed:",
      error
    );

  }

};





useEffect(()=>{

  loadCompanies();

  loadOpportunities();

  loadActivities();

},[]);





const addActivity = async (
activity: Activity
) => {

  try {

    await ActivityService.create(
      activity
    );

    await loadActivities();


  } catch(error){

    console.error(
      "Add activity failed:",
      error
    );

  }

};





const addCompany = async (
company: Company
) => {

  try {

    const created =
    await CompanyService.create(
      company
    );


    await loadCompanies();



    await addActivity({

      id: crypto.randomUUID(),

      companyId: created.id,

      opportunityId:"",

      type:"note",

      title:"Company Created",

      description:
      `${created.name} was added`,

      createdAt:
      new Date().toISOString()

    });



  } catch(error){

    console.error(
      "Add company failed:",
      error
    );

  }

};

const updateCompany = async (
company: Company
) => {

  try {

    await CompanyService.update(
      company
    );


    await loadCompanies();



  } catch(error){

    console.error(
      "Update company failed:",
      error
    );

  }

};





const deleteCompany = async (
id:string
) => {

  try {

    await CompanyService.remove(
      id
    );


    await loadCompanies();

    await loadOpportunities();

    await loadActivities();



  } catch(error){

    console.error(
      "Delete company failed:",
      error
    );

  }

};







const addOpportunity = async (
opportunity: Opportunity
) => {

  try {


    const created =
    await OpportunityService.create(
      opportunity
    );


    await loadOpportunities();



    await addActivity({

      id: crypto.randomUUID(),

      companyId:
      created.companyId,

      opportunityId:
      created.id,

      type:"note",

      title:"Opportunity Created",

      description:
      `${created.companyName} opportunity created`,

      createdAt:
      new Date().toISOString()

    });



  } catch(error){

    console.error(
      "Add opportunity failed:",
      error
    );

  }

};







const updateOpportunity = async (
opportunity: Opportunity
) => {

  try {


    await OpportunityService.update(
      opportunity
    );


    await loadOpportunities();



    await addActivity({

      id: crypto.randomUUID(),

      companyId:
      opportunity.companyId,

      opportunityId:
      opportunity.id,

      type:"note",

      title:"Opportunity Updated",

      description:
      `${opportunity.companyName} opportunity updated`,

      createdAt:
      new Date().toISOString()

    });



  } catch(error){

    console.error(
      "Update opportunity failed:",
      error
    );

  }

};







const deleteOpportunity = async (
id:string
) => {


  try {


    const opportunity =
    opportunities.find(
      item => item.id === id
    );



    await OpportunityService.remove(
      id
    );


    await loadOpportunities();



    if(opportunity){


      await addActivity({

        id: crypto.randomUUID(),

        companyId:
        opportunity.companyId,

        opportunityId:
        opportunity.id,

        type:"note",

        title:"Opportunity Deleted",

        description:
        `${opportunity.companyName} opportunity deleted`,

        createdAt:
        new Date().toISOString()

      });


    }



  } catch(error){

    console.error(
      "Delete opportunity failed:",
      error
    );

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


addActivity,

}}

>

{children}

</DataContext.Provider>

);


};