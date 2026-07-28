import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import OpportunityManager from './OpportunityManager';
import Analytics from './Analytics';
import CompanyManager from './CompanyManager';
import ActivityManager from './ActivityManager';
import PipelineBoard from './PipelineBoard';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {

switch(activeTab){

case "dashboard":
return <Dashboard/>;


case "opportunities":
  return <OpportunityManager />;

case "analytics":
return <Analytics/>;


case "pipeline":
return <PipelineBoard />;


case "companies":
return <CompanyManager />;


case "ai":
return (
<div className="p-6">
<h1 className="text-2xl font-bold">
AI Opportunity Scanner Coming Soon
</h1>
</div>
);


case "activities":
return <ActivityManager />;


case "settings":
return (
<div className="p-6">
<h1 className="text-2xl font-bold">
Settings
</h1>
</div>
);


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
        <Header onToggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
