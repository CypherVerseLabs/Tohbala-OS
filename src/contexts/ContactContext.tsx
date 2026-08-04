// src/contexts/ContactContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode
} from "react";

import { Contact } from "@/types/contact";
import { ContactService } from "@/services/contactService";




interface ContactContextType {

  contacts: Contact[];

  loading: boolean;

  error: string | null;


  loadContacts(): Promise<void>;


  addContact(
    contact: Contact
  ): Promise<void>;


  updateContact(
    contact: Contact
  ): Promise<void>;


  deleteContact(
    id:string
  ): Promise<void>;

}






const ContactContext =
createContext<ContactContextType | null>(null);









export function ContactProvider({
children
}:{
children:ReactNode
}){


const [
contacts,
setContacts
]=useState<Contact[]>([]);




const [
loading,
setLoading
]=useState<boolean>(false);




const [
error,
setError
]=useState<string|null>(null);









const loadContacts =
useCallback(async()=>{


try{


setLoading(true);

setError(null);



const data =
await ContactService.getAll();



setContacts(data);



}
catch(error:any){


console.error(
"Loading contacts failed",
error
);



setError(
error.message ??
"Failed loading contacts"
);



throw error;


}
finally{


setLoading(false);


}


},[]);










useEffect(()=>{


loadContacts()
.catch(()=>{});


},[
loadContacts
]);












const addContact =
useCallback(async(
contact:Contact
)=>{


try{


setError(null);



const created =
await ContactService.create(
contact
);



setContacts(prev=>[

...prev,

created

]);



}
catch(error:any){


console.error(
"Creating contact failed",
error
);



setError(
error.message ??
"Creating contact failed"
);



throw error;


}


},[]);













const updateContact =
useCallback(async(
contact:Contact
)=>{


try{


setError(null);



const updated =
await ContactService.update(
contact
);



setContacts(prev=>

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
"Updating contact failed",
error
);



setError(
error.message ??
"Updating contact failed"
);



throw error;


}


},[]);














const deleteContact =
useCallback(async(
id:string
)=>{


try{


setError(null);



await ContactService.remove(
id
);



setContacts(prev=>

prev.filter(item=>

item.id !== id

)

);



}
catch(error:any){


console.error(
"Deleting contact failed",
error
);



setError(
error.message ??
"Deleting contact failed"
);



throw error;


}


},[]);













return (

<ContactContext.Provider

value={{

contacts,

loading,

error,


loadContacts,


addContact,

updateContact,

deleteContact

}}

>


{children}


</ContactContext.Provider>

);


}












export function useContactContext(){


const context =
useContext(ContactContext);



if(!context){


throw new Error(
"useContactContext must be inside ContactProvider"
);


}



return context;


}