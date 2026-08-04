import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Activity } from "lucide-react";

import { Activity as ActivityType } from "@/types/activity";


interface ActivityCardProps {

  activities: ActivityType[];

}



export default function ActivityCard({

  activities,

}: ActivityCardProps) {


return (

<Card>


<CardHeader>


<CardTitle className="flex items-center gap-2">

<Activity className="w-5 h-5 text-blue-600"/>

Recent Activity

</CardTitle>


</CardHeader>



<CardContent className="space-y-4">


{
activities.length === 0 ? (

<p className="text-sm text-gray-500">

No recent activity.

</p>

) : (


activities.map(item=>(


<div

key={item.id}

className="border rounded-lg p-3"

>


<div className="flex justify-between">


<h3 className="font-semibold">

{item.title}

</h3>


<span className="text-xs text-gray-500">

{new Date(
item.createdAt
).toLocaleDateString()}

</span>


</div>



<p className="text-sm text-gray-600 mt-1">

{item.description}

</p>


</div>


))


)

}



</CardContent>


</Card>

);

}