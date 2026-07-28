import React from "react";

import {
Card,
CardContent,
CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
Building2,
Edit,
Trash2,
Globe,
Mail,
Phone,
Eye,
} from "lucide-react";
import { Company } from "@/config/company";




interface Props {

company: Company;

onView:(company:Company)=>void;

onEdit:(company:Company)=>void;

onDelete:(id:string)=>void;

}


const CompanyCard:React.FC<Props> = ({
company,
onEdit,
onDelete
})=>{


    function onView(company: Company): void {
        throw new Error("Function not implemented.");
    }

return (

<Card className="hover:shadow-lg transition">

<CardHeader>

<div className="flex justify-between">


<div>

<h3 className="
font-bold
text-lg
flex
items-center
gap-2
">

<Building2
className="w-5 h-5 text-teal-600"
/>

{company.name}

</h3>


<p className="text-sm text-gray-500">
{company.industry}
</p>


</div>



<div className="flex">

<Button
variant="ghost"
size="sm"
onClick={()=>onView(company)}
>

<Eye className="w-4 h-4 text-teal-600"/>

</Button>

<Button
variant="ghost"
size="sm"
onClick={()=>onEdit(company)}
>

<Edit className="w-4 h-4"/>

</Button>


<Button
variant="ghost"
size="sm"
onClick={()=>onDelete(company.id)}
>

<Trash2 className="w-4 h-4 text-red-500"/>

</Button>


</div>


</div>

</CardHeader>



<CardContent className="space-y-3">


{company.description && (

<p className="text-sm text-gray-700">
{company.description}
</p>

)}



{company.website && (

<div className="flex gap-2 text-sm">

<Globe className="w-4 h-4"/>

{company.website}

</div>

)}



{company.email && (

<div className="flex gap-2 text-sm">

<Mail className="w-4 h-4"/>

{company.email}

</div>

)}



{company.phone && (

<div className="flex gap-2 text-sm">

<Phone className="w-4 h-4"/>

{company.phone}

</div>

)}



</CardContent>


</Card>

);

};


export default CompanyCard;