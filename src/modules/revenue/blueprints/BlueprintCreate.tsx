// src/modules/revenue/blueprints/BlueprintCreate.tsx

import React, {
  useState
} from "react";

import {
  useNavigate,
  useSearchParams
} from "react-router-dom";

import {
  ArrowLeft,
  Save
} from "lucide-react";

import {
  useBlueprintContext
} from "@/contexts/BlueprintContext";

import {
  Blueprint
} from "@/types/blueprint";




export default function BlueprintCreate(){


const navigate = useNavigate();


const [
searchParams
] = useSearchParams();



const companyId =
searchParams.get("companyId") ?? "";


const opportunityId =
searchParams.get("opportunityId") ?? null;




const {
addBlueprint
} = useBlueprintContext();





const [
loading,
setLoading
] = useState(false);



const [
error,
setError
] = useState<string|null>(null);






const [
form,
setForm
] = useState<Blueprint>({


id:"",


companyId,


opportunityId,


title:"",


technologyScore:0,


currentSystems:{},


businessChallenges:{},


automationOpportunities:{},


aiOpportunities:{},


recommendations:{},


roadmap30Days:{},


roadmap90Days:{},


roadmap12Months:{},


status:"DRAFT",


ownerId:"",


createdAt:"",


updatedAt:""


});








const updateField = (
key:keyof Blueprint,
value:any
)=>{


setForm(prev=>({

...prev,

[key]:value

}));

};









const handleSubmit = async(
e:React.FormEvent
)=>{


e.preventDefault();



if(!form.title.trim()){


setError(
"Blueprint title is required"
);


return;

}




try{


setLoading(true);

setError(null);



const now =
new Date().toISOString();




await addBlueprint({

...form,

id:
crypto.randomUUID(),

createdAt:now,

updatedAt:now

});




navigate(
"/revenue/blueprints"
);



}

catch(error:any){


setError(

error.message ??
"Failed creating blueprint"

);


}

finally{


setLoading(false);


}


};









return (

<div className="p-6 space-y-6">



<button

onClick={()=>navigate(-1)}

className="
flex
items-center
gap-2
text-gray-600
hover:text-black
"

>

<ArrowLeft className="w-4 h-4"/>

Back

</button>








<div>


<h1 className="text-3xl font-bold">

Create Blueprint

</h1>


<p className="text-gray-600">

Create a technology assessment and consulting roadmap.

</p>


</div>









<form

onSubmit={handleSubmit}

className="
bg-white
border
rounded-xl
p-6
space-y-5
max-w-3xl
"

>








<div>

<label className="text-sm font-medium">

Blueprint Title

</label>


<input


value={form.title}


onChange={(e)=>

updateField(
"title",
e.target.value
)

}


className="
w-full
mt-1
border
rounded-lg
p-3
"


placeholder="AI Transformation Blueprint"


required


/>

</div>










<div>

<label className="text-sm font-medium">

Company ID

</label>


<input


value={form.companyId}


readOnly


className="
w-full
mt-1
border
rounded-lg
p-3
bg-gray-100
"


/>


</div>










<div>

<label className="text-sm font-medium">

Opportunity ID

</label>


<input


value={form.opportunityId ?? ""}


readOnly


className="
w-full
mt-1
border
rounded-lg
p-3
bg-gray-100
"


/>


</div>










<div>

<label className="text-sm font-medium">

Technology Score

</label>


<input


type="number"


min="0"


max="100"


value={form.technologyScore ?? 0}


onChange={(e)=>

updateField(
"technologyScore",
Number(e.target.value)
)

}


className="
w-full
mt-1
border
rounded-lg
p-3
"


/>


</div>










<div>

<label className="text-sm font-medium">

Status

</label>


<select


value={form.status}


onChange={(e)=>

updateField(
"status",
e.target.value
)

}


className="
w-full
mt-1
border
rounded-lg
p-3
"


>


<option value="DRAFT">

Draft

</option>


<option value="ANALYZING">

Analyzing

</option>


<option value="COMPLETED">

Completed

</option>


<option value="ARCHIVED">

Archived

</option>


</select>


</div>










{
error && (

<p className="text-red-600">

{error}

</p>

)

}









<button


disabled={loading}


className="
flex
items-center
gap-2
bg-purple-700
text-white
px-5
py-3
rounded-lg
hover:bg-purple-800
transition
disabled:opacity-50
"


>


<Save className="w-4 h-4"/>


{
loading
?

"Saving..."

:

"Create Blueprint"
}



</button>









</form>









</div>

);


}