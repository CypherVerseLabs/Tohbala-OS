import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode
} from "react";

import { Company } from "@/config/company";
import { CompanyService } from "@/services/companyService";



interface CompanyContextType {

  companies: Company[];

  loading: boolean;

  error: string | null;


  loadCompanies(): Promise<void>;

  addCompany(
    company: Company
  ): Promise<void>;


  updateCompany(
    company: Company
  ): Promise<void>;


  deleteCompany(
    id:string
  ): Promise<void>;

}





const CompanyContext =
createContext<CompanyContextType | null>(null);







export function CompanyProvider({
children
}:{
children:ReactNode
}){


const [
companies,
setCompanies
]=useState<Company[]>([]);



const [
loading,
setLoading
]=useState<boolean>(false);



const [
error,
setError
]=useState<string|null>(null);








const loadCompanies =
useCallback(async()=>{


try{


setLoading(true);

setError(null);



const data =
await CompanyService.getAll();



setCompanies(data);



}
catch(error:any){


console.error(
"Loading companies failed",
error
);



setError(
error.message ??
"Failed loading companies"
);


throw error;


}
finally{


setLoading(false);


}


},[]);









useEffect(()=>{


loadCompanies()
.catch(()=>{});


},[
loadCompanies
]);









const addCompany =
useCallback(async(
company:Company
)=>{


try{


setError(null);



const created =
await CompanyService.create(
company
);



setCompanies(prev=>[

...prev,

created

]);



}
catch(error:any){


console.error(
"Creating company failed",
error
);



setError(
error.message ??
"Creating company failed"
);



throw error;


}


},[]);









const updateCompany =
useCallback(async(
company:Company
)=>{


try{


setError(null);



const updated =
await CompanyService.update(
company
);



setCompanies(prev=>

prev.map(item=>

item.id === updated.id

?

updated

:

item

)

);



}
catch(error:any){


console.error(
"Updating company failed",
error
);



setError(
error.message ??
"Updating company failed"
);



throw error;


}


},[]);









const deleteCompany =
useCallback(async(
id:string
)=>{


try{


setError(null);



await CompanyService.remove(
id
);



setCompanies(prev=>

prev.filter(item=>

item.id !== id

)

);



}
catch(error:any){


console.error(
"Deleting company failed",
error
);



setError(
error.message ??
"Deleting company failed"
);



throw error;


}


},[]);









return (

<CompanyContext.Provider

value={{

companies,

loading,

error,


loadCompanies,


addCompany,

updateCompany,

deleteCompany

}}

>


{children}


</CompanyContext.Provider>

);


}











export function useCompanyContext(){


const context =
useContext(CompanyContext);



if(!context){


throw new Error(
"useCompanyContext must be inside CompanyProvider"
);


}



return context;


}