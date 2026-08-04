// src/modules/revenue/accounts/pages/AccountsPage.tsx

import React from "react";

import AccountCard from "../components/AccountCard";

import {
  RevenueAccount
} from "../models/RevenueAccount";

import {
  useCompanyContext
} from "@/contexts/CompanyContext";

import {
  useOpportunityContext
} from "@/contexts/OpportunityContext";





export default function AccountsPage(){



const {
  companies
} = useCompanyContext();




const {
  opportunities
} = useOpportunityContext();








const accounts:RevenueAccount[] =

companies.map(company=>{



const accountOpps =

opportunities.filter(

item =>

item.companyId === company.id

);






return {


id:company.id,


name:company.name,


industry:company.industry,


status:

accountOpps.length

?

"active"

:

"prospect",





currentRevenue:

accountOpps

.filter(

o=>

o.status==="client"

)

.reduce(

(sum,o)=>

sum + Number(o.estimatedValue ?? 0),

0

),






revenuePotential:

accountOpps.reduce(

(sum,o)=>

sum + Number(o.estimatedValue ?? 0),

0

),






health:"good",





opportunityCount:

accountOpps.length





};



});









return (


<div className="p-6 space-y-6">





<div>


<h1 className="text-3xl font-bold">

Revenue Accounts

</h1>



<p className="text-gray-600">

Manage customer accounts, revenue potential, and growth opportunities.

</p>



</div>









<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-6
"
>






{

accounts.length === 0

?


<p className="text-gray-500">

No accounts found.

</p>


:


accounts.map(account=>(



<AccountCard


key={account.id}


account={account}


/>



))


}





</div>







</div>


);


}