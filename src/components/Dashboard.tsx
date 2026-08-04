import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Target,
  DollarSign,
  Users,
  Brain,
  ArrowUpRight,
  Building2,
  CalendarDays,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { useData } from "@/contexts/DataContext";


const Dashboard: React.FC = () => {

  const {
    companies,
    opportunities,
    activities,
  } = useData();


  const pipelineStages = [
    "research",
    "contacted",
    "conversation",
    "discovery",
    "proposal",
    "client",
    "lost",
  ];


  const activeOpportunities = opportunities.filter(
    item => item.status !== "lost"
  ).length;


  const clients = opportunities.filter(
    item => item.status === "client"
  ).length;


  const totalPipeline = opportunities.reduce(
    (sum, item) => sum + item.estimatedValue,
    0
  );


  const discoveryCalls = activities.filter(
    item =>
      item.title
        .toLowerCase()
        .includes("discovery")
  ).length;


  const stats = [
    {
      title: "Active Opportunities",
      value: activeOpportunities,
      description: "Live sales pipeline",
      icon: Target,
    },
    {
      title: "Pipeline Value",
      value: `$${totalPipeline.toLocaleString()}`,
      description: "Current opportunity value",
      icon: DollarSign,
    },
    {
      title: "Discovery Calls",
      value: discoveryCalls,
      description: "Tracked activities",
      icon: CalendarDays,
    },
    {
      title: "Active Clients",
      value: clients,
      description: "Closed opportunities",
      icon: Users,
    },
  ];


  const pipeline = pipelineStages.map(stage => {

    const stageOpps = opportunities.filter(
      item => item.status === stage
    );


    const value = stageOpps.reduce(
      (sum, item) =>
        sum + item.estimatedValue,
      0
    );


    return {
      stage,
      count: stageOpps.length,
      value: `$${value.toLocaleString()}`,
    };

  });


  const recentOpportunities =
    opportunities.slice(0, 3);


  const [aiInsights, setAiInsights] =
    useState<string[]>([]);


  const [loadingAI, setLoadingAI] =
    useState(false);



  useEffect(() => {

    setLoadingAI(true);


    setTimeout(() => {

      setAiInsights([
        `${companies.length} companies currently tracked.`,
        `${opportunities.filter(o => o.status === "proposal").length} proposals need attention.`,
        `${opportunities.filter(o => o.status === "research").length} prospects awaiting outreach.`,
        `Pipeline value: $${totalPipeline.toLocaleString()}.`,
      ]);


      setLoadingAI(false);

    },500);


  },[
    companies,
    opportunities,
    totalPipeline
  ]);

    return (

    <div className="min-h-screen bg-background p-6 space-y-8">


      {/* Header */}

      <div className="flex flex-col gap-2">

        <div className="flex items-center gap-3">

          <div className="p-3 rounded-xl bg-primary/10">

            <Sparkles className="w-6 h-6 text-primary" />

          </div>


          <h1 className="text-3xl font-bold tracking-tight text-foreground">

            Tohbala Command Center

          </h1>

        </div>


        <p className="text-muted-foreground max-w-2xl">

          Your business operating system for opportunities,
          technology, revenue, and growth.

        </p>


      </div>



      {/* KPI Cards */}


      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        xl:grid-cols-4 
        gap-6
      ">


        {stats.map(stat => (

          <Card
            key={stat.title}
            className="
              border-border
              bg-card
              hover:shadow-lg
              transition-all
            "
          >


            <CardHeader
              className="
                flex
                flex-row
                items-center
                justify-between
                pb-2
              "
            >

              <CardTitle className="
                text-sm
                font-medium
                text-muted-foreground
              ">

                {stat.title}

              </CardTitle>


              <div className="
                p-2
                rounded-lg
                bg-primary/10
              ">

                <stat.icon
                  className="
                    w-5
                    h-5
                    text-primary
                  "
                />

              </div>


            </CardHeader>


            <CardContent>


              <div className="
                text-3xl
                font-bold
                text-foreground
              ">

                {stat.value}

              </div>


              <div className="
                flex
                items-center
                gap-1
                mt-2
                text-sm
                text-muted-foreground
              ">


                <TrendingUp
                  className="
                    w-4
                    h-4
                    text-primary
                  "
                />


                {stat.description}


              </div>


            </CardContent>


          </Card>


        ))}


      </div>





      {/* Pipeline */}


      <Card className="
        bg-card
        border-border
      ">


        <CardHeader>


          <CardTitle>

            Opportunity Pipeline

          </CardTitle>


        </CardHeader>



        <CardContent>


          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-5
            gap-4
          ">


            {pipeline.map(item => (

              <div
                key={item.stage}
                className="
                  rounded-xl
                  border
                  border-border
                  bg-background
                  p-5
                  hover:border-primary/40
                  transition
                "
              >


                <p className="
                  text-sm
                  font-medium
                  text-muted-foreground
                  capitalize
                ">

                  {item.stage}

                </p>



                <p className="
                  text-3xl
                  font-bold
                  mt-3
                  text-foreground
                ">

                  {item.count}

                </p>



                <p className="
                  text-sm
                  text-muted-foreground
                ">

                  opportunities

                </p>



                <p className="
                  mt-4
                  font-semibold
                  text-primary
                ">

                  {item.value}

                </p>


              </div>

            ))}


          </div>


        </CardContent>


      </Card>

            {/* Priority Opportunities + AI */}

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-6
      ">


        {/* Opportunities */}

        <Card className="
          lg:col-span-2
          bg-card
          border-border
        ">


          <CardHeader>

            <CardTitle>

              Priority Opportunities

            </CardTitle>

          </CardHeader>



          <CardContent className="space-y-4">


            {recentOpportunities.length === 0 ? (

              <p className="
                text-muted-foreground
              ">

                No opportunities yet.

              </p>


            ) : (


              recentOpportunities.map(item => (


                <div
                  key={item.id}
                  className="
                    rounded-xl
                    border
                    border-border
                    p-5
                    bg-background
                    hover:shadow-md
                    transition
                  "
                >


                  <div className="
                    flex
                    justify-between
                    gap-4
                  ">


                    <div>


                      <h3 className="
                        font-semibold
                        text-foreground
                      ">

                        {item.companyName}

                      </h3>


                      <p className="
                        text-sm
                        text-muted-foreground
                      ">

                        {item.industry}

                      </p>


                    </div>



                    <div className="text-right">


                      <p className="
                        font-bold
                        text-primary
                      ">

                        ${item.estimatedValue.toLocaleString()}

                      </p>



                      <span className="
                        inline-flex
                        mt-2
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        bg-primary/10
                        text-primary
                        capitalize
                      ">

                        {item.status}

                      </span>


                    </div>


                  </div>



                  <p className="
                    mt-4
                    text-sm
                    text-muted-foreground
                  ">

                    {item.businessProblem}

                  </p>


                </div>


              ))

            )}


          </CardContent>


        </Card>





        {/* AI Intelligence */}


        <Card className="
          bg-card
          border-border
        ">


          <CardHeader>


            <CardTitle className="
              flex
              items-center
              gap-2
            ">


              <Brain
                className="
                  w-5
                  h-5
                  text-primary
                "
              />


              AI Intelligence


            </CardTitle>


          </CardHeader>




          <CardContent>


            <div className="space-y-4">


              {loadingAI ? (


                <p className="
                  text-sm
                  text-muted-foreground
                ">

                  AI is analyzing your business...

                </p>


              ) : (


                aiInsights.map(item => (


                  <div
                    key={item}
                    className="
                      flex
                      gap-3
                      items-start
                    "
                  >


                    <div className="
                      w-2
                      h-2
                      rounded-full
                      bg-primary
                      mt-2
                    "/>


                    <p className="
                      text-sm
                      text-foreground
                    ">

                      {item}

                    </p>


                  </div>


                ))


              )}


            </div>


          </CardContent>


        </Card>


      </div>





      {/* Business Overview */}


      <Card className="
        bg-card
        border-border
      ">


        <CardHeader>

          <CardTitle>

            Business Overview

          </CardTitle>

        </CardHeader>



        <CardContent>


          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          ">



            <OverviewItem
              icon={<Building2 />}
              label="Companies Tracked"
              value={companies.length}
            />



            <OverviewItem
              icon={<Target />}
              label="Solutions Identified"
              value={opportunities.length}
            />



            <OverviewItem
              icon={<DollarSign />}
              label="Projected Revenue"
              value={`$${totalPipeline.toLocaleString()}`}
            />



          </div>


        </CardContent>


      </Card>


    </div>

  );

};





const OverviewItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) => (

  <div className="
    flex
    items-center
    gap-4
  ">


    <div className="
      p-3
      rounded-xl
      bg-primary/10
      text-primary
    ">

      {icon}

    </div>



    <div>


      <p className="
        text-sm
        text-muted-foreground
      ">

        {label}

      </p>



      <p className="
        text-2xl
        font-bold
        text-foreground
      ">

        {value}

      </p>


    </div>


  </div>

);



export default Dashboard;