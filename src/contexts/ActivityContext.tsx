import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { Activity } from "@/types/activity";
import { ActivityService } from "@/services/activityService";



interface ActivityContextType {

  activities: Activity[];

  addActivity(
    activity: Activity
  ): Promise<void>;


  updateActivity(
    activity: Activity
  ): Promise<void>;


  deleteActivity(
    id: string
  ): Promise<void>;


  refreshActivities(): Promise<void>;

}



const ActivityContext =
createContext<ActivityContextType | null>(null);





export function ActivityProvider({
  children
}:{
  children: ReactNode;
}) {



const [
  activities,
  setActivities
] = useState<Activity[]>([]);






const refreshActivities = async()=>{

try{

const data =
await ActivityService.getAll();


setActivities(data);


}catch(error){

console.error(
"Loading activities failed",
error
);

}

};







useEffect(()=>{

refreshActivities();

},[]);









const addActivity = async(
  activity: Activity
)=>{


try{


const created =
await ActivityService.create(activity);



setActivities(prev=>[

created,

...prev

]);



}catch(error){

console.error(
"Create activity failed",
error
);

throw error;

}


};









const updateActivity = async(
  activity: Activity
)=>{


try{


const updated =
await ActivityService.update(activity);



setActivities(prev=>

prev.map(item=>

item.id === updated.id

?

updated

:

item

)

);



}catch(error){

console.error(
"Update activity failed",
error
);

throw error;

}


};









const deleteActivity = async(
  id:string
)=>{


try{


await ActivityService.remove(id);



setActivities(prev=>

prev.filter(item=>

item.id !== id

)

);



}catch(error){

console.error(
"Delete activity failed",
error
);

throw error;

}


};









return (

<ActivityContext.Provider

value={{

activities,

addActivity,

updateActivity,

deleteActivity,

refreshActivities

}}

>

{children}

</ActivityContext.Provider>

);


}









export function useActivityContext(){

const context =
useContext(ActivityContext);



if(!context){

throw new Error(
"useActivityContext must be inside ActivityProvider"
);

}



return context;

}