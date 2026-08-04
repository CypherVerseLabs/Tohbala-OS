// src/modules/revenue/accounts/components/AccountCard.tsx

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import {
  Building2,
  Target,
} from "lucide-react";


import {
  useNavigate
} from "react-router-dom";


import {
  RevenueAccount
} from "../models/RevenueAccount";




interface Props {

account: RevenueAccount;

}




export default function AccountCard({
account
}: Props){



const navigate = useNavigate();





return (


<Card


onClick={()=>navigate(
`/revenue/accounts/${account.id}`
)}


className="
cursor-pointer
hover:shadow-lg
transition
"


>



<CardHeader>


<CardTitle className="flex items-center gap-2">


<Building2 className="text-purple-600"/>


{account.name}



</CardTitle>


</CardHeader>







<CardContent className="space-y-3">





<p className="text-sm text-gray-500">

{account.industry || "Business Account"}

</p>






<div className="flex justify-between">


<span>

Current Revenue

</span>



<strong className="text-green-600">

${account.currentRevenue.toLocaleString()}

</strong>


</div>







<div className="flex justify-between">


<span>

Revenue Potential

</span>



<strong>

${account.revenuePotential.toLocaleString()}

</strong>


</div>







<div className="flex items-center gap-2 text-sm">


<Target className="w-4 h-4"/>


{account.opportunityCount}

opportunities


</div>






<p className="text-xs text-purple-700 mt-3">

Open Account →

</p>





</CardContent>



</Card>


);


}