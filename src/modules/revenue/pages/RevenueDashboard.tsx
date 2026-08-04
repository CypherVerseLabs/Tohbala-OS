// src/modules/revenue/pages/RevenueDashboard.tsx

import React from "react";

import {
  useNavigate,
} from "react-router-dom";


import RevenueStats from "../components/dashboard/RevenueStats";
import PrioritiesCard from "../components/dashboard/PrioritiesCard";
import AIAdvisorCard from "../components/dashboard/AIAdvisorCard";
import MeetingsCard from "../components/dashboard/MeetingsCard";
import ProposalCard from "../components/dashboard/ProposalCard";
import ActivityCard from "../components/dashboard/ActivityCard";
import PipelineCard from "../components/dashboard/PipelineCard";


import {
  useRevenue
} from "../hooks/useRevenue";




const RevenueDashboard: React.FC = () => {


const navigate = useNavigate();



const {

pipelineValue,

clientCount,

proposalCount,

discoveryCount,


insights,

priorityOpportunities,

recentActivities,


proposals,


} = useRevenue();






return (

<div className="p-6 space-y-6">





<div>


<h1 className="text-3xl font-bold">

Revenue Command Center

</h1>



<p className="text-gray-600">

Manage consulting pipeline, clients, and revenue growth.

</p>



</div>









<RevenueStats


clientCount={clientCount}


proposalCount={proposalCount}


discoveryCount={discoveryCount}


pipelineValue={pipelineValue}


/>









<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">





<div className="lg:col-span-2">


<div

className="
cursor-pointer
hover:scale-[1.01]
transition
"

onClick={() =>
navigate("/revenue/pipeline")
}

>


<PrioritiesCard


opportunities={priorityOpportunities}


/>


</div>



</div>








<AIAdvisorCard


insights={insights}


/>





</div>









<div className="grid grid-cols-1 md:grid-cols-3 gap-6">







<div

className="
cursor-pointer
hover:scale-[1.01]
transition
"


onClick={() =>
navigate("/revenue/pipeline")
}


>


<PipelineCard


discovery={discoveryCount}


proposal={proposalCount}


client={clientCount}


/>


</div>









<div

className="
cursor-pointer
hover:scale-[1.01]
transition
"


onClick={() =>
navigate("/revenue/proposals")
}


>


<ProposalCard


proposals={proposals}


/>


</div>









<div

className="
cursor-pointer
hover:scale-[1.01]
transition
"


onClick={() =>
navigate("/revenue/meetings")
}


>


<MeetingsCard


activities={recentActivities}


/>


</div>





</div>









<div

className="
cursor-pointer
hover:scale-[1.01]
transition
"


onClick={() =>
navigate("/revenue/ai")
}


>


<ActivityCard


activities={recentActivities}


/>


</div>






</div>

);

};



export default RevenueDashboard;