import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Settings,
  Bell,
  Database,
  Shield,
  Palette,
  DollarSign,
  Users,
  Zap,
} from "lucide-react";



export default function RevenueSettings() {


return (

<div className="p-6 space-y-6">



<div>

<h1 className="text-3xl font-bold">

Revenue OS Settings

</h1>


<p className="text-gray-600">

Configure your revenue workspace, automation, and intelligence settings.

</p>


</div>







<div className="
grid grid-cols-1 lg:grid-cols-3 gap-6
">





<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Settings className="w-5 h-5 text-purple-600"/>

Workspace

</CardTitle>

</CardHeader>



<CardContent className="space-y-4">



<div className="border rounded-lg p-4">

<p className="font-semibold">

Revenue OS Mode

</p>


<p className="text-sm text-gray-500">

Consulting revenue management enabled.

</p>

</div>





<div className="border rounded-lg p-4">

<p className="font-semibold flex items-center gap-2">

<DollarSign className="w-4 h-4 text-green-600"/>

Currency

</p>


<p className="text-sm text-gray-500">

USD ($)

</p>

</div>



</CardContent>


</Card>









<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Bell className="w-5 h-5 text-blue-600"/>

Notifications

</CardTitle>

</CardHeader>



<CardContent>


<div className="border rounded-lg p-4">

<p className="font-semibold">

Deal Alerts

</p>


<p className="text-sm text-gray-500">

Proposal reminders, discovery alerts, and follow-ups.

</p>


</div>


</CardContent>


</Card>









<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Database className="w-5 h-5 text-green-600"/>

Data Layer

</CardTitle>

</CardHeader>



<CardContent>


<div className="border rounded-lg p-4">


<p className="font-semibold">

Tohbala CRM Integration

</p>


<p className="text-sm text-gray-500">

Revenue OS connected to your business intelligence layer.

</p>


</div>


</CardContent>


</Card>







</div>









<div className="
grid grid-cols-1 md:grid-cols-2 gap-6
">





<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Shield className="w-5 h-5 text-red-600"/>

Security

</CardTitle>

</CardHeader>


<CardContent>


<div className="border rounded-lg p-4">


<p className="font-semibold">

Protected Workspace

</p>


<p className="text-sm text-gray-500">

Authentication and permissions managed by Tohbala OS.

</p>


</div>


</CardContent>


</Card>









<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Users className="w-5 h-5 text-teal-600"/>

Team Access

</CardTitle>

</CardHeader>


<CardContent>


<div className="border rounded-lg p-4">


<p className="font-semibold">

Revenue Team Management

</p>


<p className="text-sm text-gray-500">

Future support for sales teams and account ownership.

</p>


</div>


</CardContent>


</Card>






</div>









<Card>


<CardHeader>

<CardTitle className="flex items-center gap-2">

<Zap className="w-5 h-5 text-yellow-600"/>

Future Revenue OS Modules

</CardTitle>

</CardHeader>



<CardContent className="grid md:grid-cols-2 gap-3">



<div className="border rounded-lg p-3">

AI Revenue Forecasting

</div>



<div className="border rounded-lg p-3">

Automated Proposal Generation

</div>



<div className="border rounded-lg p-3">

Client Portal

</div>



<div className="border rounded-lg p-3">

Revenue Analytics

</div>



<div className="border rounded-lg p-3">

Calendar Intelligence

</div>



<div className="border rounded-lg p-3">

Workflow Automation

</div>



</CardContent>


</Card>






</div>

);

}