// src/modules/revenue/blueprints/pages/BlueprintDetail.tsx

import React from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import {
  ArrowLeft,
  FileText,
  CheckCircle,
  Sparkles,
  Archive
} from "lucide-react";

import {
  useBlueprintContext
} from "@/contexts/BlueprintContext";




export default function BlueprintDetail(){


const navigate = useNavigate();


const {
id
} = useParams();



const {
blueprints,
updateBlueprint
} = useBlueprintContext();





const blueprint =
blueprints.find(
item => item.id === id
);






if(!blueprint){


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



<h1 className="text-xl font-bold">

Blueprint not found

</h1>


</div>

);


}








const archiveBlueprint = async()=>{


await updateBlueprint({

...blueprint,

status:"ARCHIVED",

updatedAt:
new Date().toISOString()

});


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









<div className="
bg-white
border
rounded-xl
p-6
space-y-6
">







<div className="
flex
justify-between
items-start
gap-4
">


<div>


<h1 className="text-3xl font-bold">

{blueprint.title}

</h1>


<p className="text-gray-500 mt-1">

Status: {blueprint.status}

</p>


</div>








<div className="flex gap-3">


<button

onClick={()=>navigate(
`/revenue/proposals/new?blueprintId=${blueprint.id}`
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

<FileText className="w-4 h-4"/>

Create Proposal

</button>







{
blueprint.status !== "ARCHIVED" && (

<button

onClick={archiveBlueprint}

className="
flex
items-center
gap-2
border
px-4
py-2
rounded-lg
text-gray-700
hover:bg-gray-100
"

>

<Archive className="w-4 h-4"/>

Archive

</button>

)

}



</div>






</div>









<div className="
grid
grid-cols-1
md:grid-cols-3
gap-4
">








<div className="
border
rounded-lg
p-4
">

<p className="text-sm text-gray-500">

Technology Score

</p>


<p className="text-3xl font-bold">

{blueprint.technologyScore ?? 0}/100

</p>


</div>









<div className="
border
rounded-lg
p-4
">

<p className="text-sm text-gray-500">

30 Day Roadmap

</p>


<CheckCircle

className="
w-5
h-5
text-green-600
mt-2
"

/>


</div>









<div className="
border
rounded-lg
p-4
">

<p className="text-sm text-gray-500">

AI Opportunities

</p>


<Sparkles

className="
w-5
h-5
text-purple-600
mt-2
"

/>


</div>








</div>









<div className="
grid
grid-cols-1
md:grid-cols-2
gap-6
">







<div className="
border
rounded-lg
p-5
">

<h2 className="font-semibold text-lg">

Current Systems

</h2>


<pre className="
text-sm
text-gray-600
mt-3
whitespace-pre-wrap
">

{
JSON.stringify(
blueprint.currentSystems,
null,
2
)
}

</pre>


</div>









<div className="
border
rounded-lg
p-5
">

<h2 className="font-semibold text-lg">

Business Challenges

</h2>


<pre className="
text-sm
text-gray-600
mt-3
whitespace-pre-wrap
">

{
JSON.stringify(
blueprint.businessChallenges,
null,
2
)
}

</pre>


</div>









<div className="
border
rounded-lg
p-5
">

<h2 className="font-semibold text-lg">

AI Opportunities

</h2>


<pre className="
text-sm
text-gray-600
mt-3
whitespace-pre-wrap
">

{
JSON.stringify(
blueprint.aiOpportunities,
null,
2
)
}

</pre>


</div>









<div className="
border
rounded-lg
p-5
">

<h2 className="font-semibold text-lg">

Recommendations

</h2>


<pre className="
text-sm
text-gray-600
mt-3
whitespace-pre-wrap
">

{
JSON.stringify(
blueprint.recommendations,
null,
2
)
}

</pre>


</div>








</div>









<div className="
border
rounded-lg
p-5
">


<h2 className="font-semibold text-lg">

Roadmap

</h2>





<div className="
grid
grid-cols-1
md:grid-cols-3
gap-4
mt-4
">



<div>

<h3 className="font-medium">

First 30 Days

</h3>


<pre className="
text-sm
text-gray-600
whitespace-pre-wrap
">

{
JSON.stringify(
blueprint.roadmap30Days,
null,
2
)
}

</pre>


</div>







<div>

<h3 className="font-medium">

90 Days

</h3>


<pre className="
text-sm
text-gray-600
whitespace-pre-wrap
">

{
JSON.stringify(
blueprint.roadmap90Days,
null,
2
)
}

</pre>


</div>







<div>

<h3 className="font-medium">

12 Months

</h3>


<pre className="
text-sm
text-gray-600
whitespace-pre-wrap
">

{
JSON.stringify(
blueprint.roadmap12Months,
null,
2
)
}

</pre>


</div>






</div>


</div>








</div>





</div>

);


}