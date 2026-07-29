import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { useData } from "@/contexts/DataContext";



const Analytics: React.FC = () => {


  const {
    opportunities,
    companies,
    activities,
  } = useData();



  const totalPipeline =
    opportunities.reduce(
      (sum, item) =>
        sum + (item.estimatedValue || 0),
      0
    );



  const averageDeal =
    opportunities.length > 0
      ? totalPipeline / opportunities.length
      : 0;



  const pipelineStages = [
    "research",
    "contacted",
    "conversation",
    "discovery",
    "proposal",
    "client",
    "lost",
  ];



  const pipelineData = pipelineStages.map(stage => {


    const items =
      opportunities.filter(
        item => item.status === stage
      );


    return {

      stage:
        stage.charAt(0).toUpperCase() +
        stage.slice(1),


      count: items.length,


      value: items.reduce(
        (sum,item)=>
          sum + (item.estimatedValue || 0),
        0
      ),

    };

  });




  const technologyMap: Record<string, number> = {};



  opportunities.forEach(item => {


    item.technologyNeeds?.forEach(
      tech => {

        technologyMap[tech] =
          (technologyMap[tech] || 0) + 1;

      }
    );


  });



  const technologyData =
    Object.entries(technologyMap)
    .map(([name,value])=>({

      name,
      value

    }));




  const colors = [
    "#14b8a6",
    "#8b5cf6",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
  ];




  const growthData = [

    {
      month:"Current",
      opportunities: opportunities.length
    },

    {
      month:"Companies",
      opportunities: companies.length
    },

    {
      month:"Activities",
      opportunities: activities.length
    },

  ];





return (

<div className="p-6 space-y-6">



<div>

<h1 className="text-3xl font-bold">
Business Intelligence
</h1>


<p className="text-gray-600">

Track opportunities, technology demand, and revenue potential.

</p>


</div>





<div className="
grid grid-cols-1 md:grid-cols-3 gap-6
">



<Card>

<CardHeader>

<CardTitle>
Pipeline Value
</CardTitle>

</CardHeader>


<CardContent>

<p className="text-4xl font-bold text-green-600">

${totalPipeline.toLocaleString("en-US")}

</p>


<p className="text-sm text-gray-500">

Potential project revenue

</p>


</CardContent>


</Card>





<Card>

<CardHeader>

<CardTitle>
Active Opportunities
</CardTitle>

</CardHeader>


<CardContent>

<p className="text-4xl font-bold text-purple-600">

{opportunities.length}

</p>


<p className="text-sm text-gray-500">

Tracked opportunities

</p>


</CardContent>


</Card>





<Card>

<CardHeader>

<CardTitle>
Average Deal
</CardTitle>

</CardHeader>


<CardContent>

<p className="text-4xl font-bold text-teal-600">

${averageDeal.toLocaleString("en-US")}

</p>


<p className="text-sm text-gray-500">

Average opportunity value

</p>


</CardContent>


</Card>



</div>








<div className="
grid grid-cols-1 lg:grid-cols-2 gap-6
">





<Card>

<CardHeader>

<CardTitle>
Opportunity Growth
</CardTitle>

</CardHeader>


<CardContent>


<ResponsiveContainer
width="100%"
height={300}
>


<BarChart data={growthData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="opportunities"
fill="#14b8a6"
/>


</BarChart>


</ResponsiveContainer>


</CardContent>


</Card>








<Card>

<CardHeader>

<CardTitle>
Technology Demand
</CardTitle>

</CardHeader>


<CardContent>


<ResponsiveContainer
width="100%"
height={300}
>


<PieChart>


<Pie

data={technologyData}

dataKey="value"

cx="50%"

cy="50%"

outerRadius={100}

label

>


{
technologyData.map(
(item,index)=>(

<Cell

key={index}

fill={
colors[index % colors.length]
}

/>

))
}


</Pie>


<Tooltip/>


</PieChart>


</ResponsiveContainer>


</CardContent>


</Card>






</div>







<Card>

<CardHeader>

<CardTitle>
Pipeline Overview
</CardTitle>

</CardHeader>


<CardContent>


<div className="
grid grid-cols-1 md:grid-cols-5 gap-4
">


{
pipelineData.map(stage=>(


<div

key={stage.stage}

className="
border rounded-lg p-4 text-center
"

>


<p className="font-semibold">

{stage.stage}

</p>


<p className="
text-3xl font-bold text-purple-600
">

{stage.count}

</p>


<p className="
text-green-600 font-bold
">

${stage.value.toLocaleString("en-US")}

</p>


<p className="text-xs text-gray-500">

potential value

</p>


</div>


))

}


</div>


</CardContent>


</Card>





</div>

);

};


export default Analytics;