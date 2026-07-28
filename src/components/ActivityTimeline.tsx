import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Phone,
  Mail,
  Calendar,
  FileText,
  MessageSquare,
  RefreshCw,
} from "lucide-react";

import {
  Activity,
} from "@/types/activity";

interface Props {
  activities: Activity[];
}

const icons = {
  call: Phone,
  email: Mail,
  meeting: Calendar,
  proposal: FileText,
  note: MessageSquare,
  status_change: RefreshCw,
};

const colors = {
  call: "bg-blue-100 text-blue-600",
  email: "bg-purple-100 text-purple-600",
  meeting: "bg-orange-100 text-orange-600",
  proposal: "bg-green-100 text-green-600",
  note: "bg-gray-100 text-gray-600",
  status_change: "bg-teal-100 text-teal-600",
};

const ActivityTimeline: React.FC<Props> = ({
  activities,
}) => {

  const sortedActivities = [...activities].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );

  return (

    <Card className="shadow-sm">

      <CardHeader className="border-b">

        <div className="flex justify-between items-center">

          <h2 className="text-lg font-bold">
            Activity Timeline
          </h2>

          <Badge variant="secondary">
            {activities.length}
          </Badge>

        </div>

      </CardHeader>

      <CardContent className="pt-6">

        {sortedActivities.length === 0 ? (

          <div className="text-center py-12">

            <MessageSquare className="mx-auto w-10 h-10 text-gray-300 mb-3" />

            <h3 className="font-semibold text-gray-600">
              No Activity Yet
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Calls, emails, meetings and notes will appear here.
            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {sortedActivities.map((activity, index) => {

              const Icon = icons[activity.type];

              return (

                <div
                  key={activity.id}
                  className="relative flex gap-4"
                >

                  {index !== sortedActivities.length - 1 && (

                    <div
                      className="
                      absolute
                      left-5
                      top-10
                      bottom-0
                      w-px
                      bg-gray-200
                      "
                    />

                  )}

                  <div
                    className={`
                    rounded-full
                    p-2
                    h-fit
                    z-10
                    ${colors[activity.type]}
                    `}
                  >

                    <Icon className="w-4 h-4" />

                  </div>

                  <div className="flex-1">

                    <div className="flex items-center gap-2 mb-1">

                      <h3 className="font-semibold">
                        {activity.title}
                      </h3>

                      <Badge
                        variant="outline"
                        className="capitalize"
                      >
                        {activity.type.replace("_", " ")}
                      </Badge>

                    </div>

                    <p className="text-sm text-gray-600">

                      {activity.description}

                    </p>

                    <p className="text-xs text-gray-400 mt-2">

                      {new Date(
                        activity.createdAt
                      ).toLocaleString()}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </CardContent>

    </Card>

  );

};

export default ActivityTimeline;