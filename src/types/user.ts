export type UserRole =
  | "ADMIN"
  | "REVENUE_MANAGER"
  | "SALES_REP"
  | "VIEWER";


export interface UserProfile {

  id:string;

  email:string;

  fullName?:string;

  companyName?:string;

  role:UserRole;

  avatarUrl?:string;

  createdAt:string;

  updatedAt:string;

}