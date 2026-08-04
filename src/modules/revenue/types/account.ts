export type AccountStatus =
  | "prospect"
  | "active-client"
  | "former-client"
  | "partner";


export interface Account {

  id:string;

  name:string;

  industry:string;

  website?:string;

  employeeCount?:number;

  status:AccountStatus;

  createdAt:string;

}