import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import {
  Button
} from "@/components/ui/button";

import {
  Plus,
  Search
} from "lucide-react";

import {
  Input
} from "@/components/ui/input";

import ActivityTimeline from "./ActivityTimeline";
import AddActivityForm from "./AddActivityForm";

import {
  Activity
} from "@/types/activity";



const ActivityManager:React.FC = () => {


const [
activities,
setActivities
]=useState<Activity[]>([

{
id:"1",

companyId:"1",

type:"meeting",

title:"Discovery Meeting",

description:
"Discussed customer communication problems and automation needs.",

createdAt:
new Date().toISOString()

},

{
id:"2",

companyId:"1",

type:"email",

title:"Follow up email sent",

description:
"Sent company information and scheduling options.",

createdAt:
new Date(
Date.now()-86400000
).toISOString()

}

]);



const [
search,
setSearch
]=useState("");



const [
selectedCompany,
setSelectedCompany
]=useState("all");



const addActivity=(activity:Activity)=>{

setActivities(prev=>[
activity,
...prev
]);

};



const filteredActivities =
activities.filter(activity=>{


const matchesSearch =
activity.title
.toLowerCase()
.includes(search.toLowerCase())

||

activity.description
.toLowerCase()
.includes(search.toLowerCase());



const matchesCompany =
selectedCompany==="all"
||
activity.companyId===selectedCompany;



return matchesSearch && matchesCompany;


});



return (

<div className="p-6 space-y-6">


<div className="flex justify-between items-center">


<div>

<h1 className="text-3xl font-bold">
Activities
</h1>


<p className="text-gray-600">
Track every company interaction.
</p>


</div>


</div>





<div className="grid lg:grid-cols-3 gap-6">


<div className="lg:col-span-2">


<Card>


<CardHeader>

<div className="flex items-center gap-3">


<Search
className="w-5 h-5 text-gray-400"
/>


<Input

placeholder="Search activities..."

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

/>


</div>

</CardHeader>



<CardContent>


<ActivityTimeline

activities={
filteredActivities
}

/>


</CardContent>


</Card>


</div>





<div>


<Card>


<CardHeader>

<h2 className="font-bold">
Add Activity
</h2>

</CardHeader>



<CardContent>


<AddActivityForm

companyId="1"

onSubmit={addActivity}

/>


</CardContent>


</Card>


</div>


</div>


</div>

);

};


export default ActivityManager;