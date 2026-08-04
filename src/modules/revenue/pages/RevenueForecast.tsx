import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  TrendingUp,
  DollarSign,
  Target,
  CheckCircle,
  BarChart3,
} from "lucide-react";

import { useRevenue } from "../hooks/useRevenue";



export default function RevenueForecast() {


const {
  opportunities,
  pipelineValue,
  clientCount,
} = useRevenue();





const getProbability = (status:string)=>{

switch(status){

case "research":
return 0.10;

case "contacted":
return 0.20;

case "conversation":
return 0.35;

case "discovery":
return 0.50;

case "proposal":
return 0.75;

case "client":
return 1;

default:
return 0;

}

};





const closedRevenue = opportunities

.filter(
item=>item.status==="client"
)

.reduce(
(sum,item)=>
sum + item.estimatedValue,
0
);






const weightedPipeline =
opportunities.reduce(

(sum,item)=>

sum +
(
item.estimatedValue *
getProbability(item.status)
),

0

);






const forecast =
closedRevenue + weightedPipeline;






const forecastOpportunities =
opportunities

.sort(
(a,b)=>
b.estimatedValue -
a.estimatedValue
)

.slice(0,10);






return (

<div className="p-6 space-y-6">



<div>


<h1 className="text-3xl font-bold">

Revenue Forecast

</h1>


<p className="text-gray-600">

Predict future revenue using pipeline probability intelligence.

</p>


</div>








<div className="
grid grid-cols-1 md:grid-cols-4 gap-6
">





<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<DollarSign className="w-5 h-5 text-green-600"/>

Current Pipeline

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

${pipelineValue.toLocaleString()}

</p>


<p className="text-sm text-gray-500">

Total opportunity value

</p>

</CardContent>

</Card>








<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<TrendingUp className="w-5 h-5 text-purple-600"/>

Projected Revenue

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

${Math.round(forecast).toLocaleString()}

</p>


<p className="text-sm text-gray-500">

Closed + weighted pipeline

</p>

</CardContent>

</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Target className="w-5 h-5 text-blue-600"/>

Weighted Pipeline

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

${Math.round(weightedPipeline).toLocaleString()}

</p>


<p className="text-sm text-gray-500">

Probability adjusted

</p>


</CardContent>

</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<CheckCircle className="w-5 h-5 text-teal-600"/>

Clients

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

{clientCount}

</p>


<p className="text-sm text-gray-500">

Revenue generating accounts

</p>


</CardContent>

</Card>





</div>









<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<BarChart3 className="w-5 h-5 text-purple-600"/>

Forecast Breakdown

</CardTitle>

</CardHeader>




<CardContent className="space-y-4">



<div className="flex justify-between border-b pb-3">

<span>
Closed Revenue
</span>


<strong>
${closedRevenue.toLocaleString()}
</strong>

</div>




<div className="flex justify-between border-b pb-3">

<span>
Weighted Pipeline
</span>


<strong>
${Math.round(weightedPipeline).toLocaleString()}
</strong>


</div>





<div className="flex justify-between text-lg">

<span className="font-bold">

Projected Revenue

</span>


<strong className="text-green-600">

${Math.round(forecast).toLocaleString()}

</strong>


</div>



</CardContent>


</Card>









<Card>


<CardHeader>

<CardTitle>

Opportunity Forecast

</CardTitle>

</CardHeader>




<CardContent className="space-y-3">



{
forecastOpportunities.length === 0 ? (

<p className="text-gray-500">

No opportunities available.

</p>

)

:

forecastOpportunities.map(item=>(


<div

key={item.id}

className="
border rounded-lg p-4
flex justify-between items-center
"

>


<div>

<h3 className="font-semibold">

{item.companyName}

</h3>


<p className="text-sm text-gray-500 capitalize">

{item.status}

</p>


<p className="text-xs text-gray-400">

Forecast probability:
{
Math.round(
getProbability(item.status)*100
)
}%

</p>


</div>





<div className="text-right">

<p className="font-bold text-green-600">

${item.estimatedValue.toLocaleString()}

</p>

</div>



</div>


))


}



</CardContent>


</Card>






</div>

);


}