import React, {
  useState
} from "react";

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


import {
  Company
} from "@/config/company";




interface Props {

  companies: Company[];

  onSubmit:(activity:Activity)=>void;

}




const AddActivityForm:React.FC<Props> = ({
  companies,
  onSubmit
}) => {


const {
register,
handleSubmit,
reset
}=useForm();



const [
companyId,
setCompanyId
]=useState("");





const submit=(data:any)=>{


onSubmit({

id:
crypto.randomUUID(),

companyId,

opportunityId:"",

type:"note",

title:
data.title,

description:
data.description,

createdAt:
new Date().toISOString()

});


reset();

setCompanyId("");

};





return (

<form

className="space-y-3"

onSubmit={
handleSubmit(submit)
}

>


<Label>
Company
</Label>


<select

className="
w-full border rounded-md p-2
"

value={companyId}

onChange={(e)=>
setCompanyId(e.target.value)
}

>


<option value="">
Select Company
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

disabled={!companyId}

>

Add Activity

</Button>


</form>

);

};


export default AddActivityForm;