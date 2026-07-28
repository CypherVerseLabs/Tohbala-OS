export type OpportunityStatus =
  | "research"
  | "contacted"
  | "conversation"
  | "discovery"
  | "proposal"
  | "client"
  | "lost";


export type OpportunitySource =
  | "LinkedIn"
  | "Referral"
  | "Networking"
  | "Cold Outreach"
  | "Website"
  | "Google Ads"
  | "Facebook"
  | "Instagram";


export type TechnologyNeed =
  | "AI Automation"
  | "CRM"
  | "Customer Portal"
  | "Mobile App"
  | "API Integration"
  | "Workflow Automation"
  | "Data Dashboard"
  | "Custom Software";


export interface Opportunity {

  id: string;

companyId: string;
  // Contact Information
  contactName: string;

  email: string;

  phone: string;



  // Company Information
  companyName: string;

  website: string;

  industry: string;

  companySize: string;



  // Discovery Information
  businessProblem: string;

  currentProcess?: string;

  proposedSolution: string;



  // Technology Opportunity
  technologyNeeds: TechnologyNeed[];



  // Pipeline
  status: OpportunityStatus;

  estimatedValue: number;



  // Relationship Tracking
  source: OpportunitySource;

  lastContact: string;

  nextFollowUp: string;



  // Notes
  notes: string;



  // Metadata
  createdAt: string;

  updatedAt: string;

}