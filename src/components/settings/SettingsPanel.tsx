import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  User,
  Building2,
  Shield,
  Brain,
} from "lucide-react";

import { useAuth } from "@/contexts/AuthContext";


const SettingsPanel: React.FC = () => {


  const { user } = useAuth();



  return (

    <div className="p-6 space-y-6">


      <div>

        <h1 className="
        text-3xl
        font-bold
        ">
          Settings
        </h1>


        <p className="text-gray-600 mt-2">
          Manage your Tohbala OS account and workspace.
        </p>


      </div>




      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
      ">


        <Card>

          <CardHeader>

            <CardTitle className="flex items-center gap-2">

              <User className="text-purple-600"/>

              Profile

            </CardTitle>

          </CardHeader>


          <CardContent>

            <p className="text-sm text-gray-600">
              Account email
            </p>


            <p className="font-semibold">
              {user?.email ?? "No user"}
            </p>


          </CardContent>


        </Card>




        <Card>

          <CardHeader>

            <CardTitle className="flex items-center gap-2">

              <Building2 className="text-teal-600"/>

              Organization

            </CardTitle>

          </CardHeader>


          <CardContent>

            <p className="text-sm text-gray-600">

              Company workspace settings coming next.

            </p>


          </CardContent>


        </Card>





        <Card>

          <CardHeader>

            <CardTitle className="flex items-center gap-2">

              <Shield className="text-blue-600"/>

              Security

            </CardTitle>

          </CardHeader>


          <CardContent>

            <p className="text-sm text-gray-600">

              Authentication and permissions.

            </p>


          </CardContent>


        </Card>





        <Card>

          <CardHeader>

            <CardTitle className="flex items-center gap-2">

              <Brain className="text-purple-600"/>

              AI Preferences

            </CardTitle>

          </CardHeader>


          <CardContent>

            <p className="text-sm text-gray-600">

              AI customization settings coming next.

            </p>


          </CardContent>


        </Card>


      </div>


    </div>

  );

};


export default SettingsPanel;