import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Building2,
  Users,
  DollarSign,
  Target,
} from "lucide-react";
import { useRevenue } from "../hooks/useRevenue";




export default function AccountsPage(){


const {
  companies,
  opportunities,
  activeClients,
} = useRevenue();





const prospectAccounts =
companies.filter(company => {

const hasClient =
opportunities.some(
item =>
item.companyId === company.id &&
item.status === "client"
);

return !hasClient;

});





const accountPipelineValue =
opportunities.reduce(
(sum,item)=>
sum + item.estimatedValue,
0
);







return (

<div className="p-6 space-y-6">



<div>

<h1 className="text-3xl font-bold">

Revenue Accounts

</h1>


<p className="text-gray-600">

Manage customers, prospects, and revenue relationships.

</p>


</div>








<div className="
grid grid-cols-1 md:grid-cols-4 gap-6
">





<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Building2 className="w-5 h-5 text-purple-600"/>

Total Accounts

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

{companies.length}

</p>


</CardContent>


</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Users className="w-5 h-5 text-green-600"/>

Active Clients

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

{activeClients.length}

</p>


</CardContent>


</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<Target className="w-5 h-5 text-blue-600"/>

Prospects

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

{prospectAccounts.length}

</p>


</CardContent>


</Card>









<Card>

<CardHeader>

<CardTitle className="flex items-center gap-2">

<DollarSign className="w-5 h-5 text-green-600"/>

Account Pipeline

</CardTitle>

</CardHeader>


<CardContent>

<p className="text-3xl font-bold">

${accountPipelineValue.toLocaleString()}

</p>


</CardContent>


</Card>





</div>









<Card>


<CardHeader>

<CardTitle>

Account Portfolio

</CardTitle>

</CardHeader>



<CardContent className="space-y-4">



{
companies.length === 0 ?


<p className="text-gray-500">

No accounts found.

</p>


:


companies.map(company=>{


const companyOpportunities =
opportunities.filter(
item =>
item.companyId === company.id
);



const value =
companyOpportunities.reduce(
(sum,item)=>
sum + item.estimatedValue,
0
);





const client =
companyOpportunities.some(
item =>
item.status==="client"
);





return (

<div

key={company.id}

className="
border rounded-lg p-4
"

>


<div className="flex justify-between items-start">



<div>

<h3 className="font-bold text-lg">

{company.name}

</h3>


<p className="text-sm text-gray-500">

{company.industry || "Business Account"}

</p>


</div>





<div className="text-right">


<span
className={`
text-xs px-3 py-1 rounded-full
${
client
?
"bg-green-100 text-green-700"
:
"bg-blue-100 text-blue-700"
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


</span>



<p className="font-bold text-green-600 mt-2">

${value.toLocaleString()}

</p>


</div>



</div>





<p className="text-sm text-gray-600 mt-3">

{companyOpportunities.length}

revenue opportunity(s)

</p>




</div>


);


})


}



</CardContent>


</Card>





</div>

);


}