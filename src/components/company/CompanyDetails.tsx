import React from "react";

import {
  Building2,
  Globe,
  Mail,
  Phone,
  Briefcase,
  DollarSign,
  Calendar,
  FileText,
} from "lucide-react";


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";


import { Company } from "@/config/company";

import ActivityTimeline from "../Activity/ActivityTimeline";

import { Plus } from "lucide-react";
import DiscoveryForm from "../DiscoveryForm";
import { useState } from "react";
import { useData } from "@/contexts/DataContext";


interface Props {

  company: Company;

  onBack?: () => void;

}



const CompanyDetails: React.FC<Props> = ({
  company,
  onBack,
}) => {

const {
  addOpportunity,
} = useData();


const [openOpportunityForm,setOpenOpportunityForm]
=
useState(false);

const {
  opportunities: allOpportunities,
  activities: allActivities,
} = useData();




const opportunities =
allOpportunities.filter(
  opportunity =>
  opportunity.companyId === company.id
);




const activities =
allActivities.filter(
  activity =>
  activity.companyId === company.id
);





const totalValue =
opportunities.reduce(
  (sum, opportunity)=>
  sum + opportunity.estimatedValue,
  0
);





const lastActivity =
activities
.sort(
(a,b)=>
new Date(b.createdAt).getTime()
-
new Date(a.createdAt).getTime()
)[0];





return (

<div className="p-6 space-y-6">



{/* Header */}


<div className="flex justify-between items-start">


<div>


<div className="flex items-center gap-3">


<Building2
className="w-8 h-8 text-teal-600"
/>


<div>


<h1 className="text-3xl font-bold">

{company.name}

</h1>


<p className="text-gray-500">

{company.industry}

</p>


</div>


</div>


</div>





<div className="flex gap-2">


<Button

onClick={()=>setOpenOpportunityForm(true)}

className="
bg-gradient-to-r
from-teal-500
to-purple-600
"

>

<Plus className="w-4 h-4 mr-2"/>

New Opportunity

</Button>



{onBack && (

<Button
variant="outline"
onClick={onBack}
>

Back

</Button>

)}


</div>



</div>









{/* Stats */}



<div className="grid md:grid-cols-4 gap-4">



<Card>

<CardContent className="pt-6">


<div className="flex items-center gap-3">


<Briefcase
className="text-teal-600"
/>


<div>


<p className="text-sm text-gray-500">

Opportunities

</p>


<h2 className="text-2xl font-bold">

{opportunities.length}

</h2>


</div>


</div>


</CardContent>

</Card>







<Card>

<CardContent className="pt-6">


<div className="flex items-center gap-3">


<DollarSign
className="text-green-600"
/>


<div>


<p className="text-sm text-gray-500">

Pipeline Value

</p>


<h2 className="text-2xl font-bold">

${totalValue.toLocaleString()}

</h2>


</div>


</div>


</CardContent>

</Card>








<Card>

<CardContent className="pt-6">


<div className="flex items-center gap-3">


<Calendar
className="text-orange-500"
/>


<div>


<p className="text-sm text-gray-500">

Activities

</p>


<h2 className="text-2xl font-bold">

{activities.length}

</h2>


</div>


</div>


</CardContent>

</Card>








<Card>

<CardContent className="pt-6">


<div className="flex items-center gap-3">


<FileText
className="text-purple-600"
/>


<div>


<p className="text-sm text-gray-500">

Last Activity

</p>



<Badge>

{
lastActivity
?
lastActivity.type
:
"No activity"
}

</Badge>


</div>


</div>


</CardContent>

</Card>





</div>









{/* Company Information */}



<Card>


<CardHeader>


<CardTitle>

Company Information

</CardTitle>


</CardHeader>





<CardContent className="space-y-4">


<div className="grid md:grid-cols-2 gap-6">



<div className="space-y-3">



<div className="flex items-center gap-2">


<Globe
className="w-4 h-4 text-gray-500"
/>


<span>

{
company.website ||
"No website"
}

</span>


</div>







<div className="flex items-center gap-2">


<Mail
className="w-4 h-4 text-gray-500"
/>


<span>

{
company.email ||
"No email"
}

</span>


</div>







<div className="flex items-center gap-2">


<Phone
className="w-4 h-4 text-gray-500"
/>


<span>

{
company.phone ||
"No phone"
}

</span>


</div>



</div>







<div>


<h3 className="font-semibold mb-2">

Business Summary

</h3>



<p className="text-gray-600">

{
company.description ||
"No company description."
}

</p>


</div>



</div>


</CardContent>


</Card>









{/* Opportunities */}



<Card>


<CardHeader>


<CardTitle>

Opportunities

</CardTitle>


</CardHeader>




<CardContent>



{
opportunities.length === 0

?

(

<p className="text-gray-500">

No opportunities.

</p>

)

:

(


<div className="space-y-4">


{
opportunities.map(item=>(


<div

key={item.id}

className="
border
rounded-lg
p-4
hover:bg-gray-50
transition
"

>



<div className="flex justify-between">



<div>


<h3 className="font-semibold">

{item.companyName}

</h3>



<p className="text-sm text-gray-600 mt-1">

{item.proposedSolution}

</p>



</div>







<div className="text-right">



<Badge>

{item.status}

</Badge>



<p className="mt-2 font-bold text-green-600">

${item.estimatedValue.toLocaleString()}

</p>



</div>



</div>



</div>



))

}


</div>


)

}


</CardContent>


</Card>









{/* Timeline */}



<ActivityTimeline

activities={activities}

/>


<DiscoveryForm

isOpen={openOpportunityForm}


onClose={()=>setOpenOpportunityForm(false)}


onSubmit={(data)=>{


const opportunity={

...data,

id:
Date.now().toString(),

companyId:
company.id,

companyName:
company.name,

createdAt:
new Date().toISOString(),

updatedAt:
new Date().toISOString()

};


addOpportunity(opportunity);


setOpenOpportunityForm(false);


}}


initialData={{

id:"",

companyName:
company.name,

companyId:
company.id,

contactName:
company.primaryContact || "",

email:
company.email || "",

phone:
company.phone || "",

website:
company.website || "",

industry:
company.industry,

companySize:
company.size || "",

businessProblem:"",

proposedSolution:"",

technologyNeeds:[],

status:"research",

estimatedValue:0,

source:"Referral",

lastContact:"",

nextFollowUp:"",

notes:"",

createdAt:
new Date().toISOString(),

updatedAt:
new Date().toISOString()

}}

/>


</div>

);

};



export default CompanyDetails;