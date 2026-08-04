import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Search,
  FileText,
  Users,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";


interface RevenueStatsProps {

  clientCount: number;

  proposalCount: number;

  discoveryCount: number;

  pipelineValue: number;

}



export default function RevenueStats({

  clientCount,
  proposalCount,
  discoveryCount,
  pipelineValue,

}: RevenueStatsProps) {



const stats = [

{
  title: "Discovery",
  subtitle: "Active discovery calls",
  value: discoveryCount.toString(),
  icon: Search,
  color: "text-blue-600",
},


{
  title: "Proposals",
  subtitle: "Awaiting decision",
  value: proposalCount.toString(),
  icon: FileText,
  color: "text-yellow-600",
},


{
  title: "Clients",
  subtitle: "Active engagements",
  value: clientCount.toString(),
  icon: Users,
  color: "text-green-600",
},


{
  title: "Pipeline",
  subtitle: "Estimated revenue",
  value: `$${pipelineValue.toLocaleString()}`,
  icon: DollarSign,
  color: "text-purple-600",
},

];



return (

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


{
stats.map((stat)=>{


const Icon = stat.icon;


return (

<Card key={stat.title}>


<CardHeader className="flex flex-row items-center justify-between pb-2">


<CardTitle className="text-sm">

{stat.title}

</CardTitle>


<Icon

className={`w-5 h-5 ${stat.color}`}

/>


</CardHeader>



<CardContent>


<div className="text-3xl font-bold">

{stat.value}

</div>



<p className="text-xs text-gray-500 flex items-center gap-1 mt-1">


<ArrowUpRight className="w-3 h-3 text-green-600"/>


{stat.subtitle}


</p>


</CardContent>


</Card>

);


})

}


</div>

);

}