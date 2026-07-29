import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Brain,
  Sparkles,
  Target,
  TrendingUp,
  Lightbulb,
} from "lucide-react";


const AIOpportunityScanner: React.FC = () => {


  const [scanning, setScanning] = useState(false);

  const [results, setResults] = useState<string[]>([]);



  const runScan = () => {

    setScanning(true);

    setResults([]);


    setTimeout(() => {

      setResults([
        "High value opportunity detected in current pipeline.",
        "Proposal stage deals need follow-up attention.",
        "Companies with automation problems are strong candidates.",
        "Recommended action: schedule discovery meetings.",
      ]);


      setScanning(false);


    }, 1500);

  };



  return (

    <div className="p-6 space-y-6">


      <div>

        <h1 className="text-3xl font-bold flex items-center gap-3">

          <Brain className="text-purple-600"/>

          AI Opportunity Scanner

        </h1>


        <p className="text-gray-600 mt-2">

          Analyze your business pipeline and discover growth opportunities.

        </p>


      </div>




      <Card>


        <CardHeader>

          <CardTitle className="flex items-center gap-2">

            <Sparkles className="text-purple-600"/>

            Intelligence Engine

          </CardTitle>


        </CardHeader>



        <CardContent>


          <button

            onClick={runScan}

            className="
            bg-purple-600 
            text-white 
            px-5 
            py-3 
            rounded-lg
            hover:bg-purple-700
            "

          >

            {scanning 
              ? "Scanning Business Data..."
              : "Run Opportunity Scan"
            }


          </button>



        </CardContent>


      </Card>





      {results.length > 0 && (


        <Card>


          <CardHeader>


            <CardTitle>

              AI Findings

            </CardTitle>


          </CardHeader>



          <CardContent className="space-y-4">


            {results.map((item,index)=>(


              <div

                key={index}

                className="
                border
                rounded-lg
                p-4
                flex
                gap-3
                items-start
                "

              >


                {index === 0 && (
                  <Target className="text-purple-600"/>
                )}


                {index === 1 && (
                  <TrendingUp className="text-green-600"/>
                )}


                {index > 1 && (
                  <Lightbulb className="text-yellow-500"/>
                )}



                <p>

                  {item}

                </p>


              </div>


            ))}


          </CardContent>


        </Card>


      )}


    </div>


  );

};


export default AIOpportunityScanner;