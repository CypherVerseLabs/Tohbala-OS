// src/modules/revenue/blueprints/components/BlueprintCard.tsx

import { Blueprint } from "@/types/blueprint";


interface BlueprintCardProps {

  blueprint: Blueprint;

}



export default function BlueprintCard({
  blueprint
}: BlueprintCardProps){



const statusStyle = {

  DRAFT:
  "bg-gray-100 text-gray-700",

  ANALYZING:
  "bg-blue-100 text-blue-700",

  COMPLETED:
  "bg-green-100 text-green-700",

  ARCHIVED:
  "bg-orange-100 text-orange-700"

}[blueprint.status];



return (

<div

className="
bg-white
rounded-xl
shadow-sm
border
p-5
hover:shadow-md
transition
"

>


<div className="
flex
justify-between
items-start
gap-4
">


<div>


<h2 className="text-lg font-semibold">

{blueprint.title}

</h2>



<p className="text-sm text-gray-500 mt-1">

Technology assessment blueprint

</p>


</div>





<span

className={`
px-3
py-1
rounded-full
text-xs
font-medium
${statusStyle}
`}

>

{blueprint.status}

</span>



</div>









<div className="mt-4 space-y-2 text-sm">


<p>

<strong>Technology Score:</strong>{" "}

{blueprint.technologyScore ?? 0}/100

</p>





<p>

<strong>Owner:</strong>{" "}

{
blueprint.ownerId || "Unassigned"
}

</p>





<p>

<strong>Created:</strong>{" "}

{
new Date(
blueprint.createdAt
).toLocaleDateString()
}

</p>



</div>









<div className="mt-5">


<h3 className="font-medium">

AI Opportunities

</h3>



<p className="text-sm text-gray-600 line-clamp-3 mt-1">

{

blueprint.aiOpportunities &&

Object.keys(
blueprint.aiOpportunities
).length > 0

?

Object.keys(
blueprint.aiOpportunities
).join(", ")

:

"No AI opportunities defined"

}



</p>


</div>





</div>

);


}