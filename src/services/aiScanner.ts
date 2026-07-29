import { Opportunity } from "@/types/opportunity";
import { Activity } from "@/types/activity";


export interface OpportunityScore {

  opportunityId: string;

  companyName: string;

  score: number;

  priority:
    | "high"
    | "medium"
    | "low";

  reasons: string[];

  risks: string[];

  recommendation: string;

}



export interface PipelineInsight {

  totalOpportunities: number;

  totalValue: number;

  highPriority: number;

  mediumPriority: number;

  lowPriority: number;

  stalled: number;

}




export const calculateOpportunityScore = (
  opportunity: Opportunity,
  activities: Activity[]
): OpportunityScore => {


let score = 0;


const reasons:string[] = [];

const risks:string[] = [];





// Opportunity value scoring

if(opportunity.estimatedValue >= 50000){

score += 20;

reasons.push(
"High potential deal value"
);

}
else if(opportunity.estimatedValue >= 10000){

score += 10;

reasons.push(
"Moderate deal value"
);

}





// Pipeline stage scoring

switch(opportunity.status){


case "client":

score += 30;

reasons.push(
"Existing client relationship"
);

break;



case "proposal":

score += 25;

reasons.push(
"Proposal stage reached"
);

break;



case "discovery":

score += 20;

reasons.push(
"Discovery completed"
);

break;



case "conversation":

score += 15;

break;



case "contacted":

score += 10;

break;



case "research":

score += 5;

break;


case "lost":

score -= 20;

risks.push(
"Opportunity marked lost"
);

break;


}





// Activity analysis

const opportunityActivities =
activities.filter(
activity =>
activity.opportunityId === opportunity.id
);



if(opportunityActivities.length > 0){

score += 15;

reasons.push(
"Recent activity history exists"
);

}
else{

risks.push(
"No activity recorded"
);

}




// Follow up check

if(
opportunity.nextFollowUp
){

score += 10;

reasons.push(
"Follow-up scheduled"
);

}
else{

risks.push(
"No follow-up scheduled"
);

}




// Limit score

score = Math.max(
0,
Math.min(
100,
score
)
);





let priority:
"high" |
"medium" |
"low";



if(score >= 75){

priority = "high";

}
else if(score >= 50){

priority = "medium";

}
else{

priority = "low";

}





let recommendation = "";



if(priority === "high"){

recommendation =
"Prioritize this opportunity and schedule the next customer action.";

}
else if(priority === "medium"){

recommendation =
"Continue nurturing and create a follow-up activity.";

}
else{

recommendation =
"Research customer needs and improve engagement.";

}





return {

opportunityId:
opportunity.id,

companyName:
opportunity.companyName,

score,

priority,

reasons,

risks,

recommendation,

};


};









export const analyzePipeline = (
opportunities: Opportunity[]
): PipelineInsight => {


const totalValue =
opportunities.reduce(
(sum,item)=>
sum + item.estimatedValue,
0
);



const scored =
opportunities.map(
item =>
calculateOpportunityScore(
item,
[]
)
);



return {


totalOpportunities:
opportunities.length,


totalValue,


highPriority:
scored.filter(
item =>
item.priority === "high"
)
.length,



mediumPriority:
scored.filter(
item =>
item.priority === "medium"
)
.length,



lowPriority:
scored.filter(
item =>
item.priority === "low"
)
.length,



stalled:
opportunities.filter(
item =>
!item.nextFollowUp
)
.length,


};


};