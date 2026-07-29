import React, {
  useEffect,
} from "react";

import {
Dialog,
DialogContent,
DialogHeader,
DialogTitle,
} from "@/components/ui/dialog";

import {
Input
} from "@/components/ui/input";

import {
Textarea
} from "@/components/ui/textarea";

import {
Button
} from "@/components/ui/button";

import {
Label
} from "@/components/ui/label";


import {
useForm
} from "react-hook-form";

import {
Company
} from "@/config/company";





interface Props {

isOpen:boolean;

onClose:()=>void;

onSubmit:(data:Omit<Company,"id">)=>void;

initialData?:Company;

}




const CompanyForm:React.FC<Props>=({
isOpen,
onClose,
onSubmit,
initialData
})=>{



const {
register,
handleSubmit,
reset
}=useForm<Omit<Company,"id">>({
defaultValues:{
name:"",
website:"",
industry:"",
size:"1-10",
description:"",
location:"",
primaryContact:"",
email:"",
phone:"",
createdAt:"",
updatedAt:""
}
});






useEffect(()=>{


if(initialData){

reset({

name:
initialData.name,

website:
initialData.website || "",

industry:
initialData.industry || "",

size:
initialData.size || "1-10",

description:
initialData.description || "",

location:
initialData.location || "",

primaryContact:
initialData.primaryContact || "",

email:
initialData.email || "",

phone:
initialData.phone || "",


createdAt:
initialData.createdAt,


updatedAt:
new Date().toISOString()

});


}
else {


reset({

name:"",
website:"",
industry:"",
size:"1-10",
description:"",
location:"",
primaryContact:"",
email:"",
phone:"",

createdAt:
new Date().toISOString(),

updatedAt:
new Date().toISOString()

});


}


},[initialData,reset]);








const submit=(data:Omit<Company,"id">)=>{


onSubmit({

...data,

updatedAt:
new Date().toISOString()

});


reset();

onClose();


};








return (

<Dialog
open={isOpen}
onOpenChange={onClose}
>


<DialogContent>


<DialogHeader>

<DialogTitle>

{
initialData
?
"Update Company"
:
"New Company"
}

</DialogTitle>


</DialogHeader>





<form

className="space-y-4"

onSubmit={
handleSubmit(submit)
}

>



<div>

<Label>
Company Name
</Label>

<Input
{...register("name")}
placeholder="ABC Construction"
/>

</div>





<div>

<Label>
Industry
</Label>

<Input
{...register("industry")}
placeholder="Construction"
/>

</div>





<div>

<Label>
Website
</Label>

<Input
{...register("website")}
placeholder="company.com"
/>

</div>





<div>

<Label>
Description
</Label>

<Textarea

{...register("description")}

placeholder="Company overview"

/>

</div>





<div>

<Label>
Primary Contact
</Label>

<Input

{...register("primaryContact")}

/>

</div>





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







<div className="
flex
justify-end
gap-2
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
>

{
initialData
?
"Update Company"
:
"Create Company"
}

</Button>


</div>





</form>


</DialogContent>


</Dialog>


);


};



export default CompanyForm;