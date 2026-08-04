import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Brain,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
} from "lucide-react";


interface AIAdvisorCardProps {

  insights: string[];

}



export default function AIAdvisorCard({

  insights,

}: AIAdvisorCardProps) {



const getIcon = (index:number) => {

  if(index === 0)
    return <AlertTriangle className="w-4 h-4 text-yellow-600"/>;


  if(index === 1)
    return <TrendingUp className="w-4 h-4 text-green-600"/>;


  return <CheckCircle className="w-4 h-4 text-blue-600"/>;

};



return (

<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Brain className="w-5 h-5 text-purple-600"/>

AI Revenue Advisor

</CardTitle>

</CardHeader>



<CardContent>


<div className="space-y-4">


{
insights.length === 0 ? (

<p className="text-sm text-gray-500">

No insights available.

</p>

) : (


insights.map((item,index)=>(


<div

key={item}

className="flex items-start gap-3 border rounded-lg p-3"

>


<div className="mt-1">

{getIcon(index)}

</div>



<p className="text-sm">

{item}

</p>


</div>


))


)

}


</div>


</CardContent>


</Card>

);

}