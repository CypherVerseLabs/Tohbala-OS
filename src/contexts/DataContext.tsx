import {
  ReactNode,
  createContext,
  useContext
} from "react";

import { CompanyProvider, useCompanyContext } from "./CompanyContext";
import { ContactProvider } from "./ContactContext";
import { OpportunityProvider, useOpportunityContext } from "./OpportunityContext";
import { BlueprintProvider } from "./BlueprintContext";
import { ProposalProvider, useProposalContext } from "./ProposalContext";
import { ActivityProvider, useActivityContext } from "./ActivityContext";




const LegacyDataContext =
createContext<any>(null);





function LegacyDataBridge({
children
}:{
children:ReactNode
}){


const {
companies,
addCompany,
updateCompany,
deleteCompany
}=useCompanyContext();



const {
opportunities,
addOpportunity,
updateOpportunity,
deleteOpportunity
}=useOpportunityContext();



const {
activities,
addActivity
}=useActivityContext();



const {
proposals
}=useProposalContext();



return (

<LegacyDataContext.Provider

value={{

companies,

opportunities,

activities,

proposals,


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

</LegacyDataContext.Provider>

);


}






export function useData(){


const context =
useContext(LegacyDataContext);



if(!context){

throw new Error(
"useData must be inside DataProvider"
);

}



return context;


}








export function DataProvider({
children
}:{
children:ReactNode
}){


return (

<CompanyProvider>

<ContactProvider>

<OpportunityProvider>

<BlueprintProvider>

<ProposalProvider>

<ActivityProvider>


<LegacyDataBridge>

{children}

</LegacyDataBridge>


</ActivityProvider>

</ProposalProvider>

</BlueprintProvider>

</OpportunityProvider>

</ContactProvider>

</CompanyProvider>

);


}