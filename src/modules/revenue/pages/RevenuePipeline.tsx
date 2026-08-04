import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Kanban,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import { useRevenue } from "../hooks/useRevenue";




const stages = [

{
name:"Research",
key:"research",
color:"bg-gray-500",
},


{
name:"Contacted",
key:"contacted",
color:"bg-blue-500",
},


{
name:"Conversation",
key:"conversation",
color:"bg-indigo-500",
},


{
name:"Discovery",
key:"discovery",
color:"bg-purple-500",
},


{
name:"Proposal",
key:"proposal",
color:"bg-yellow-500",
},


{
name:"Client",
key:"client",
color:"bg-green-500",
},


{
name:"Lost",
key:"lost",
color:"bg-red-500",
},


];





export default function RevenuePipeline(){


const {
opportunities,
pipelineValue,
} = useRevenue();





const activeDeals =
opportunities.filter(
item => item.status !== "lost"
).length;



return (

<div className="p-6 space-y-6">





<div>


<h1 className="text-3xl font-bold">

Revenue Pipeline

</h1>


<p className="text-gray-600">

Manage opportunities through the complete revenue lifecycle.

</p>


</div>






<div className="
grid grid-cols-1 md:grid-cols-3 gap-5
">





<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<DollarSign className="text-green-600"/>

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

<TrendingUp className="text-blue-600"/>

Stages

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

{stages.length}

</p>

</CardContent>

</Card>





</div>









<div className="
overflow-x-auto
pb-3
">


<div className="
grid grid-flow-col auto-cols-[280px] gap-4
">



{
stages.map(stage=>{


const stageDeals =
opportunities.filter(
item =>
item.status === stage.key
);



const stageValue =
stageDeals.reduce(
(sum,item)=>
sum + item.estimatedValue,
0
);




return (


<Card

key={stage.key}

className="
min-h-[300px]
"

>


<CardHeader>


<CardTitle className="
flex justify-between items-center text-sm
">


<span>

{stage.name}

</span>


<span

className={`
w-3 h-3 rounded-full
${stage.color}
`}

/>


</CardTitle>


</CardHeader>





<CardContent className="space-y-3">





<div className="text-center">


<p className="text-3xl font-bold">

{stageDeals.length}

</p>


<p className="text-xs text-gray-500">

Deals

</p>


</div>






<div className="
flex items-center gap-2
text-sm
text-green-600
">


<DollarSign className="w-4 h-4"/>


${stageValue.toLocaleString()}


</div>








{
stageDeals.slice(0,5).map(item=>(


<div

key={item.id}

className="
border rounded-lg p-3 bg-gray-50
hover:bg-gray-100 cursor-pointer
"

>


<p className="font-semibold text-sm">

{item.companyName}

</p>


<p className="text-xs text-gray-500">

${item.estimatedValue.toLocaleString()}

</p>


</div>


))

}








{
stageDeals.length === 0 && (

<p className="
text-xs text-gray-400 text-center
">

No deals

</p>

)

}




</CardContent>



</Card>



);


})

}


</div>


</div>









<Card>


<CardHeader>


<CardTitle className="flex items-center gap-2">


<Kanban className="w-5 h-5 text-purple-600"/>


Revenue Pipeline Intelligence


</CardTitle>


</CardHeader>




<CardContent>


<p className="text-gray-600">


Track deal movement, improve conversion velocity, and improve forecast accuracy.


</p>


</CardContent>


</Card>







</div>

);


}