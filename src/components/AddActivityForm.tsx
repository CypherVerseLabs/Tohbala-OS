import React from "react";

import {
useForm
} from "react-hook-form";


import {
Button
} from "@/components/ui/button";


import {
Input
} from "@/components/ui/input";


import {
Textarea
} from "@/components/ui/textarea";


import {
Label
} from "@/components/ui/label";


import {
Activity
} from "@/types/activity";



interface Props {

companyId:string;

onSubmit:(activity:Activity)=>void;

}



const AddActivityForm:React.FC<Props>=({
companyId,
onSubmit
})=>{


const {
register,
handleSubmit,
reset
}=useForm();



const submit=(data:any)=>{


onSubmit({

id:
Date.now().toString(),

companyId,

type:
"note",

title:
data.title,

description:
data.description,

createdAt:
new Date().toISOString()

});


reset();

};



return (

<form
className="space-y-3"
onSubmit={handleSubmit(submit)}
>


<Label>
Activity Title
</Label>


<Input
{...register("title")}
/>



<Label>
Details
</Label>


<Textarea
{...register("description")}
/>



<Button
type="submit"
>

Add Activity

</Button>


</form>

);

};


export default AddActivityForm;