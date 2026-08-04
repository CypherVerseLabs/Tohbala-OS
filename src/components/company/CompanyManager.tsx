import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import CompanyCard from "./CompanyCard";
import CompanyForm from "./CompanyForm";
import CompanyDetails from "./CompanyDetails";

import { Company } from "@/config/company";



const CompanyManager: React.FC = () => {


  const {
  companies,
  activities,
  addCompany,
  updateCompany,
  deleteCompany,
  addActivity,
  opportunities,
} = useData();


  const [open, setOpen] =
    useState(false);


  const [selectedCompany, setSelectedCompany] =
    useState<Company>();


  const [showDetails, setShowDetails] =
    useState(false);





  const handleAddCompany = (
  data: Omit<Company, "id">
) => {


  // EDIT EXISTING COMPANY
  if(selectedCompany){

    updateCompany({

      ...selectedCompany,

      ...data,

      id:selectedCompany.id,

      updatedAt:
      new Date().toISOString()

    });


    addActivity({
  id: Date.now().toString(),

  companyId: selectedCompany.id,

  type: "note",

  title: "Company Updated",

  description: `${data.name} information was updated.`,

  createdAt: new Date().toISOString(),

  ownerId: selectedCompany.ownerId,
});


  }


  // CREATE NEW COMPANY
  else {


    const newCompany:Company={

      ...data,

      id:
      Date.now().toString(),

      createdAt:
      new Date().toISOString(),

      updatedAt:
      new Date().toISOString()

    };


    addCompany(newCompany);


    addActivity({
      id: Date.now().toString(),

      companyId: newCompany.id,

      type: "note",

      title: "Company Created",

      description: `${newCompany.name} was added.`,

      createdAt: new Date().toISOString(),
      ownerId: ""
    });


  }


};





  const handleDeleteCompany = (
    id:string
  ) => {

    deleteCompany(id);

  };





  return (

    <div className="p-6 space-y-6">


      <div className="flex justify-between">


        <div>

          <h1 className="text-3xl font-bold">
            Companies
          </h1>


          <p className="text-gray-600">
            Manage business relationships
          </p>

        </div>



        <Button

          onClick={()=>{
            setSelectedCompany(undefined);
            setOpen(true);
          }}

        >

          <Plus className="w-4 h-4 mr-2"/>

          New Company

        </Button>


      </div>






      {!showDetails && (

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >


          {
          companies.map(company=>(


            <CompanyCard

              key={company.id}

              company={company}


              onView={(company)=>{

                setSelectedCompany(company);

                setShowDetails(true);

              }}



              onEdit={(company)=>{

                setSelectedCompany(company);

                setOpen(true);

              }}



              onDelete={handleDeleteCompany}


            />


          ))

          }


        </div>

      )}






      {
      showDetails &&
      selectedCompany && (


        <CompanyDetails

          company={selectedCompany}

          onBack={()=>{

            setShowDetails(false);

            setSelectedCompany(undefined);

          }}

        />


      )

      }







      <CompanyForm

        isOpen={open}


        onClose={()=>{

          setOpen(false);

          setSelectedCompany(undefined);

        }}


        onSubmit={handleAddCompany}


        initialData={selectedCompany}


      />



    </div>

  );

};


export default CompanyManager;

function useData(): { companies: any; activities: any; addCompany: any; updateCompany: any; deleteCompany: any; addActivity: any; opportunities: any; } {
  throw new Error("Function not implemented.");
}
