import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Target } from "lucide-react";
import { Opportunity } from "@/types/opportunity";

interface PrioritiesCardProps {
  opportunities: Opportunity[];
}

export default function PrioritiesCard({
  opportunities,
}: PrioritiesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-purple-600" />
          Today's Priorities
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {opportunities.length === 0 ? (
          <p className="text-sm text-gray-500">
            No priority opportunities.
          </p>
        ) : (
          opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="border rounded-lg p-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">
                    {opportunity.companyName}
                  </h3>

                  <p className="text-sm text-gray-500 capitalize">
                    {opportunity.status}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-green-600">
                    $
                    {opportunity.estimatedValue.toLocaleString()}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-3">
                {opportunity.businessProblem}
              </p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}