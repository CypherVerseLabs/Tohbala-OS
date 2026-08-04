// src/modules/revenue/accounts/models/RevenueAccount.ts

export interface RevenueAccount {

  id:string;

  name:string;

  industry:string;

  status:
  | "prospect"
  | "active"
  | "client"
  | "inactive";


  revenuePotential:number;

  currentRevenue:number;


  health:
  | "excellent"
  | "good"
  | "attention"
  | "risk";


  lastActivity?:string;


  opportunityCount:number;

}