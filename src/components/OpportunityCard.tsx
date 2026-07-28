import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Mail,
  Phone,
  Edit,
  Trash2,
  Building2,
  Lightbulb,
  Target,
  Calendar,
  GripVertical,
} from "lucide-react";

import { Opportunity } from "@/types/opportunity";

import { pipelineStages } from "@/config/pipeline";

import {
  useDraggable
} from "@dnd-kit/core";

import {
  CSS
} from "@dnd-kit/utilities";



interface OpportunityCardProps {

  opportunity: Opportunity;

  onEdit: (
    opportunity: Opportunity
  ) => void;

  onDelete: (
    id:string
  ) => void;

  onStatusChange: (
    id:string,
    status:Opportunity["status"]
  ) => void;

  draggable?: boolean;

}




const pipelineColors = {

research:"bg-gray-500",

contacted:"bg-blue-500",

conversation:"bg-cyan-500",

discovery:"bg-purple-500",

proposal:"bg-orange-500",

client:"bg-green-500",

lost:"bg-red-500",

};






const OpportunityCard:React.FC<OpportunityCardProps> = ({
  opportunity,
  onEdit,
  onDelete,
  onStatusChange,
  draggable=true
})=>{


const {
attributes,
listeners,
setNodeRef,
transform,
}=useDraggable({

id:opportunity.id,

disabled:!draggable

});



const style={

transform:

CSS.Transform.toString(transform),

};





const currentStage =
pipelineStages.find(
stage =>
stage.id === opportunity.status
);





return (

<Card

ref={setNodeRef}

style={style}

{...listeners}

{...attributes}

className="
hover:shadow-xl
transition-shadow
border-gray-200
cursor-grab
"

>





<CardHeader className="pb-3">


<div className="
flex justify-between items-start
">



<div className="flex gap-2">


{
draggable && (

<GripVertical
className="
w-5 h-5
text-gray-400
mt-1
"
/>

)
}



<div>


<h3 className="
text-lg
font-bold
text-gray-900
flex
items-center
gap-2
">


<Building2
className="
w-5
h-5
text-teal-600
"
/>


{opportunity.companyName}


</h3>


<p className="
text-sm text-gray-600 mt-1
">

{opportunity.industry}

{
opportunity.companySize &&
` • ${opportunity.companySize}`
}

</p>


</div>


</div>






<div className="flex gap-1">


<Button

variant="ghost"

size="sm"

onClick={(e)=>{

e.stopPropagation();

onEdit(opportunity);

}}

>


<Edit className="w-4 h-4"/>


</Button>





<Button

variant="ghost"

size="sm"

onClick={(e)=>{

e.stopPropagation();

onDelete(opportunity.id);

}}

>


<Trash2
className="
w-4 h-4 text-red-500
"
/>


</Button>



</div>



</div>


</CardHeader>









<CardContent className="space-y-4">



<div className="space-y-2 text-sm">


<div className="flex items-center gap-2">

<Target className="w-4 h-4 text-gray-400"/>

<span>
{opportunity.contactName}
</span>

</div>



{
opportunity.email && (

<div className="flex items-center gap-2">

<Mail className="w-4 h-4 text-gray-400"/>

<span>
{opportunity.email}
</span>

</div>

)
}



{
opportunity.phone && (

<div className="flex items-center gap-2">

<Phone className="w-4 h-4 text-gray-400"/>

<span>
{opportunity.phone}
</span>

</div>

)
}


</div>







<div className="
bg-red-50
rounded-lg
p-3
">


<p className="
text-xs font-semibold text-red-700
">

BUSINESS PROBLEM

</p>


<p className="text-sm">

{opportunity.businessProblem}

</p>


</div>









<div className="
bg-teal-50
rounded-lg
p-3
">


<div className="
flex items-center gap-2
">


<Lightbulb
className="
w-4 h-4 text-teal-600
"
/>


<p className="
text-xs font-semibold text-teal-700
">

PROPOSED SOLUTION

</p>


</div>


<p className="text-sm mt-1">

{opportunity.proposedSolution}

</p>


</div>









<div>


<p className="
text-xs font-semibold text-gray-500 mb-2
">

TECHNOLOGY NEEDS

</p>


<div className="flex flex-wrap gap-2">


{
opportunity.technologyNeeds.map(
tech=>(

<Badge
key={tech}
variant="outline"
>

{tech}

</Badge>

)
)

}


</div>


</div>









<div>


<p className="
text-xs font-semibold text-gray-500 mb-2
">

PIPELINE STAGE

</p>


<div className="
flex flex-wrap gap-2
">


{
pipelineStages.map(stage=>(


<Button

key={stage.id}

size="sm"

variant={
opportunity.status===stage.id
?"default"
:"outline"
}

className={
opportunity.status===stage.id
?
`${pipelineColors[stage.id]} text-white`
:
""
}

onClick={(e)=>{

e.stopPropagation();

onStatusChange(
opportunity.id,
stage.id
);

}}

>


{stage.label}


</Button>


))

}


</div>


</div>









<div className="
border-t pt-3
flex justify-between items-center
">


<div className="
flex items-center gap-2 text-sm text-gray-500
">


<Calendar className="w-4 h-4"/>


{
opportunity.nextFollowUp ||
"No follow-up"
}


</div>




<span className="
text-xl font-bold text-green-600
">


${opportunity.estimatedValue.toLocaleString("en-US")}


</span>


</div>









{
currentStage && (

<p className="
text-xs text-gray-500 italic
">

{currentStage.description}

</p>

)

}



</CardContent>



</Card>


);


};


export default OpportunityCard;