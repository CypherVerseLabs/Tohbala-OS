// src/modules/revenue/pages/RevenueProposals.tsx

import React from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  Plus,
} from "lucide-react";

import {
  useRevenue
} from "../hooks/useRevenue";





const RevenueProposals = () => {


const navigate = useNavigate();




const {
proposals,
} = useRevenue();







const activeProposals =
proposals.filter(

item =>

item.status !== "REJECTED" &&

item.status !== "EXPIRED"

);








const proposalValue =
activeProposals.reduce(

(sum,item)=>

sum +

Number(item.estimatedValue ?? 0),

0

);








const awaitingDecision =
proposals.filter(

item =>

item.status === "SENT" ||

item.status === "VIEWED"

).length;








return (

<div className="p-6 space-y-6">





<div className="flex justify-between items-start">



<div>

<h1 className="text-3xl font-bold">

Revenue Proposals

</h1>


<p className="text-gray-600">

Manage proposals, deal value, and conversion opportunities.

</p>


</div>








<button

onClick={() =>
navigate("/revenue/proposals/create")
}

className="
flex
items-center
gap-2
bg-purple-700
text-white
px-4
py-2
rounded-lg
"

>

<Plus className="w-4 h-4"/>

New Proposal

</button>





</div>









<div className="
grid grid-cols-1 md:grid-cols-3 gap-5
">







<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<FileText className="text-purple-600"/>

Open Proposals

</CardTitle>

</CardHeader>



<CardContent>

<p className="text-3xl font-bold">

{activeProposals.length}

</p>

</CardContent>

</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<DollarSign className="text-green-600"/>

Proposal Value

</CardTitle>

</CardHeader>



<CardContent>

<p className="text-3xl font-bold">

${proposalValue.toLocaleString()}

</p>

</CardContent>

</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Clock className="text-yellow-600"/>

Awaiting Decision

</CardTitle>

</CardHeader>



<CardContent>

<p className="text-3xl font-bold">

{awaitingDecision}

</p>

</CardContent>

</Card>







</div>









<Card>


<CardHeader>

<CardTitle>

Active Proposals

</CardTitle>

</CardHeader>








<CardContent className="space-y-4">



{
activeProposals.length === 0 ? (


<p className="text-gray-500">

No active proposals.

</p>


)

:

activeProposals.map(item=>(




<div

key={item.id}

className="
border rounded-lg p-4
hover:bg-gray-50
transition
cursor-pointer
"

onClick={()=>{

navigate(
`/revenue/proposals/${item.id}`
);

}}

>








<div className="flex justify-between">





<div>


<h3 className="font-bold">

{item.companyName || item.title}

</h3>


<p className="text-sm text-gray-500">

{item.industry}

</p>


</div>







<div className="text-right">



<p className="font-bold text-green-600">

${Number(item.estimatedValue ?? 0).toLocaleString()}

</p>





<span className="
text-xs px-2 py-1 rounded-full
bg-yellow-100 text-yellow-700
">

{item.status}

</span>



</div>





</div>









<p className="mt-3 text-sm">

{item.businessProblem}

</p>









<div className="
mt-3 flex items-center gap-2 text-sm text-gray-500
">



<CheckCircle className="w-4 h-4 text-green-600"/>





{
item.status === "ACCEPTED"

?

"Accepted"

:

item.status === "VIEWED"

?

"Viewed by client"

:

"Ready for follow-up"

}





</div>







</div>



))



}







</CardContent>


</Card>







</div>

);


};





export default RevenueProposals;