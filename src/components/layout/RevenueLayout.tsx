import RevenueSidebar from "@/modules/revenue/components/layout/RevenueSidebar";
import React, { useState } from "react";
import RevenueHeader from "@/modules/revenue/components/layout/RevenueHeader";


interface RevenueLayoutProps {

  children: React.ReactNode;

}



export default function RevenueLayout({
  children
}: RevenueLayoutProps) {


const [sidebarOpen,setSidebarOpen] = useState(true);



return (

<div className="flex h-screen bg-gray-50 overflow-hidden">


<div
className={`
transition-all duration-300
${sidebarOpen ? "w-64" : "w-16"}
`}
>

<RevenueSidebar

isOpen={sidebarOpen}

/>

</div>





<div className="flex-1 flex flex-col overflow-hidden">



<RevenueHeader

onToggleSidebar={()=>setSidebarOpen(!sidebarOpen)}

/>





<main className="flex-1 overflow-y-auto">

{children}

</main>



</div>



</div>

);

}