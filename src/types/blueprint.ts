export type BlueprintStatus =
  | "DRAFT"
  | "ANALYZING"
  | "COMPLETED"
  | "ARCHIVED";



export interface Blueprint {


  id:string;



  companyId:string;



  opportunityId:string | null;



  title:string;



  technologyScore:number | null;



  currentSystems:Record<string,any>;



  businessChallenges:Record<string,any>;



  automationOpportunities:Record<string,any>;



  aiOpportunities:Record<string,any>;



  recommendations:Record<string,any>;



  roadmap30Days:Record<string,any>;



  roadmap90Days:Record<string,any>;



  roadmap12Months:Record<string,any>;



  status:BlueprintStatus;



  ownerId:string;



  createdAt:string;



  updatedAt:string;


}