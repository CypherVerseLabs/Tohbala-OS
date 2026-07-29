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