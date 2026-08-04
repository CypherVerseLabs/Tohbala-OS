import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Brain,
  AlertTriangle,
  Target,
  TrendingUp,
  CheckCircle,
  Zap,
} from "lucide-react";

import { useRevenue } from "../hooks/useRevenue";



export default function RevenueAI(){


const {

insights,
opportunities,
pipelineValue,
proposalCount,
discoveryCount,

} = useRevenue();






const proposalRisks = opportunities.filter(
item =>
item.status === "proposal"
);




const discoveryOpportunities = opportunities.filter(
item =>
item.status === "discovery"
);






const aiScore = Math.min(
100,
60 +
(opportunities.length * 3) +
(proposalCount * 5)
);






const recommendations = [

proposalCount > 0
?
`Prioritize ${proposalCount} proposal follow-up(s) to increase conversion.`
:
"No proposals currently require attention.",


discoveryCount > 0
?
`${discoveryCount} discovery opportunity(s) should be moved toward qualification.`
:
"No active discovery conversations detected.",


`Pipeline intelligence shows $${pipelineValue.toLocaleString()} in potential revenue.`


];






return (

<div className="p-6 space-y-6">





<div>


<h1 className="text-3xl font-bold">

AI Revenue Advisor

</h1>


<p className="text-gray-600">

Revenue intelligence engine for growth decisions and deal acceleration.

</p>


</div>








<div className="
grid grid-cols-1 md:grid-cols-3 gap-6
">





<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Brain className="w-5 h-5 text-purple-600"/>

AI Revenue Score

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-4xl font-bold">

{aiScore}%

</p>


<p className="text-sm text-gray-500">

Pipeline readiness score

</p>

</CardContent>


</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Target className="w-5 h-5 text-blue-600"/>

Deal Attention

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-4xl font-bold">

{proposalRisks.length}

</p>


<p className="text-sm text-gray-500">

Proposal follow-ups required

</p>


</CardContent>


</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<TrendingUp className="w-5 h-5 text-green-600"/>

Pipeline Health

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-4xl font-bold">

${pipelineValue.toLocaleString()}

</p>


<p className="text-sm text-gray-500">

Revenue opportunity value

</p>


</CardContent>


</Card>






</div>









<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Zap className="w-5 h-5 text-yellow-600"/>

AI Recommendations

</CardTitle>

</CardHeader>



<CardContent className="space-y-4">


{
recommendations.map(
(item,index)=>(


<div

key={index}

className="
flex gap-3 items-start
border rounded-lg p-4
"


>


<CheckCircle

className="
w-5 h-5 text-green-600 mt-1
"

/>


<p>

{item}

</p>


</div>


)

)

}


</CardContent>


</Card>









<Card>


<CardHeader>


<CardTitle className="flex items-center gap-2">


<AlertTriangle className="w-5 h-5 text-yellow-600"/>


Deal Intelligence Alerts


</CardTitle>


</CardHeader>




<CardContent className="space-y-3">



{
proposalRisks.length === 0 ?


<p className="text-gray-500">

No proposal risks detected.

</p>


:


proposalRisks.map(item=>(


<div

key={item.id}

className="
border rounded-lg p-4
"


>


<div className="flex justify-between">


<div>

<h3 className="font-bold">

{item.companyName}

</h3>


<p className="text-sm text-gray-500">

Proposal waiting for decision.

</p>


</div>



<span className="
text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full
">

Attention

</span>


</div>


</div>


))


}




</CardContent>


</Card>









<Card>


<CardHeader>

<CardTitle>

Revenue Intelligence Feed

</CardTitle>

</CardHeader>


<CardContent className="space-y-3">


{
insights.length === 0 ?

<p className="text-gray-500">

No intelligence available.

</p>


:


insights.map(
(item,index)=>(


<div

key={index}

className="
border-l-4 border-purple-500 pl-4
"

>

{item}

</div>


)

)

}


</CardContent>


</Card>







<Card>


<CardHeader>

<CardTitle>

Discovery Growth Signals

</CardTitle>

</CardHeader>


<CardContent>


<p className="text-gray-600">

{discoveryOpportunities.length}

active discovery opportunities are currently being evaluated.

</p>


</CardContent>


</Card>







</div>

);


}