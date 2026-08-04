import React from "react";

import PipelineBoard from "@/components/PipelineBoard/PipelineBoard";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Kanban,
  TrendingUp,
} from "lucide-react";
import { useRevenue } from "@/modules/revenue/hooks/useRevenue";





export default function RevenuePipeline(){


const {
opportunities,
pipelineValue,
} = useRevenue();




const activeDeals =
opportunities.filter(
item =>
item.status !== "lost"
).length;




return (

<div className="p-6 space-y-6">



<div>

<h1 className="text-3xl font-bold">

Revenue Pipeline

</h1>


<p className="text-gray-600">

Manage opportunities through the Revenue OS lifecycle.

</p>


</div>







<div className="
grid grid-cols-1 md:grid-cols-3 gap-5
">





<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Kanban className="text-purple-600"/>

Active Deals

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

{activeDeals}

</p>

</CardContent>


</Card>







<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<TrendingUp className="text-green-600"/>

Pipeline Value

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

${pipelineValue.toLocaleString()}

</p>

</CardContent>


</Card>







<Card>

<CardHeader>

<CardTitle>

Revenue Engine

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-gray-600">

Drag deals between stages to update forecasts automatically.

</p>

</CardContent>


</Card>




</div>







<Card>


<CardHeader>


<CardTitle className="flex items-center gap-2">


<Kanban className="w-5 h-5 text-purple-600"/>


Pipeline Board


</CardTitle>


</CardHeader>





<CardContent className="p-0">


<PipelineBoard />


</CardContent>


</Card>






</div>

);

}