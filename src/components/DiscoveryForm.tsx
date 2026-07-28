import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import {
  X
} from "lucide-react";


import {
  Opportunity,
  TechnologyNeed,
} from "@/types/opportunity";


import {
  pipelineStages,
} from "@/config/pipeline";




interface DiscoveryFormProps {

  isOpen:boolean;

  onClose:()=>void;

  onSubmit:
  (
    data:Omit<Opportunity,"id">
  )=>void;

  initialData?: Partial<Opportunity>;

}





const technologyOptions:TechnologyNeed[]=[

  "AI Automation",
  "CRM",
  "Customer Portal",
  "Mobile App",
  "API Integration",
  "Workflow Automation",
  "Data Dashboard",
  "Custom Software",

];





const emptyForm:Omit<Opportunity,"id">={
    contactName: "",
    email: "",
    phone: "",

    companyName: "",
    website: "",
    industry: "",
    companySize: "",

    businessProblem: "",
    proposedSolution: "",

    technologyNeeds: [],

    status: "research",

    estimatedValue: 0,

    source: "Cold Outreach",

    lastContact: new Date()
        .toISOString()
        .split("T")[0],

    nextFollowUp: "",

    notes: "",

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString(),
    companyId: ""
};







const DiscoveryForm:React.FC<DiscoveryFormProps>=
({
 isOpen,
 onClose,
 onSubmit,
 initialData
})=>{



const {
 register,
 handleSubmit,
 reset,
 setValue,
 watch
}=useForm<Omit<Opportunity,"id">>({
 defaultValues:emptyForm
});



const technologyNeeds =
watch("technologyNeeds");



const status =
watch("status");





useEffect(()=>{

 if(initialData){

  reset(initialData);

 }
 else{

  reset(emptyForm);

 }

},[
initialData,
reset,
isOpen
]);







const addTechnology=(value:string)=>{


const tech =
value as TechnologyNeed;



if(!technologyNeeds.includes(tech)){


setValue(
"technologyNeeds",
[
...technologyNeeds,
tech
]

);


}



};






const removeTechnology=(tech:TechnologyNeed)=>{


setValue(

"technologyNeeds",

technologyNeeds.filter(
(item)=>item!==tech
)

);


};







const submit=(data:Omit<Opportunity,"id">)=>{


onSubmit({

...data,

updatedAt:
new Date().toISOString()

});


reset(emptyForm);

onClose();


};








return (

<Dialog
open={isOpen}
onOpenChange={onClose}
>


<DialogContent
className="
max-w-2xl
max-h-[90vh]
overflow-y-auto
"
>


<DialogHeader>

<DialogTitle>

{
initialData
?
"Update Opportunity"
:
"New Business Discovery"
}

</DialogTitle>


</DialogHeader>





<form
onSubmit={
handleSubmit(submit)
}
className="space-y-5"
>





<div className="grid grid-cols-2 gap-4">


<div>

<Label>
Company Name
</Label>

<Input
{...register("companyName")}
/>

</div>



<div>

<Label>
Industry
</Label>

<Input
{...register("industry")}
/>

</div>


</div>





<div className="grid grid-cols-2 gap-4">


<div>

<Label>
Contact Person
</Label>

<Input
{...register("contactName")}
/>

</div>



<div>

<Label>
Company Size
</Label>

<Input
placeholder="25 employees"
{...register("companySize")}
/>

</div>


</div>





<Label>
Website
</Label>

<Input
placeholder="company.com"
{...register("website")}
/>






<div className="grid grid-cols-2 gap-4">


<div>

<Label>
Email
</Label>

<Input
{...register("email")}
/>

</div>



<div>

<Label>
Phone
</Label>

<Input
{...register("phone")}
/>

</div>


</div>








<Label>
Business Problem
</Label>

<Textarea
{...register("businessProblem")}
placeholder="What problem is this company trying to solve?"
/>





<Label>
Proposed Solution
</Label>

<Textarea
{...register("proposedSolution")}
placeholder="What system or technology solves this?"
/>








<Label>
Technology Needs
</Label>


<Select
onValueChange={addTechnology}
>


<SelectTrigger>

<SelectValue placeholder="Add technology"/>

</SelectTrigger>


<SelectContent>

{
technologyOptions.map((tech)=>(

<SelectItem
key={tech}
value={tech}
>

{tech}

</SelectItem>

))
}

</SelectContent>


</Select>





<div className="flex flex-wrap gap-2">


{
technologyNeeds.map((tech)=>(

<Badge
key={tech}
variant="outline"
className="flex gap-1 items-center"
>

{tech}


<button
type="button"
onClick={()=>
removeTechnology(tech)
}
>

<X
className="w-3 h-3"
/>

</button>


</Badge>

))
}


</div>







<Label>
Estimated Opportunity Value
</Label>


<Input
type="number"
{...register(
"estimatedValue",
{
valueAsNumber:true
}
)}
/>







<Label>
Pipeline Stage
</Label>


<Select

value={status}

onValueChange={(value)=>

setValue(
"status",
value as Opportunity["status"]
)

}

>


<SelectTrigger>

<SelectValue/>

</SelectTrigger>


<SelectContent>

{
pipelineStages.map((stage)=>(

<SelectItem
key={stage.id}
value={stage.id}
>

{stage.label}

</SelectItem>

))
}

</SelectContent>


</Select>








<Label>
Notes
</Label>


<Textarea

placeholder="
Discovery notes, conversations, next steps...
"

{...register("notes")}

/>






<div className="
flex
justify-end
gap-2
pt-4
">


<Button
type="button"
variant="outline"
onClick={onClose}
>

Cancel

</Button>




<Button
type="submit"
className="
bg-gradient-to-r
from-teal-500
to-purple-600
"
>

Save Opportunity

</Button>


</div>





</form>


</DialogContent>


</Dialog>

);


};



export default DiscoveryForm;