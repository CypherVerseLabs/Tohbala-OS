import React from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  FileText,
  Target,
  Building2,
  Plus,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  useCompanyContext
} from "@/contexts/CompanyContext";

import {
  useOpportunityContext
} from "@/contexts/OpportunityContext";



export default function AccountDetail(){


const navigate = useNavigate();


const {
  id
} = useParams();



const {
  companies
} = useCompanyContext();



const {
  opportunities
} = useOpportunityContext();





const company = companies.find(
item => item.id === id
);





if(!company){

return (

<div className="p-6 space-y-4">

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


<h1 className="text-2xl font-bold">

Account not found

</h1>


</div>

);

}







const companyOpportunities =
opportunities.filter(

item =>

item.companyId === company.id

);






const totalValue =
companyOpportunities.reduce(

(sum,item)=>

sum + Number(item.estimatedValue ?? 0),

0

);







const client =
companyOpportunities.some(

item =>

item.status === "client"

);







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









<div
className="
bg-white
border
rounded-xl
p-6
flex
justify-between
items-start
"
>


<div>


<div className="flex items-center gap-3">


<Building2
className="
w-8
h-8
text-purple-600
"
/>



<div>


<h1 className="text-3xl font-bold">

{company.name}

</h1>


<p className="text-gray-500">

{company.industry || "Business Account"}

</p>


</div>


</div>


</div>








<button

onClick={()=>navigate(
`/revenue/blueprints/new?companyId=${company.id}`
)}

className="
flex
items-center
gap-2
bg-purple-700
text-white
px-4
py-2
rounded-lg
hover:bg-purple-800
"

>


<Plus className="w-4 h-4"/>

Create Blueprint


</button>





</div>









<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-6
"
>






<Card>

<CardHeader>

<CardTitle>

Revenue Value

</CardTitle>

</CardHeader>


<CardContent>


<p className="text-3xl font-bold">

${totalValue.toLocaleString()}

</p>


</CardContent>


</Card>







<Card>

<CardHeader>

<CardTitle>

Opportunities

</CardTitle>

</CardHeader>


<CardContent>


<p className="text-3xl font-bold">

{companyOpportunities.length}

</p>


</CardContent>


</Card>








<Card>

<CardHeader>

<CardTitle>

Account Status

</CardTitle>

</CardHeader>


<CardContent>


<p
className={`
text-xl
font-semibold
${
client
?
"text-green-600"
:
"text-blue-600"
}
`}
>

{
client
?
"Client"
:
"Prospect"
}

</p>


</CardContent>


</Card>





</div>









<Card>


<CardHeader>


<CardTitle className="flex items-center gap-2">


<Target className="w-5 h-5"/>


Revenue Opportunities


</CardTitle>


</CardHeader>






<CardContent className="space-y-4">





{
companyOpportunities.length === 0 ?


(

<p className="text-gray-500">

No opportunities found.

</p>

)



:


companyOpportunities.map(item=>(



<div

key={item.id}

className="
border
rounded-lg
p-4
flex
justify-between
items-center
"

>


<div>


<h3 className="font-semibold">

{item.title}

</h3>


<p className="text-sm text-gray-500">

Status: {item.status}

</p>


</div>





<div className="text-right">


<p className="font-bold text-green-600">

${Number(item.estimatedValue ?? 0).toLocaleString()}

</p>




<button

onClick={()=>navigate(

`/revenue/blueprints/new?companyId=${company.id}&opportunityId=${item.id}`

)}

className="
mt-2
text-sm
text-purple-700
flex
items-center
gap-1
"

>


<FileText className="w-4 h-4"/>

Blueprint


</button>



</div>





</div>



))


}





</CardContent>


</Card>







</div>

);

}