import React from "react";

import {
Plus,
FileText,
ChevronRight
} from "lucide-react";

import {
useNavigate
} from "react-router-dom";

import {
useBlueprintContext
} from "@/contexts/BlueprintContext";

export default function BlueprintList(){

const navigate = useNavigate();

const {
blueprints,
loading,
error
} = useBlueprintContext();

return (

<div className="p-6 space-y-6">

<div className="flex items-center justify-between">

<div>

<h1 className="text-3xl font-bold">

Blueprints

</h1>

<p className="text-gray-600">

Technology assessments and consulting roadmaps.

</p>

</div>

<button

onClick={() =>
navigate("/revenue/blueprints/new")
}

className="
flex
items-center
gap-2
px-4
py-2
rounded-lg
bg-purple-700
text-white
hover:bg-purple-800
transition
"

>

<Plus className="w-4 h-4"/>

New Blueprint

</button>

</div>

{
loading && (

<div className="text-gray-500">

Loading blueprints...

</div>

)
}

{
error && (

<div className="
p-4
rounded-lg
bg-red-100
text-red-700
">

{error}

</div>

)
}

{
!loading && blueprints.length === 0 && (

<div className="
border
rounded-xl
p-8
text-center
bg-white
">

<FileText
className="
mx-auto
w-10
h-10
text-gray-400
mb-3
"
/>

<h2 className="font-semibold text-lg">

No blueprints yet

</h2>

<p className="text-gray-500">

Create your first technology assessment.

</p>

</div>

)
}

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6
">

{

blueprints.map(blueprint=>(

<div

key={blueprint.id}

className="
bg-white
rounded-xl
border
shadow-sm
p-5
hover:shadow-md
transition
cursor-pointer
"

onClick={()=>

navigate(
`/revenue/blueprints/${blueprint.id}`
)

}

>

<div className="
flex
items-start
justify-between
">

<div>

<h3 className="font-semibold text-lg">

{blueprint.title}

</h3>

<p className="text-sm text-gray-500">

{blueprint.status}

</p>

</div>

<ChevronRight

className="
w-5
h-5
text-gray-400
"

/>

</div>

<div className="
mt-4
space-y-2
text-sm
">

<div>

Technology Score:

<strong className="ml-1">

{blueprint.technologyScore ?? 0}

</strong>

</div>

<div>

Roadmap:

<strong className="ml-1">

{
blueprint.roadmap30Days
?
"Available"
:
"Pending"
}

</strong>

</div>

</div>

</div>

))

}

</div>

</div>

);

}
