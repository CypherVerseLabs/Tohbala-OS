import React from "react";

import {
LayoutDashboard,
Building2,
Kanban,
FileText,
CalendarDays,
TrendingUp,
Brain,
Settings,
ClipboardCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
useNavigate,
useLocation,
} from "react-router-dom";

interface RevenueSidebarProps {
isOpen:boolean;
}

const menuItems = [

{
label:"Revenue Dashboard",
path:"/revenue",
icon:LayoutDashboard,
},

{
label:"Accounts",
path:"/revenue/accounts",
icon:Building2,
},

{
label:"Pipeline",
path:"/revenue/pipeline",
icon:Kanban,
},

{
label:"Blueprints",
path:"/revenue/blueprints",
icon:ClipboardCheck,
},

{
label:"Proposals",
path:"/revenue/proposals",
icon:FileText,
},

{
label:"Meetings",
path:"/revenue/meetings",
icon:CalendarDays,
},

{
label:"Forecast",
path:"/revenue/forecast",
icon:TrendingUp,
},

{
label:"AI Revenue Advisor",
path:"/revenue/ai",
icon:Brain,
},

{
label:"Settings",
path:"/revenue/settings",
icon:Settings,
},

];

export default function RevenueSidebar({
isOpen
}:RevenueSidebarProps){

const navigate = useNavigate();

const location = useLocation();

return (

<aside

className="
h-full
text-white
bg-gradient-to-b
from-purple-700
to-teal-600
transition-all
duration-300
overflow-hidden
"

>

<div className="p-4">

<div
className={cn(
"flex items-center gap-3",
!isOpen && "justify-center"
)}
>

<div

className="
w-10
h-10
rounded-lg
bg-white
flex
items-center
justify-center
flex-shrink-0
"

>

<span className="
text-purple-700
font-bold
text-xl
">

R

</span>

</div>

<div

className={cn(

"transition-all duration-300 overflow-hidden whitespace-nowrap",

isOpen
?
"opacity-100 w-auto"
:
"opacity-0 w-0"

)}

>

<h1 className="font-bold">

Tohbala

</h1>

<p className="text-sm">

Revenue OS

</p>

<p className="text-xs opacity-80">

Growth Engine

</p>

</div>

</div>

</div>

<nav className="mt-6 space-y-1">

{

menuItems.map(item=>{

const Icon = item.icon;

const active =

location.pathname === item.path

||

location.pathname.startsWith(
item.path + "/"
);

return (

<button

key={item.path}

type="button"

onClick={()=>
navigate(item.path)
}

className={cn(

"w-full flex items-center gap-3 px-4 py-3 transition hover:bg-white/10",

!isOpen && "justify-center",

active &&
"bg-white/20 border-r-4 border-white"

)}

>

<Icon

className="
w-5
h-5
flex-shrink-0
"

/>

<span

className={cn(

"text-sm transition-all duration-300 whitespace-nowrap overflow-hidden",

isOpen
?
"opacity-100 w-auto ml-0"
:
"opacity-0 w-0"

)}

>

{item.label}

</span>

</button>

);

})

}

</nav>

</aside>

);

}
