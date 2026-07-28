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


const Analytics:React.FC =()=>{


const pipelineData=[
{
stage:"Research",
count:42,
value:85000
},
{
stage:"Contacted",
count:18,
value:45000
},
{
stage:"Discovery",
count:7,
value:175000
},
{
stage:"Proposal",
count:3,
value:95000
},
{
stage:"Clients",
count:5,
value:125000
}
];


const technologyData=[
{
name:"AI Automation",
value:35,
color:"#14b8a6"
},
{
name:"CRM Systems",
value:25,
color:"#8b5cf6"
},
{
name:"Customer Portals",
value:20,
color:"#3b82f6"
},
{
name:"Mobile Apps",
value:12,
color:"#f59e0b"
},
{
name:"API Integration",
value:8,
color:"#ef4444"
}
];


const growthData=[
{
month:"Jan",
opportunities:12
},
{
month:"Feb",
opportunities:18
},
{
month:"Mar",
opportunities:25
},
{
month:"Apr",
opportunities:31
},
{
month:"May",
opportunities:38
},
{
month:"Jun",
opportunities:45
}
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



<div className="grid grid-cols-1 md:grid-cols-3 gap-6">


<Card>

<CardHeader>

<CardTitle>
Pipeline Value
</CardTitle>

</CardHeader>

<CardContent>

<p className="text-4xl font-bold text-green-600">
$525,000
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
75
</p>

<p className="text-sm text-gray-500">
Companies being evaluated
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
$18,500
</p>

<p className="text-sm text-gray-500">
Technology engagement size
</p>

</CardContent>

</Card>


</div>





<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


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

label={
({
name,
value
})=>`${name} ${value}%`
}

>


{
technologyData.map(
(item,index)=>(

<Cell
key={index}
fill={item.color}
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


<div className="grid grid-cols-1 md:grid-cols-5 gap-4">


{
pipelineData.map(
(stage)=>(

<div
key={stage.stage}
className="
border rounded-lg p-4 text-center
"
>

<p className="font-semibold">
{stage.stage}
</p>


<p className="text-3xl font-bold text-purple-600">
{stage.count}
</p>


<p className="text-green-600 font-bold">
${stage.value.toLocaleString()}
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