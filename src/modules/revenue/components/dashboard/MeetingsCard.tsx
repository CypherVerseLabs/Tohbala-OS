import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  CalendarDays,
  CheckCircle,
} from "lucide-react";

import { Activity } from "@/types/activity";


interface MeetingsCardProps {

  activities: Activity[];

}



export default function MeetingsCard({
  activities,
}: MeetingsCardProps) {



const meetings = activities.filter((item)=>{


const type =
item.type?.toLowerCase() ?? "";


const title =
item.title?.toLowerCase() ?? "";



return (

type.includes("meeting") ||

type.includes("discovery") ||

type.includes("call") ||

title.includes("meeting") ||

title.includes("discovery") ||

title.includes("call")

);


});





return (

<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<CalendarDays className="w-5 h-5 text-blue-600"/>

Upcoming Meetings

</CardTitle>

</CardHeader>





<CardContent className="space-y-4">


{
meetings.length === 0 ? (

<p className="text-sm text-gray-500">

No scheduled meetings.

</p>

)

:

meetings.slice(0,5).map((item)=>(


<div

key={item.id}

className="border rounded-lg p-4"

>


<div className="flex justify-between">


<div className="flex-1">


<h3 className="font-semibold">

{item.title || "Untitled Meeting"}

</h3>


<p className="text-sm text-gray-500">

{item.description || "No details available"}

</p>


</div>


<CheckCircle

className="w-5 h-5 text-green-600"

/>


</div>





<p className="text-xs text-gray-400 mt-2">

{
item.createdAt

?

new Date(
item.createdAt
).toLocaleDateString()

:

"No date"

}

</p>


</div>


))


}



</CardContent>


</Card>


);

}