// src/modules/revenue/blueprints/pages/RevenueBlueprints.tsx

import React, {
  useMemo,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  Plus,
  Search,
  FileText,
} from "lucide-react";

import BlueprintCard from "../components/BlueprintCard";

import {
  useBlueprintContext
} from "@/contexts/BlueprintContext";



export default function RevenueBlueprints(){


const navigate = useNavigate();



const {
  blueprints
} = useBlueprintContext();




const [
search,
setSearch
] = useState("");



const [
status,
setStatus
] = useState("ALL");








const filteredBlueprints = useMemo(()=>{


return [...blueprints]

.filter(item=>{


const title =

item.title ??
"";



const matchesSearch =

title
.toLowerCase()
.includes(
search.toLowerCase()
);



const matchesStatus =

status === "ALL"

||

item.status === status;



return (

matchesSearch &&

matchesStatus

);


})


.sort((a,b)=>{


return (

new Date(
b.createdAt
).getTime()

-

new Date(
a.createdAt
).getTime()

);


});


},[
blueprints,
search,
status
]);










return (

<div className="p-6 space-y-6">








<div className="
flex
justify-between
items-start
">


<div>


<h1 className="text-3xl font-bold">

Revenue Blueprints

</h1>



<p className="text-gray-600">

Technology assessments, AI roadmaps, and transformation plans.

</p>



</div>






<button


onClick={()=>navigate(
"/revenue/blueprints/new"
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


New Blueprint


</button>





</div>









<div className="
grid
grid-cols-1
md:grid-cols-3
gap-4
">


<div className="
bg-white
border
rounded-xl
p-4
">


<p className="text-sm text-gray-500">

Total Blueprints

</p>


<p className="text-3xl font-bold">

{blueprints.length}

</p>


</div>



<div className="
bg-white
border
rounded-xl
p-4
">


<p className="text-sm text-gray-500">

Active

</p>


<p className="text-3xl font-bold">

{
blueprints.filter(
item=>item.status==="ANALYZING"
).length
}

</p>


</div>



<div className="
bg-white
border
rounded-xl
p-4
">


<p className="text-sm text-gray-500">

Showing

</p>


<p className="text-3xl font-bold">

{filteredBlueprints.length}

</p>


</div>



</div>









<div className="
bg-white
border
rounded-xl
p-4
flex
gap-4
flex-wrap
">






<div className="
flex
items-center
gap-2
border
rounded-lg
px-3
flex-1
">


<Search
className="
w-4
h-4
text-gray-400
"
/>



<input


value={search}


onChange={(e)=>

setSearch(
e.target.value
)

}


placeholder="Search blueprints..."


className="
outline-none
w-full
py-2
"


/>



</div>








<select
value={status}
onChange={(e)=>
setStatus(e.target.value)
}
className="
border
rounded-lg
px-3
py-2
"
>

<option value="ALL">
All Status
</option>

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









<div className="
grid
grid-cols-1
md:grid-cols-3
gap-6
">






{

filteredBlueprints.length === 0 ? (



<div className="
col-span-full
bg-white
border
rounded-xl
p-10
text-center
">


<FileText

className="
w-10
h-10
mx-auto
text-gray-400
mb-3
"

/>



<p className="text-gray-500">

No blueprints found.

</p>



</div>



)

:



filteredBlueprints.map(item=>(



<div


key={item.id}


role="button"


tabIndex={0}


onClick={()=>navigate(
`/revenue/blueprints/${item.id}`
)}


onKeyDown={(e)=>{

if(e.key==="Enter"){

navigate(
`/revenue/blueprints/${item.id}`
);

}

}}


className="
cursor-pointer
"


>


<BlueprintCard

blueprint={item}

/>


</div>



))


}



</div>







</div>

);


}