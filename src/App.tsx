// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";

import { AuthProvider } from "@/contexts/AuthContext";
import { AppProvider } from "@/contexts/AppContext";
import { DataProvider } from "@/contexts/DataContext";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";



// Revenue Layout
import RevenueLayout from "./components/layout/RevenueLayout";



// Revenue Pages

import AccountsPage from "./modules/revenue/accounts/pages/AccountsPage";
import AccountDetail from "./modules/revenue/accounts/pages/AccountDetail";

import RevenueDashboard from "./modules/revenue/pages/RevenueDashboard";
import RevenuePipeline from "./modules/revenue/pages/RevenuePipeline";
import RevenueProposals from "./modules/revenue/pages/RevenueProposals";
import RevenueMeetings from "./modules/revenue/pages/RevenueMeetings";
import RevenueForecast from "./modules/revenue/pages/RevenueForecast";
import RevenueAI from "./modules/revenue/pages/RevenueAI";
import RevenueSettings from "./modules/revenue/pages/RevenueSettings";



// Revenue Blueprint Pages

import RevenueBlueprints from "./modules/revenue/blueprints/pages/RevenueBlueprints";
import BlueprintCreate from "./modules/revenue/blueprints/BlueprintCreate";
import BlueprintDetail from "./modules/revenue/blueprints/BlueprintDetail";
import ProposalCreate from "./modules/revenue/proposals/pages/ProposalCreate";



// Proposal Pages






const queryClient = new QueryClient();





const App = () => (

<ThemeProvider defaultTheme="light">


<QueryClientProvider client={queryClient}>


<TooltipProvider>


<BrowserRouter>


<AuthProvider>


<AppProvider>


<DataProvider>


<Toaster />

<Sonner />




<Routes>





<Route
path="/"
element={
<ProtectedRoute>

<Index />

</ProtectedRoute>
}
/>





<Route
path="/login"
element={<Login />}
/>









{/* Revenue Dashboard */}


<Route
path="/revenue"
element={

<ProtectedRoute>

<RevenueLayout>

<RevenueDashboard />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Revenue Accounts */}


<Route
path="/revenue/accounts"
element={

<ProtectedRoute>

<RevenueLayout>

<AccountsPage />

</RevenueLayout>

</ProtectedRoute>

}
/>






<Route
path="/revenue/accounts/:id"
element={

<ProtectedRoute>

<RevenueLayout>

<AccountDetail />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Revenue Pipeline */}


<Route
path="/revenue/pipeline"
element={

<ProtectedRoute>

<RevenueLayout>

<RevenuePipeline />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Revenue Proposals */}


<Route
path="/revenue/proposals"
element={

<ProtectedRoute>

<RevenueLayout>

<RevenueProposals />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Create Proposal */}


<Route
path="/revenue/proposals/create"
element={

<ProtectedRoute>

<RevenueLayout>

<ProposalCreate />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Revenue Meetings */}


<Route
path="/revenue/meetings"
element={

<ProtectedRoute>

<RevenueLayout>

<RevenueMeetings activities={[]} />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Revenue Forecast */}


<Route
path="/revenue/forecast"
element={

<ProtectedRoute>

<RevenueLayout>

<RevenueForecast />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Revenue AI */}


<Route
path="/revenue/ai"
element={

<ProtectedRoute>

<RevenueLayout>

<RevenueAI />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Revenue Settings */}


<Route
path="/revenue/settings"
element={

<ProtectedRoute>

<RevenueLayout>

<RevenueSettings />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Revenue Blueprints */}


<Route
path="/revenue/blueprints"
element={

<ProtectedRoute>

<RevenueLayout>

<RevenueBlueprints />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Create Blueprint */}


<Route
path="/revenue/blueprints/new"
element={

<ProtectedRoute>

<RevenueLayout>

<BlueprintCreate />

</RevenueLayout>

</ProtectedRoute>

}
/>









{/* Blueprint Detail */}


<Route
path="/revenue/blueprints/:id"
element={

<ProtectedRoute>

<RevenueLayout>

<BlueprintDetail />

</RevenueLayout>

</ProtectedRoute>

}
/>









<Route
path="*"
element={<NotFound />}
/>





</Routes>







</DataProvider>


</AppProvider>


</AuthProvider>


</BrowserRouter>


</TooltipProvider>


</QueryClientProvider>


</ThemeProvider>

);



export default App;