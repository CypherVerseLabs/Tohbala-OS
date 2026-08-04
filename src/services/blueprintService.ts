// src/services/blueprintService.ts

import { supabase } from "@/lib/supabase";

import {
  Blueprint,
  BlueprintStatus
} from "@/types/blueprint";



const mapFromRow = (
row:any
):Blueprint =>({


id:row.id,


companyId:
row.company_id,



opportunityId:
row.opportunity_id ?? null,



title:
row.title,



technologyScore:
row.technology_score ?? null,



currentSystems:
row.current_systems ?? {},



businessChallenges:
row.business_challenges ?? {},



automationOpportunities:
row.automation_opportunities ?? {},



aiOpportunities:
row.ai_opportunities ?? {},



recommendations:
row.recommendations ?? {},



roadmap30Days:
row.roadmap_30_days ?? {},



roadmap90Days:
row.roadmap_90_days ?? {},



roadmap12Months:
row.roadmap_12_months ?? {},



status:
(
[
"DRAFT",
"ANALYZING",
"COMPLETED",
"ARCHIVED"
].includes(row.status)

?

row.status

:

"DRAFT"

) as BlueprintStatus,



ownerId:
row.owner_id ?? "",



createdAt:
row.created_at,



updatedAt:
row.updated_at


});







const mapToRow = (
blueprint:Blueprint
)=>({

company_id:
blueprint.companyId,


opportunity_id:
blueprint.opportunityId ?? null,


title:
blueprint.title,


technology_score:
blueprint.technologyScore ?? null,


current_systems:
blueprint.currentSystems ?? {},


business_challenges:
blueprint.businessChallenges ?? {},


automation_opportunities:
blueprint.automationOpportunities ?? {},


ai_opportunities:
blueprint.aiOpportunities ?? {},


recommendations:
blueprint.recommendations ?? {},


roadmap_30_days:
blueprint.roadmap30Days ?? {},


roadmap_90_days:
blueprint.roadmap90Days ?? {},


roadmap_12_months:
blueprint.roadmap12Months ?? {},


status:
blueprint.status ?? "DRAFT",


owner_id:
blueprint.ownerId

});









export const BlueprintService = {



async getAll():Promise<Blueprint[]> {


const {
data,
error

}=await supabase

.from("blueprints")

.select("*")

.order(
"created_at",
{
ascending:false
}
);



if(error)
throw error;



return (data ?? []).map(mapFromRow);


},







async getById(
id:string
):Promise<Blueprint>{


const {
data,
error

}=await supabase

.from("blueprints")

.select("*")

.eq(
"id",
id
)

.single();



if(error)
throw error;



return mapFromRow(data);


},







async create(
blueprint:Blueprint
):Promise<Blueprint>{


const {
data,
error

}=await supabase

.from("blueprints")

.insert(
mapToRow(blueprint)
)

.select()

.single();



if(error)
throw error;



return mapFromRow(data);


},







async update(
blueprint:Blueprint
):Promise<Blueprint>{


const {
data,
error

}=await supabase

.from("blueprints")

.update(
mapToRow(blueprint)
)

.eq(
"id",
blueprint.id
)

.select()

.single();



if(error)
throw error;



return mapFromRow(data);


},







async remove(
id:string
):Promise<void>{


const {
error

}=await supabase

.from("blueprints")

.delete()

.eq(
"id",
id
);



if(error)
throw error;


}


};