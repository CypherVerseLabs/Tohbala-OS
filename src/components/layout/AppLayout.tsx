import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAppContext } from "@/contexts/AppContext";
import { useIsMobile } from "@/hooks/use-mobile";

import Sidebar from "../Sidebar";
import Header from "../Header/Header";

import Dashboard from "../Dashboard";
import OpportunityManager from "../Opportunity/OpportunityManager";
import Analytics from "../Analytics";
import CompanyManager from "../company/CompanyManager";
import ActivityManager from "../Activity/ActivityManager";
import PipelineBoard from "../PipelineBoard/PipelineBoard";
import AIOpportunityScanner from "@/components/ai/AIOpportunityScanner";
import SettingsPanel from "../settings/SettingsPanel";
import RevenueDashboard from "@/modules/revenue/pages/RevenueDashboard";


const AppLayout: React.FC = () => {


  const {
    sidebarOpen,
    toggleSidebar
  } = useAppContext();



  const navigate = useNavigate();


  const isMobile = useIsMobile();



  const [
    activeTab,
    setActiveTab
  ] = useState("dashboard");





  






  const renderContent = () => {


    switch(activeTab){


      case "dashboard":

        return <Dashboard/>;

      case "revenue":
        return <RevenueDashboard />;

      case "opportunities":

        return <OpportunityManager />;



      case "analytics":

        return <Analytics/>;



      case "pipeline":

        return <PipelineBoard />;



      case "companies":

        return <CompanyManager />;



      case "ai":

        return <AIOpportunityScanner />;



      case "activities":

        return <ActivityManager />;



      case "settings":

        return <SettingsPanel />;



      default:

        return <Dashboard/>;


    }


  };






  return (

    <div className="flex h-screen bg-gray-50">


      <Sidebar
  activeTab={activeTab}
  onTabChange={setActiveTab}
  isOpen={sidebarOpen}
/>




      <div className="flex-1 flex flex-col overflow-hidden">



        <Header

          onToggleSidebar={toggleSidebar}

        />




        <main className="flex-1 overflow-y-auto">


          {renderContent()}


        </main>



      </div>



    </div>


  );


};



export default AppLayout;