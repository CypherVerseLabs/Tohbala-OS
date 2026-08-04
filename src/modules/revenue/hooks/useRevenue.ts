// src/modules/revenue/hooks/useRevenue.ts

import {
  useMemo
} from "react";

import {
  useCompanyContext
} from "@/contexts/CompanyContext";

import {
  useOpportunityContext
} from "@/contexts/OpportunityContext";

import {
  useActivityContext
} from "@/contexts/ActivityContext";

import {
  useProposalContext
} from "@/contexts/ProposalContext";







export function useRevenue(){





const {
companies
} = useCompanyContext();




const {
opportunities
} = useOpportunityContext();




const {
activities
} = useActivityContext();




const {
proposals
} = useProposalContext();









const activeProposals = useMemo(()=>{


return proposals.filter(

proposal =>

proposal.status !== "REJECTED" &&

proposal.status !== "EXPIRED"

);


},[
proposals
]);









const activeClients = useMemo(()=>{


return opportunities.filter(

item =>

item.status === "client"

);


},[
opportunities
]);









const discovery = useMemo(()=>{


return opportunities.filter(

item =>

item.status === "discovery"

);


},[
opportunities
]);









const pipelineValue = useMemo(()=>{


return opportunities

.filter(

item =>

item.status !== "lost"

)

.reduce(

(sum,item)=>

sum +

Number(item.estimatedValue ?? 0),

0

);


},[
opportunities
]);









const proposalCount =
activeProposals.length;





const clientCount =
activeClients.length;





const discoveryCount =
discovery.length;









const awaitingDecision = useMemo(()=>{


return activeProposals.filter(

proposal =>

proposal.status === "SENT" ||

proposal.status === "VIEWED"

);


},[
activeProposals
]);









const priorityOpportunities = useMemo(()=>{


return [

...opportunities

]

.filter(

item =>

item.status === "discovery"

)

.sort(

(a,b)=>

Number(b.estimatedValue ?? 0)

-

Number(a.estimatedValue ?? 0)

)

.slice(0,5);



},[
opportunities
]);









const recentActivities = useMemo(()=>{


return [

...activities

]

.sort(

(a,b)=>

new Date(b.createdAt).getTime()

-

new Date(a.createdAt).getTime()

)

.slice(0,10);



},[
activities
]);









const weightedPipeline = useMemo(()=>{


return opportunities.reduce(

(sum,item)=>{


let probability = 0;



switch(item.status){


case "research":

probability = 0.10;

break;



case "contacted":

probability = 0.20;

break;



case "conversation":

probability = 0.35;

break;



case "discovery":

probability = 0.50;

break;



case "client":

probability = 1;

break;



default:

probability = 0;

}



return (

sum +

Number(item.estimatedValue ?? 0) *

probability

);


},

0

);


},[
opportunities
]);









const closedRevenue = useMemo(()=>{


return activeClients.reduce(

(sum,item)=>

sum +

Number(item.estimatedValue ?? 0),

0

);


},[
activeClients
]);









const proposalPipeline = useMemo(()=>{


return activeProposals.reduce(

(sum,item)=>

sum +

Number(item.estimatedValue ?? 0),

0

);


},[
activeProposals
]);









const forecast =

closedRevenue +

weightedPipeline +

proposalPipeline;









const risks = useMemo(()=>{


return activeProposals.filter(

proposal =>

proposal.status === "DRAFT"

);


},[
activeProposals
]);









const insights = [


`${proposalCount} active proposal(s).`,


`${awaitingDecision.length} proposal(s) awaiting decision.`,


`${discoveryCount} discovery opportunity(s) in progress.`,


`${clientCount} client account(s) converted.`,


`Pipeline value: $${pipelineValue.toLocaleString()}.`,


`Proposal value: $${proposalPipeline.toLocaleString()}.`,


`Forecast: $${Math.round(forecast).toLocaleString()}.`

];









return {


companies,


opportunities,


activities,


proposals,


activeProposals,


awaitingDecision,


activeClients,


discovery,



pipelineValue,


proposalPipeline,


clientCount,


proposalCount,


discoveryCount,



priorityOpportunities,


recentActivities,



weightedPipeline,


closedRevenue,


forecast,


risks,


insights


};


}