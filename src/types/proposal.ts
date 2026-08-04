// src/types/proposal.ts

export type ProposalStatus =
  | "DRAFT"
  | "SENT"
  | "VIEWED"
  | "ACCEPTED"
  | "REJECTED"
  | "EXPIRED";



export interface ProposalServiceItem {

  name:string;

  description?:string;

  quantity?:number;

  price?:number;

}




export interface Proposal {


  id:string;



  companyId:string;



  opportunityId:string | null;



  blueprintId:string | null;



  title:string;



  companyName:string;



  industry:string;



  businessProblem:string;



  estimatedValue:number;



  services:ProposalServiceItem[];



  investment:number;



  timeline:string;



  status:ProposalStatus;



  ownerId:string;



  createdAt:string;



  updatedAt:string;


}