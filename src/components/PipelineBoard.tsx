import React from "react";

import {
  DndContext,
  DragEndEvent,
  useDroppable,
} from "@dnd-kit/core";


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import {
  Badge
} from "@/components/ui/badge";


import {
  DollarSign,
} from "lucide-react";


import {
  Opportunity
} from "@/types/opportunity";


import {
  useData
} from "@/contexts/DataContext";


import OpportunityCard from "./OpportunityCard";





const stages: Opportunity["status"][] = [

"research",

"contacted",

"conversation",

"discovery",

"proposal",

"client",

"lost"

];






const PipelineColumn = ({
stage,
children,
count,
value
}:{
stage:Opportunity["status"];
children:React.ReactNode;
count:number;
value:number;
})=>{


const {
setNodeRef,
isOver
}=useDroppable({

id:stage

});



return (

<Card

ref={setNodeRef}

className={`
min-h-[450px]
transition
${isOver ? "bg-teal-50 border-teal-400" : ""}
`}

>


<CardHeader>


<CardTitle
className="
flex justify-between items-center capitalize text-sm
"
>


<span>

{stage}

</span>


<Badge>

{count}

</Badge>


</CardTitle>



<p className="
text-sm text-green-600 font-semibold flex items-center gap-1
">


<DollarSign className="w-3 h-3"/>


${value.toLocaleString("en-US")}


</p>


</CardHeader>





<CardContent className="space-y-3">


{children}


</CardContent>


</Card>


);

};









const PipelineBoard:React.FC = ()=>{


const {

opportunities,

updateOpportunity,

addActivity

}=useData();









const handleDragEnd = (
event:DragEndEvent
)=>{


const {

active,

over

}=event;



if(!over)
return;



const opportunity =
opportunities.find(
item =>
item.id === active.id
);



if(!opportunity)
return;



const newStatus =
over.id as Opportunity["status"];




if(
opportunity.status === newStatus
)
return;






updateOpportunity({

...opportunity,

status:newStatus,

updatedAt:
new Date().toISOString()

});






addActivity({

id:
Date.now().toString(),

companyId:
opportunity.companyId,

opportunityId:
opportunity.id,

type:"status_change",

title:
"Pipeline Stage Changed",

description:
`${opportunity.companyName} moved from ${opportunity.status} to ${newStatus}`,

createdAt:
new Date().toISOString()

});


};









return (

<DndContext
onDragEnd={handleDragEnd}
>


<div className="p-6 space-y-6">


<div>


<h1 className="text-3xl font-bold">

Pipeline Board

</h1>


<p className="text-gray-600">

Drag opportunities through your sales process.

</p>


</div>







<div className="
grid
grid-cols-1
md:grid-cols-3
xl:grid-cols-7
gap-4
overflow-x-auto
">


{

stages.map(stage=>{


const stageOpportunities =
opportunities.filter(
item =>
item.status === stage
);




const value =
stageOpportunities.reduce(
(sum,item)=>
sum + item.estimatedValue,
0
);




return (


<PipelineColumn

key={stage}

stage={stage}

count={
stageOpportunities.length
}

value={value}

>


{

stageOpportunities.length === 0

?

<p className="
text-sm text-gray-400 text-center py-8
">

Drop opportunity here

</p>


:


stageOpportunities.map(
opportunity=>(


<OpportunityCard

key={opportunity.id}

opportunity={opportunity}

draggable={true}

onEdit={()=>{}}

onDelete={()=>{}}

onStatusChange={()=>{}}

/>


)

)


}



</PipelineColumn>


);


})

}



</div>


</div>


</DndContext>

);


};



export default PipelineBoard;