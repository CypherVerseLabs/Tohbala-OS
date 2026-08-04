// src/contexts/BlueprintContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode
} from "react";


import { Blueprint } from "@/types/blueprint";
import { BlueprintService } from "@/services/blueprintService";





interface BlueprintContextType {


  blueprints: Blueprint[];

  loading:boolean;

  error:string|null;



  loadBlueprints():Promise<void>;

  refreshBlueprints():Promise<void>;



  getBlueprintById(
    id:string
  ):Promise<Blueprint>;



  addBlueprint(
    blueprint:Blueprint
  ):Promise<void>;



  updateBlueprint(
    blueprint:Blueprint
  ):Promise<void>;



  deleteBlueprint(
    id:string
  ):Promise<void>;


}








const BlueprintContext =
createContext<BlueprintContextType|null>(null);









export function BlueprintProvider({
children
}:{
children:ReactNode
}){


const [
blueprints,
setBlueprints
]=useState<Blueprint[]>([]);



const [
loading,
setLoading
]=useState(false);



const [
error,
setError
]=useState<string|null>(null);









const loadBlueprints =
useCallback(async()=>{


try{


setLoading(true);

setError(null);



const data =
await BlueprintService.getAll();



setBlueprints(data);



}
catch(error:any){


console.error(
"Loading blueprints failed",
error
);



setError(
error.message ??
"Failed loading blueprints"
);



}
finally{


setLoading(false);


}


},[]);









useEffect(()=>{


loadBlueprints();


},[
loadBlueprints
]);









const refreshBlueprints =
async()=>{

await loadBlueprints();

};









const getBlueprintById =
async(
id:string
)=>{


return await BlueprintService.getById(
id
);


};









const addBlueprint =
useCallback(async(
blueprint:Blueprint
)=>{


try{


setError(null);



const created =
await BlueprintService.create(
blueprint
);



setBlueprints(prev=>[

...prev,

created

]);



}
catch(error:any){


console.error(
"Creating blueprint failed",
error
);



setError(
error.message ??
"Creating blueprint failed"
);



throw error;


}


},[]);









const updateBlueprint =
useCallback(async(
blueprint:Blueprint
)=>{


try{


setError(null);



const updated =
await BlueprintService.update(
blueprint
);



setBlueprints(prev=>

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
"Updating blueprint failed",
error
);



setError(
error.message ??
"Updating blueprint failed"
);



throw error;


}


},[]);









const deleteBlueprint =
useCallback(async(
id:string
)=>{


try{


setError(null);



await BlueprintService.remove(
id
);



setBlueprints(prev=>

prev.filter(item=>

item.id !== id

)

);



}
catch(error:any){


console.error(
"Deleting blueprint failed",
error
);



setError(
error.message ??
"Deleting blueprint failed"
);



throw error;


}


},[]);









return (

<BlueprintContext.Provider

value={{

blueprints,

loading,

error,


loadBlueprints,

refreshBlueprints,


getBlueprintById,


addBlueprint,

updateBlueprint,

deleteBlueprint

}}

>

{children}

</BlueprintContext.Provider>

);


}









export function useBlueprintContext(){


const context =
useContext(BlueprintContext);



if(!context){


throw new Error(
"useBlueprintContext must be inside BlueprintProvider"
);


}



return context;


}