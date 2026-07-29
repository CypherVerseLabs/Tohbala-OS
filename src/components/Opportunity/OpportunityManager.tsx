import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Plus,
  Search,
  Filter,
} from "lucide-react";


import OpportunityCard from "./OpportunityCard";
import DiscoveryForm from "../DiscoveryForm";
import ActivityTimeline from "../Activity/ActivityTimeline";


import {
  Opportunity,
} from "@/types/opportunity";


import { useData } from "@/contexts/DataContext";



const OpportunityManager: React.FC = () => {


const {
  opportunities,
  activities,
  addOpportunity: saveOpportunity,
  updateOpportunity: saveUpdatedOpportunity,
  deleteOpportunity: removeOpportunity,
} = useData();





const [
isFormOpen,
setIsFormOpen
] = useState(false);





const [
editingOpportunity,
setEditingOpportunity
]
=
useState<Opportunity>();





const [
searchTerm,
setSearchTerm
]
=
useState("");





const [
statusFilter,
setStatusFilter
]
=
useState<
Opportunity["status"] | "all"
>("all");







const filteredOpportunities =
opportunities.filter(opportunity=>{


const search =
searchTerm.toLowerCase();




const matchesSearch =

opportunity.companyName
.toLowerCase()
.includes(search)

||

opportunity.contactName
.toLowerCase()
.includes(search)

||

opportunity.industry
.toLowerCase()
.includes(search);





const matchesStatus =

statusFilter === "all"

||

opportunity.status === statusFilter;





return (
matchesSearch &&
matchesStatus
);


});








const addOpportunity = (
data:Omit<Opportunity,"id">
)=>{


const newOpportunity:Opportunity = {

...data,

id:
Date.now().toString(),

createdAt:
new Date().toISOString(),

updatedAt:
new Date().toISOString(),

};



saveOpportunity(newOpportunity);


setIsFormOpen(false);


};









const editOpportunity = (
data:Omit<Opportunity,"id">
)=>{


if(!editingOpportunity)
return;




saveUpdatedOpportunity({

...editingOpportunity,

...data,

id:
editingOpportunity.id,

updatedAt:
new Date().toISOString(),

});



setEditingOpportunity(undefined);

setIsFormOpen(false);


};









const deleteOpportunity = (
id:string
)=>{


removeOpportunity(id);


};









const updateStatus = (

id:string,

status:Opportunity["status"]

)=>{


const opportunity =
opportunities.find(
item=>item.id===id
);





if(!opportunity)
return;





saveUpdatedOpportunity({

...opportunity,

status,

updatedAt:
new Date().toISOString(),

});


};







return (

<div className="p-6 space-y-6">



<div className="flex justify-between items-center">



<div>

<h1 className="text-3xl font-bold">
Opportunities
</h1>


<p className="text-gray-600">
Manage companies, problems, solutions, and deals.
</p>


</div>





<Button

onClick={()=>{

setEditingOpportunity(undefined);

setIsFormOpen(true);

}}

className="
bg-gradient-to-r
from-teal-500
to-purple-600
"

>

<Plus className="w-4 h-4 mr-2"/>

New Opportunity

</Button>



</div>









<div className="flex gap-4">



<div className="relative flex-1 max-w-sm">



<Search

className="
absolute left-3 top-1/2
-translate-y-1/2
text-gray-400
w-4 h-4
"

/>



<Input

placeholder="Search companies..."

className="pl-10"

value={searchTerm}

onChange={(e)=>
setSearchTerm(e.target.value)
}

/>



</div>








<Select

value={statusFilter}

onValueChange={(value)=>

setStatusFilter(
value as Opportunity["status"] | "all"
)

}

>


<SelectTrigger className="w-48">


<Filter className="w-4 h-4 mr-2"/>


<SelectValue/>


</SelectTrigger>





<SelectContent>


<SelectItem value="all">
All Stages
</SelectItem>


<SelectItem value="research">
Research
</SelectItem>


<SelectItem value="contacted">
Contacted
</SelectItem>


<SelectItem value="conversation">
Conversation
</SelectItem>


<SelectItem value="discovery">
Discovery
</SelectItem>


<SelectItem value="proposal">
Proposal
</SelectItem>


<SelectItem value="client">
Client
</SelectItem>


<SelectItem value="lost">
Lost
</SelectItem>


</SelectContent>


</Select>


</div>









<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
"
>



{
filteredOpportunities.length === 0

?

(

<div
className="
col-span-full
text-center
py-12
text-gray-500
"
>

<p className="text-lg font-medium">
No opportunities found
</p>


<p className="text-sm">
Create your first business opportunity.
</p>


</div>

)

:

filteredOpportunities.map(item=>(



<OpportunityCard


key={item.id}


opportunity={item}



onEdit={(item)=>{

setEditingOpportunity(item);

setIsFormOpen(true);

}}



onDelete={deleteOpportunity}



onStatusChange={updateStatus}


/>


))

}


</div>







<ActivityTimeline

activities={activities}

/>







<DiscoveryForm


isOpen={isFormOpen}



onClose={()=>{

setIsFormOpen(false);

setEditingOpportunity(undefined);

}}



onSubmit={

editingOpportunity

?

editOpportunity

:

addOpportunity

}



initialData={editingOpportunity}


/>





</div>

);

};


export default OpportunityManager;