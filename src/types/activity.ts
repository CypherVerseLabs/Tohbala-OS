export type ActivityType =
  | "call"
  | "email"
  | "meeting"
  | "proposal"
  | "note"
  | "status_change";


export interface Activity {

  id:string;


  // Relations
  companyId?:string;

  opportunityId?:string;


  // Activity type
  type:ActivityType;


  // Content
  title:string;

  description:string;


  // Metadata
  createdAt:string;

}