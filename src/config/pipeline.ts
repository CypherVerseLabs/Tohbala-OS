import { OpportunityStatus } from "@/types/opportunity";


export interface PipelineStage {

  id: OpportunityStatus;

  label: string;

  description: string;

  color: string;

  order: number;

}



export const pipelineStages: PipelineStage[] = [

  {
    id: "research",
    label: "Research",
    description:
      "Companies identified but not contacted yet.",
    color:
      "bg-gray-500",
    order: 1,
  },


  {
    id: "contacted",
    label: "Contacted",
    description:
      "Initial outreach sent.",
    color:
      "bg-blue-500",
    order: 2,
  },


  {
    id: "conversation",
    label: "Conversation",
    description:
      "Business owner has responded or engaged.",
    color:
      "bg-cyan-500",
    order: 3,
  },


  {
    id: "discovery",
    label: "Discovery",
    description:
      "Understanding business problems and opportunities.",
    color:
      "bg-purple-500",
    order: 4,
  },


  {
    id: "proposal",
    label: "Proposal",
    description:
      "Solution and pricing presented.",
    color:
      "bg-orange-500",
    order: 5,
  },


  {
    id: "client",
    label: "Client",
    description:
      "Active customer relationship.",
    color:
      "bg-green-500",
    order: 6,
  },


  {
    id: "lost",
    label: "Lost",
    description:
      "Opportunity closed without conversion.",
    color:
      "bg-red-500",
    order: 7,
  },

];





export const PIPELINE_STAGES = pipelineStages;





export const getPipelineStage = (
  status: OpportunityStatus
) => {

  return pipelineStages.find(
    (stage)=>
      stage.id === status
  );

};





export const getPipelineColor = (
  status: OpportunityStatus
) => {

  return (
    getPipelineStage(status)?.color
    ||
    "bg-gray-500"
  );

};





export const getPipelineLabel = (
  status: OpportunityStatus
) => {

  return (
    getPipelineStage(status)?.label
    ||
    status
  );

};