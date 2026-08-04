import React, { useState } from "react";

import {
  Building2,
  Target,
  ChevronDown,
  X,
} from "lucide-react";

import {
  Button
} from "@/components/ui/button";

import {
  Input
} from "@/components/ui/input";

import {
  useData
} from "@/contexts/DataContext";



export default function RevenueQuickActions(){


const {
addCompany,
addOpportunity,
companies
}=useData();



const [open,setOpen]=useState(false);

const [accountOpen,setAccountOpen]=useState(false);

const [opportunityOpen,setOpportunityOpen]=useState(false);



const [companyName,setCompanyName]=useState("");

const [selectedCompany,setSelectedCompany]=useState("");

const [opportunityValue,setOpportunityValue]=useState("");





const resetAccount = ()=>{

setCompanyName("");

setAccountOpen(false);

};



const resetOpportunity = ()=>{

setSelectedCompany("");

setOpportunityValue("");

setOpportunityOpen(false);

};





return (

<div className="relative">



<Button

variant="outline"

className="gap-2"

onClick={()=>setOpen(!open)}

>

Actions

<ChevronDown className="w-4 h-4"/>

</Button>






{
open && (

<div
className="
absolute
top-12
left-0
bg-white
border
rounded-lg
shadow-lg
p-2
w-56
z-40
space-y-1
"
>


<Button

variant="ghost"

className="
w-full
justify-start
gap-2
"

onClick={()=>{

setAccountOpen(true);

setOpen(false);

}}

>

<Building2 className="w-4 h-4"/>

New Account

</Button>





<Button

variant="ghost"

className="
w-full
justify-start
gap-2
"

onClick={()=>{

setOpportunityOpen(true);

setOpen(false);

}}

>

<Target className="w-4 h-4"/>

New Opportunity

</Button>





</div>

)

}








{
accountOpen && (

<div
className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
"
>


<div
className="
bg-white
rounded-xl
p-6
w-96
space-y-4
"
>


<div className="flex justify-between items-center">


<h2 className="text-xl font-bold">

Create Account

</h2>



<Button

variant="ghost"

size="sm"

onClick={resetAccount}

>

<X className="w-4 h-4"/>

</Button>


</div>





<Input

placeholder="Company name"

value={companyName}

onChange={
e=>setCompanyName(e.target.value)
}

/>






<Button

className="w-full"

disabled={!companyName.trim()}

onClick={async()=>{


await addCompany({

id:crypto.randomUUID(),

name:companyName.trim(),

industry:"Consulting",

createdAt:new Date().toISOString(),

updatedAt:new Date().toISOString(),

});



resetAccount();


}}

>

Create Account

</Button>






<Button

variant="outline"

className="w-full"

onClick={resetAccount}

>

Cancel

</Button>





</div>


</div>

)

}









{
opportunityOpen && (

<div
className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
"
>


<div
className="
bg-white
rounded-xl
p-6
w-96
space-y-4
"
>


<div className="flex justify-between items-center">


<h2 className="text-xl font-bold">

Create Opportunity

</h2>



<Button

variant="ghost"

size="sm"

onClick={resetOpportunity}

>

<X className="w-4 h-4"/>

</Button>


</div>







<select

className="
w-full
border
rounded-md
p-2
"

value={selectedCompany}

onChange={
e=>setSelectedCompany(e.target.value)
}

>


<option value="">

Select company

</option>



{
companies.map(company=>(

<option

key={company.id}

value={company.id}

>

{company.name}

</option>


))

}


</select>







<Input

type="number"

placeholder="Estimated value"

value={opportunityValue}

onChange={
e=>setOpportunityValue(e.target.value)
}

/>







<Button

className="w-full"

disabled={
!selectedCompany ||
Number(opportunityValue)<=0
}

onClick={async()=>{


const company =
companies.find(
item=>item.id===selectedCompany
);



if(!company)
return;





await addOpportunity({

id:crypto.randomUUID(),

companyId:company.id,

companyName:company.name,

industry:company.industry,

estimatedValue:Number(opportunityValue),

status:"research",

businessProblem:"New revenue opportunity",

createdAt:new Date().toISOString(),

updatedAt:new Date().toISOString(),

contactName:"",

email:"",

phone:"",

website:"",

companySize:"",

proposedSolution:"",

technologyNeeds:[],

source:"Cold Outreach",

lastContact:"",

nextFollowUp:"",

notes:""

});



resetOpportunity();


}}

>

Create Opportunity

</Button>







<Button

variant="outline"

className="w-full"

onClick={resetOpportunity}

>

Cancel

</Button>





</div>


</div>

)

}





</div>

);

}