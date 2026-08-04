// src/contexts/OpportunityContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode
} from "react";


import { Opportunity } from "@/types/opportunity";
import { OpportunityService } from "@/services/opportunityService";





interface OpportunityContextType {


  opportunities: Opportunity[];

  loading:boolean;

  error:string|null;



  loadOpportunities():Promise<void>;

  refreshOpportunities():Promise<void>;



  getOpportunityById(
    id:string
  ):Promise<Opportunity>;



  addOpportunity(
    opportunity:Opportunity
  ):Promise<void>;



  updateOpportunity(
    opportunity:Opportunity
  ):Promise<void>;



  deleteOpportunity(
    id:string
  ):Promise<void>;

}





const OpportunityContext =
createContext<OpportunityContextType|null>(null);









export function OpportunityProvider({
children
}:{
children:ReactNode
}){


const [
opportunities,
setOpportunities
]=useState<Opportunity[]>([]);



const [
loading,
setLoading
]=useState(false);



const [
error,
setError
]=useState<string|null>(null);









const loadOpportunities =
useCallback(async()=>{


try{


setLoading(true);

setError(null);



const data =
await OpportunityService.getAll();



setOpportunities(data);



}
catch(error:any){


console.error(
"Loading opportunities failed",
error
);



setError(
error.message ??
"Failed loading opportunities"
);



}
finally{


setLoading(false);


}


},[]);









useEffect(()=>{


loadOpportunities();


},[
loadOpportunities
]);









const refreshOpportunities =
async()=>{

await loadOpportunities();

};









const getOpportunityById =
async(
id:string
)=>{


return await OpportunityService.getById(
id
);


};









const addOpportunity =
useCallback(async(
opportunity:Opportunity
)=>{


try{


setError(null);



const created =
await OpportunityService.create(
opportunity
);



setOpportunities(prev=>[

...prev,

created

]);



}
catch(error:any){


setError(
error.message ??
"Creating opportunity failed"
);



throw error;


}


},[]);









const updateOpportunity =
useCallback(async(
opportunity:Opportunity
)=>{


try{


setError(null);



const updated =
await OpportunityService.update(
opportunity
);



setOpportunities(prev=>

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


setError(
error.message ??
"Updating opportunity failed"
);



throw error;


}


},[]);









const deleteOpportunity =
useCallback(async(
id:string
)=>{


try{


setError(null);



await OpportunityService.remove(
id
);



setOpportunities(prev=>

prev.filter(item=>

item.id !== id

)

);



}
catch(error:any){


setError(
error.message ??
"Deleting opportunity failed"
);



throw error;


}


},[]);









return (

<OpportunityContext.Provider

value={{

opportunities,

loading,

error,


loadOpportunities,

refreshOpportunities,


getOpportunityById,


addOpportunity,

updateOpportunity,

deleteOpportunity

}}

>

{children}

</OpportunityContext.Provider>

);


}









export function useOpportunityContext(){


const context =
useContext(OpportunityContext);



if(!context){


throw new Error(
"useOpportunityContext must be inside OpportunityProvider"
);


}



return context;


}