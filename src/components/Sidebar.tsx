import React from "react";
import {
Home,
Building2,
Target,
Kanban,
Brain,
Activity,
BarChart3,
Settings
} from "lucide-react";

import {cn} from "@/lib/utils";


interface SidebarProps{

activeTab:string;

onTabChange:(tab:string)=>void;

isOpen:boolean;

}



const menuItems=[

{
id:"dashboard",
label:"Command Center",
icon:Home
},

{
id:"opportunities",
label:"Opportunities",
icon:Target
},

{
id:"companies",
label:"Companies",
icon:Building2
},


{
id:"pipeline",
label:"Pipeline",
icon:Kanban
},

{
id:"ai",
label:"AI Intelligence",
icon:Brain
},

{
id:"activities",
label:"Activities",
icon:Activity
},

{
id:"analytics",
label:"Analytics",
icon:BarChart3
},

{
id:"settings",
label:"Settings",
icon:Settings
}

];



const Sidebar:React.FC<SidebarProps>=
({
activeTab,
onTabChange,
isOpen
})=>{


return (

<div
className={cn(
"bg-gradient-to-b from-teal-600 to-purple-700 text-white h-full",
isOpen?"w-64":"w-16"
)}
>


<div className="p-4">


<div className="flex items-center gap-3">


<div className="
w-8 h-8 bg-white rounded-lg
flex items-center justify-center
">

<span className="text-teal-600 font-bold">
T
</span>

</div>


{
isOpen &&
<div>

<h1 className="font-bold">
Tohbala OS
</h1>

<h1 className="font-bold">
CRM Command Center
</h1>

<p className="text-xs opacity-80">
Business Growth Engine
</p>

</div>
}


</div>


</div>




<nav className="mt-8">


{
menuItems.map(item=>{

const Icon=item.icon;


return (

<button

key={item.id}

onClick={()=>
onTabChange(item.id)
}

className={cn(
"w-full flex items-center px-4 py-3 hover:bg-white/10",
activeTab===item.id &&
"bg-white/20 border-r-4 border-white"
)}

>


<Icon className="w-5 h-5"/>


{
isOpen &&
<span className="ml-3">
{item.label}
</span>
}


</button>


)

})

}


</nav>


</div>

);

};


export default Sidebar;