import React, {
  useState,
  useEffect,
} from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Target,
  DollarSign,
  Users,
  Brain,
  ArrowUpRight,
  Building2,
  CalendarDays,
} from "lucide-react";

import { useData } from "@/contexts/DataContext";


const Dashboard: React.FC = () => {


const {
  companies,
  opportunities,
  activities,
} = useData();

const pipelineStages = [
  "research",
  "contacted",
  "conversation",
  "discovery",
  "proposal",
  "client",
  "lost",
];



const activeOpportunities = opportunities.filter(
  item => item.status !== "lost"
).length;

const clients = opportunities.filter(
  item => item.status === "client"
).length;


const totalPipeline =
opportunities.reduce(
(sum,item)=>
sum + item.estimatedValue,
0
);

const discoveryCalls =
activities.filter(
item =>
item.title
.toLowerCase()
.includes("discovery")
).length;

const stats = [
  {
    title: "Active Opportunities",
    value: activeOpportunities.toString(),
    change: "Live pipeline",
    icon: Target,
    color: "text-purple-600",
  },
  {
    title: "Pipeline Value",
    value: `$${totalPipeline.toLocaleString("en-US")}`,
    change: "Current opportunities",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Discovery Calls",
    value: discoveryCalls.toString(),
    change: "Tracked activities",
    icon: CalendarDays,
    color: "text-blue-600",
  },
  {
    title: "Active Clients",
    value: clients.toString(),
    change: "Closed deals",
    icon: Users,
    color: "text-teal-600",
  },
];


const pipeline = pipelineStages.map(stage => {
  const stageOpps = opportunities.filter(
    item => item.status === stage
  );

  const value = stageOpps.reduce(
    (sum, item) => sum + item.estimatedValue,
    0
  );

  return {
    stage,
    count: stageOpps.length,
    value: `$${value.toLocaleString()}`,
  };
});


const recentOpportunities =
opportunities.slice(0,3);


const [aiInsights, setAiInsights] = useState<string[]>([]);
const [loadingAI, setLoadingAI] = useState(false);

useEffect(() => {
  setLoadingAI(true);

  setTimeout(() => {
    setAiInsights([
      `${companies.length} companies being tracked.`,
      `${opportunities.filter(o => o.status === "proposal").length} proposals need follow-up.`,
      `${opportunities.filter(o => o.status === "research").length} new prospects awaiting outreach.`,
      `Current pipeline value is $${totalPipeline.toLocaleString()}.`,
    ]);

    setLoadingAI(false);
  }, 500);
}, [companies, opportunities, totalPipeline]);



return (

<div className="p-6 space-y-6">


<div>


<h1 className="text-3xl font-bold text-gray-900">

Tohbala Command Center

</h1>


<p className="text-gray-600">

Your business operating system for opportunities, technology, and growth.

</p>


</div>



<div className="
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
">


{
stats.map(stat=>(


<Card key={stat.title}>


<CardHeader
className="
flex flex-row items-center justify-between pb-2
"
>


<CardTitle className="text-sm">

{stat.title}

</CardTitle>


<stat.icon
className={`w-5 h-5 ${stat.color}`}
/>


</CardHeader>


<CardContent>


<div className="text-3xl font-bold">

{stat.value}

</div>


<p className="text-xs text-green-600 flex items-center gap-1">


<ArrowUpRight className="w-3 h-3"/>


{stat.change}


</p>


</CardContent>


</Card>


))

}



</div>



<Card>


<CardHeader>

<CardTitle>

Opportunity Pipeline

</CardTitle>

</CardHeader>


<CardContent>


<div className="
grid grid-cols-1 md:grid-cols-5 gap-4
">


{
pipeline.map(item=>(


<div
key={item.stage}
className="
border rounded-lg p-4
"
>


<h3 className="font-semibold capitalize">

{item.stage}

</h3>


<p className="text-3xl font-bold mt-3">

{item.count}

</p>


<p className="text-sm text-gray-500">

opportunities

</p>


<p className="font-bold text-green-600 mt-2">

{item.value}

</p>


</div>


))

}



</div>


</CardContent>


</Card>



<div className="
grid grid-cols-1 lg:grid-cols-3 gap-6
">


<Card className="lg:col-span-2">


<CardHeader>

<CardTitle>

Priority Opportunities

</CardTitle>

</CardHeader>



<CardContent className="space-y-4">


{
recentOpportunities.length === 0

?

<p className="text-gray-500">

No opportunities yet.

</p>

:

recentOpportunities.map(item=>(


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

{item.industry}

</p>


</div>


<div className="text-right">


<p className="font-bold text-green-600">

${item.estimatedValue.toLocaleString()}

</p>


<span className="
text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full
">

{item.status}

</span>


</div>


</div>


<p className="text-sm mt-3">

{item.businessProblem}

</p>


</div>


))


}



</CardContent>


</Card>


<Card>


<CardHeader>


<CardTitle className="flex items-center gap-2">


<Brain className="w-5 h-5 text-purple-600"/>


AI Intelligence


</CardTitle>


</CardHeader>


<CardContent>


<div className="space-y-4">


{
loadingAI ? (
  <p className="text-sm text-gray-500">
    AI is analyzing your business...
  </p>
) : (
  aiInsights.map(item => (
    <div
      key={item}
      className="flex gap-3 items-start"
    >
      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
      <p className="text-sm">{item}</p>
    </div>
  ))
)

}


</div>


</CardContent>


</Card>


</div>


<Card>


<CardHeader>

<CardTitle>

Business Overview

</CardTitle>

</CardHeader>


<CardContent>


<div className="
grid grid-cols-1 md:grid-cols-3 gap-6
">


<div className="flex gap-3">


<Building2
className="text-teal-600"
/>


<div>


<p className="text-sm text-gray-500">

Companies Tracked

</p>


<p className="text-2xl font-bold">

{companies.length}

</p>


</div>


</div>


<div className="flex gap-3">


<Target
className="text-purple-600"
/>


<div>


<p className="text-sm text-gray-500">

Solutions Identified

</p>


<p className="text-2xl font-bold">

{opportunities.length}

</p>


</div>


</div>



<div className="flex gap-3">


<DollarSign
className="text-green-600"
/>


<div>


<p className="text-sm text-gray-500">

Projected Revenue

</p>


<p className="text-2xl font-bold">

${totalPipeline.toLocaleString()}

</p>


</div>


</div>


</div>

</CardContent>

</Card>


</div>

);

};


export default Dashboard;