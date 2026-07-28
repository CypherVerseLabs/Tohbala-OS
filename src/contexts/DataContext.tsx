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


interface DataContextType {

  companies: Company[];

  opportunities: Opportunity[];

  activities: Activity[];


  addCompany:(company:Company)=>void;

  updateCompany:(company:Company)=>void;

  deleteCompany:(id:string)=>void;


  addOpportunity:(opportunity:Opportunity)=>void;

  updateOpportunity:(opportunity:Opportunity)=>void;

  deleteOpportunity:(id:string)=>void;


  addActivity:(activity:Activity)=>void;

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



const [companies,setCompanies]=
useState<Company[]>(()=>{

const saved =
localStorage.getItem(
"tohbala_companies"
);


return saved
?
JSON.parse(saved)
:
seedCompanies;

});





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






useEffect(()=>{

localStorage.setItem(
"tohbala_companies",
JSON.stringify(companies)
);

},[companies]);





useEffect(()=>{

localStorage.setItem(
"tohbala_opportunities",
JSON.stringify(opportunities)
);

},[opportunities]);





useEffect(()=>{

localStorage.setItem(
"tohbala_activities",
JSON.stringify(activities)
);

},[activities]);








const addActivity=(activity:Activity)=>{


setActivities(prev=>[

activity,

...prev

]);


};










const addCompany=(company:Company)=>{


setCompanies(prev=>[

...prev,

company

]);


addActivity({

id:
Date.now().toString(),

companyId:
company.id,

type:"note",

title:
"Company Created",

description:
`${company.name} was added`,

createdAt:
new Date().toISOString()

});


};










const updateCompany=(company:Company)=>{


setCompanies(prev=>

prev.map(item=>

item.id===company.id

?

{

...company,

updatedAt:
new Date().toISOString()

}

:

item

)

);


};









const deleteCompany=(id:string)=>{


const company =
companies.find(
item=>item.id===id
);




setCompanies(prev=>

prev.filter(
item=>item.id!==id
)

);





setOpportunities(prev=>

prev.filter(
item=>item.companyId!==id
)

);





setActivities(prev=>

prev.filter(
item=>item.companyId!==id
)

);






if(company){

addActivity({

id:
Date.now().toString(),

type:"note",

title:
"Company Deleted",

description:
`${company.name} was removed`,

createdAt:
new Date().toISOString()

});


}



};









const addOpportunity=(opportunity:Opportunity)=>{


setOpportunities(prev=>[

...prev,

opportunity

]);



addActivity({

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









const updateOpportunity=(opportunity:Opportunity)=>{


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









const deleteOpportunity=(id:string)=>{


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


addActivity({

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