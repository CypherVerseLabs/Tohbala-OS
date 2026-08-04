import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Kanban,
} from "lucide-react";


interface PipelineCardProps {

  discovery: number;

  proposal: number;

  client: number;

}



export default function PipelineCard({

  discovery,
  proposal,
  client,

}: PipelineCardProps) {



const stages = [

  {
    label: "Discovery",
    count: discovery,
    color: "bg-blue-500",
    description: "Qualified conversations",
  },


  {
    label: "Proposal",
    count: proposal,
    color: "bg-yellow-500",
    description: "Solutions presented",
  },


  {
    label: "Clients",
    count: client,
    color: "bg-green-500",
    description: "Revenue generated",
  },

];



return (

<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Kanban className="w-5 h-5 text-purple-600"/>

Revenue Pipeline

</CardTitle>

</CardHeader>




<CardContent className="space-y-5">


{
stages.map(stage=>(


<div key={stage.label}>


<div className="flex justify-between">


<div>


<p className="font-medium">

{stage.label}

</p>


<p className="text-xs text-gray-500">

{stage.description}

</p>


</div>



<span className="font-bold">

{stage.count}

</span>


</div>




<div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">


<div

className={`h-full ${stage.color}`}

style={{

width:
`${Math.min(stage.count * 25,100)}%`

}}

/>


</div>


</div>


))

}


</CardContent>


</Card>

);

}