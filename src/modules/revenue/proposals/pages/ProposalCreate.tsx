import React, {
  useEffect,
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
  useProposalContext
} from "@/contexts/ProposalContext";

import {
  useAuth
} from "@/contexts/AuthContext";

import {
  useCompanyContext
} from "@/contexts/CompanyContext";

import {
  Proposal
} from "@/types/proposal";





type ProposalForm = Omit<
  Proposal,
  "id" | "createdAt" | "updatedAt"
>;







export default function ProposalCreate(){

const navigate = useNavigate();


const [
searchParams
] = useSearchParams();


const blueprintId =
searchParams.get("blueprint");



const {
blueprints
} = useBlueprintContext();



const {
addProposal
} = useProposalContext();



const {
user,
profile
} = useAuth();



const {
companies
} = useCompanyContext();





const blueprint =
blueprints.find(
item =>
item.id === blueprintId
);





const userCompany =
companies.find(
company =>
company.ownerId === user?.id
);







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
] = useState<ProposalForm>({

companyId:
blueprint?.companyId ??
userCompany?.id ??
"",


opportunityId:
blueprint?.opportunityId ??
null,


blueprintId:
blueprint?.id ??
null,


title:
blueprint?.title ??
"",


companyName:
"",


industry:
"",


businessProblem:
"",


estimatedValue:
0,


services:
[],


investment:
0,


timeline:
"",


status:
"DRAFT",


ownerId:
blueprint?.ownerId ??
user?.id ??
""

});








useEffect(()=>{

const company =
companies.find(
item =>
item.ownerId === user?.id
);


setForm(prev=>({

...prev,


companyId:
blueprint?.companyId ??
company?.id ??
prev.companyId,


opportunityId:
blueprint?.opportunityId ??
prev.opportunityId,


blueprintId:
blueprint?.id ??
prev.blueprintId,


title:
blueprint
?
`${blueprint.title} Proposal`
:
prev.title,


ownerId:
blueprint?.ownerId ??
user?.id ??
prev.ownerId

}));


},[
blueprint,
companies,
user
]);









const updateField = (
key:keyof ProposalForm,
value:any
)=>{

setForm(prev=>({

...prev,

[key]:value

}));

};









const handleSubmit = async(
event:React.FormEvent
)=>{

event.preventDefault();


console.log("==============================");
console.log("CREATE PROPOSAL CLICKED");

console.log(
"USER:",
user
);

console.log(
"PROFILE:",
profile
);

console.log(
"COMPANIES:",
companies
);

console.log(
"FORM:",
form
);



setError(null);





if(!form.title.trim()){

setError(
"Proposal title is required"
);

return;

}





if(!form.companyId){

console.error(
"Missing companyId"
);

setError(
"No company selected"
);

return;

}





if(!form.ownerId){

console.error(
"Missing ownerId"
);

setError(
"No owner selected"
);

return;

}







try{

setLoading(true);


console.log(
"SENDING PROPOSAL:",
form
);



await addProposal(form);



console.log(
"PROPOSAL CREATED SUCCESSFULLY"
);



navigate(
"/revenue/proposals"
);


}

catch(error:any){

console.error(
"CREATE PROPOSAL ERROR:",
error
);


setError(
error?.message ??
"Failed creating proposal"
);


}

finally{

setLoading(false);

console.log("==============================");

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
"

>

<ArrowLeft className="w-4 h-4"/>

Back

</button>





<h1 className="text-3xl font-bold">

Create Proposal

</h1>





{
error && (

<div className="
bg-red-100
text-red-700
p-3
rounded-lg
">

{error}

</div>

)

}





<form

onSubmit={handleSubmit}

className="
bg-white
border
rounded-xl
p-6
max-w-3xl
space-y-5
"

>





<div>

<label className="text-sm font-medium">

Proposal Title

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
border
rounded-lg
p-3
"

/>

</div>






<div>

<label className="text-sm font-medium">

Company Name

</label>


<input

value={form.companyName}

onChange={(e)=>
updateField(
"companyName",
e.target.value
)
}

className="
w-full
border
rounded-lg
p-3
"

/>

</div>






<div>

<label className="text-sm font-medium">

Industry

</label>


<input

value={form.industry}

onChange={(e)=>
updateField(
"industry",
e.target.value
)
}

className="
w-full
border
rounded-lg
p-3
"

/>

</div>






<div>

<label className="text-sm font-medium">

Business Problem

</label>


<textarea

value={form.businessProblem}

onChange={(e)=>
updateField(
"businessProblem",
e.target.value
)
}

rows={4}

className="
w-full
border
rounded-lg
p-3
"

/>

</div>






<div>

<label className="text-sm font-medium">

Estimated Value

</label>


<input

type="number"

value={form.estimatedValue}

onChange={(e)=>
updateField(
"estimatedValue",
Number(e.target.value)
)
}

className="
w-full
border
rounded-lg
p-3
"

/>

</div>






<div>

<label className="text-sm font-medium">

Investment

</label>


<input

type="number"

value={form.investment}

onChange={(e)=>
updateField(
"investment",
Number(e.target.value)
)
}

className="
w-full
border
rounded-lg
p-3
"

/>

</div>






<div>

<label className="text-sm font-medium">

Timeline

</label>


<input

value={form.timeline}

onChange={(e)=>
updateField(
"timeline",
e.target.value
)
}

placeholder="90 days"

className="
w-full
border
rounded-lg
p-3
"

/>

</div>






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
"

>

<Save className="w-4 h-4"/>


{
loading
?
"Saving..."
:
"Create Proposal"
}


</button>







</form>


</div>

);

}