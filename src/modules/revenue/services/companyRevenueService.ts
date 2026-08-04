import { Company } from "@/services/companies";


export interface RevenueCompany extends Company {

    revenueStatus:
    | "prospect"
    | "qualified"
    | "client"
    | "inactive";


    estimatedRevenue?: number;


    lastContactDate?: string;


    nextAction?: string;

}