import React from "react";

import {
  Menu,
  Bell,
  Search,
  User,
  ArrowLeft,
} from "lucide-react";


import {
  Button
} from "@/components/ui/button";


import {
  Input
} from "@/components/ui/input";


import {
  useNavigate,
  useLocation
} from "react-router-dom";


import RevenueQuickActions 
from "../../../../components/actions/QuickActions";



interface RevenueHeaderProps {

  onToggleSidebar:()=>void;

}





export default function RevenueHeader({

onToggleSidebar

}:RevenueHeaderProps){



const navigate = useNavigate();

const location = useLocation();





const getPageName = ()=>{


const path = location.pathname;



if(path === "/revenue")
return "Revenue Dashboard";


if(path.includes("/accounts"))
return "Accounts";


if(path.includes("/pipeline"))
return "Pipeline";


if(path.includes("/proposals"))
return "Proposals";


if(path.includes("/meetings"))
return "Meetings";


if(path.includes("/forecast"))
return "Forecast";


if(path.includes("/ai"))
return "AI Revenue Advisor";


if(path.includes("/settings"))
return "Settings";



return "Revenue OS";


};







return (


<header className="
bg-white
border-b
px-4
py-3
">


<div className="
flex
items-center
justify-between
gap-4
">







<div className="
flex
items-center
gap-3
">





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

className="flex items-center gap-2"

onClick={()=>navigate("/")}

>


<ArrowLeft className="w-4 h-4"/>


<span className="hidden sm:block">

Tohbala OS

</span>


</Button>







<div className="
hidden lg:flex
items-center
gap-2
text-sm
text-gray-500
">


<button

onClick={()=>navigate("/")}

className="hover:text-gray-900"

>

Tohbala OS

</button>



<span>
/
</span>




<button

onClick={()=>navigate("/revenue")}

className="hover:text-gray-900"

>

Revenue OS

</button>




<span>
/
</span>




<span className="
font-semibold
text-gray-900
">

{getPageName()}

</span>



</div>






</div>










<div className="
flex
items-center
gap-2
">





<RevenueQuickActions />










<div className="
relative
hidden
xl:block
">


<Search

className="
absolute
left-3
top-1/2
-translate-y-1/2
w-4 h-4
text-gray-400
"

/>


<Input

placeholder="
Search revenue...
"

className="
pl-10
w-64
"

/>


</div>









<Button

variant="ghost"

size="sm"

>


<Bell className="w-5 h-5"/>


</Button>









<Button

variant="ghost"

className="
flex
items-center
gap-2
"

>


<div className="
w-8
h-8
rounded-full
bg-gradient-to-r
from-purple-500
to-teal-500
flex
items-center
justify-center
">


<User

className="
w-4 h-4
text-white
"

/>


</div>



<span className="
hidden
sm:block
">

Admin

</span>



</Button>






</div>








</div>


</header>


);


}