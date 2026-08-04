import React from "react";

import {
  Menu,
  Bell,
  Search,
  User,
  ArrowLeft,
  LayoutDashboard,
} from "lucide-react";


import {
  Button
} from "@/components/ui/button";


import {
  Input
} from "@/components/ui/input";


import {
  useNavigate,
  useLocation,
} from "react-router-dom";


import QuickActions from "../actions/QuickActions";




interface HeaderProps {

  onToggleSidebar: () => void;

}




const Header: React.FC<HeaderProps> = ({
  onToggleSidebar
}) => {



const navigate = useNavigate();

const location = useLocation();






const pageTitle = () => {


const path = location.pathname;



if(path === "/")
return "Command Center";


if(path.includes("/revenue/accounts"))
return "Accounts";


if(path.includes("/revenue/pipeline"))
return "Pipeline";


if(path.includes("/revenue/proposals"))
return "Proposals";


if(path.includes("/revenue/meetings"))
return "Meetings";


if(path.includes("/revenue/forecast"))
return "Forecast";


if(path.includes("/revenue/ai"))
return "AI Advisor";


if(path.includes("/revenue/settings"))
return "Settings";


if(path.includes("revenue"))
return "Revenue Dashboard";


return "Tohbala OS";


};







return (


<header

className="
bg-white
border-b
border-gray-200
px-4
py-3
"

>


<div

className="
flex
items-center
justify-between
gap-4
"

>









<div

className="
flex
items-center
gap-3
min-w-0
"

>






<Button

variant="ghost"

size="sm"

onClick={onToggleSidebar}

>

<Menu className="w-5 h-5"/>

</Button>









<Button

variant="ghost"

size="sm"

className="flex gap-2"

onClick={()=>navigate("/")}

>


<ArrowLeft className="w-4 h-4"/>


<span className="hidden sm:inline">

Tohbala OS

</span>


</Button>









<div

className="
h-6
w-px
bg-gray-200
"

/>









<Button

variant="ghost"

size="sm"

className="flex gap-2"

onClick={()=>navigate("/revenue")}

>


<LayoutDashboard className="w-4 h-4"/>


<span className="hidden sm:inline">

Revenue OS

</span>


</Button>











<QuickActions />









<div

className="
hidden
xl:block
ml-3
"

>


<p

className="
text-xs
text-gray-500
"

>

Tohbala OS / Revenue OS

</p>


<h2

className="
font-semibold
text-gray-900
"

>

{pageTitle()}

</h2>


</div>












</div>












<div

className="
flex
items-center
gap-3
"

>









<div

className="
relative
hidden
xl:block
"

>


<Search

className="
absolute
left-3
top-1/2
-translate-y-1/2
text-gray-400
w-4 h-4
"

/>





<Input

placeholder="
Search leads, clients, campaigns...
"

className="
pl-10
w-72
"

/>


</div>









<Button

variant="ghost"

size="sm"

className="relative"

>


<Bell className="w-5 h-5"/>


<span

className="
absolute
-top-1
-right-1
bg-red-500
text-white
text-xs
rounded-full
w-4
h-4
flex
items-center
justify-center
"

>

3

</span>


</Button>









<Button

variant="ghost"

size="sm"

className="flex gap-2"

>


<div

className="
w-8
h-8
rounded-full
bg-gradient-to-r
from-teal-500
to-purple-600
flex
items-center
justify-center
"

>


<User

className="
w-4
h-4
text-white
"

/>


</div>





<span className="hidden sm:inline">

Admin

</span>


</Button>









</div>








</div>


</header>


);

};


export default Header;