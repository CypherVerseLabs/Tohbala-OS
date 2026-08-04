export type ActivityType =
  | "call"
  | "email"
  | "meeting"
  | "proposal"
  | "note"
  | "status_change";


export interface Activity {

  id:string;


  /**
   * Supabase authenticated user owner
   */
  ownerId:string;


  /**
   * Related records
   */
  companyId?:string;

  opportunityId?:string;


  /**
   * Activity classification
   */
  type:ActivityType;


  /**
   * Activity content
   */
  title:string;

  description?:string;


  /**
   * Audit fields
   */
  createdAt:string;

}