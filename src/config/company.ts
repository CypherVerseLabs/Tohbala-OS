export type CompanySize =
  | "1-10"
  | "11-50"
  | "51-200"
  | "201-500"
  | "500+";


export interface Company {

  id: string;


  name: string;

  website?: string;

  industry: string;

  size?: CompanySize;


  description?: string;


  location?: string;


  primaryContact?: string;

  email?: string;

  phone?: string;


  createdAt: string;

  updatedAt: string;

}