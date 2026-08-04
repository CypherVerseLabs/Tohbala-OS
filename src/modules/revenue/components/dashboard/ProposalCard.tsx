// src/components/dashboard/ProposalCard.tsx

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FileText,
} from "lucide-react";

import {
  Proposal
} from "@/types/proposal";



interface ProposalCardProps {

  proposals: Proposal[];

}



export default function ProposalCard({

  proposals,

}: ProposalCardProps) {


return (

<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<FileText className="w-5 h-5 text-yellow-600"/>

Active Proposals

</CardTitle>

</CardHeader>



<CardContent className="space-y-4">



{
proposals.length === 0 ? (

<p className="text-sm text-gray-500">

No active proposals.

</p>

)

:

(

proposals
.filter(

proposal =>

proposal.status !== "REJECTED" &&

proposal.status !== "EXPIRED"

)

.slice(0,5)

.map(proposal=>(


<div

key={proposal.id}

className="border rounded-lg p-4"

>



<div className="flex justify-between">



<div>

<h3 className="font-semibold">

{proposal.companyName || proposal.title}

</h3>


<p className="text-sm text-gray-500 capitalize">

{proposal.status.toLowerCase()}

</p>


</div>





<div className="font-bold text-green-600">

${proposal.estimatedValue.toLocaleString()}

</div>



</div>





<p className="text-sm text-gray-600 mt-2">

{proposal.businessProblem || "No business problem added."}

</p>




<div className="text-xs text-gray-500 mt-2">

Timeline: {proposal.timeline || "Not defined"}

</div>



</div>


))


)



}



</CardContent>


</Card>

);

}