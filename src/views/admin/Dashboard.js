import React from "react";

// Composants personnalisés
import CardLearningProgressChart from "components/Cards/CardLearningProgressChart.js";
import CardLanguageLearningTraffic from "components/Cards/CardLanguageLearningTraffic.js";
import CardCourseVisits from "components/Cards/CardCourseVisits.js";
import CardCourseCompletionChart from "components/Cards/CardCourseCompletionChart.js";

export default function Dashboard() {
  return (
    <div className="px-4 md:px-10 mx-auto w-full">
      {/* Première ligne : Progress Chart + Learning Traffic */}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full xl:w-8/12 px-4 mb-6">
          <CardLearningProgressChart />
        </div>
        <div className="w-full xl:w-4/12 px-4 mb-6">
          <CardLanguageLearningTraffic />
        </div>
      </div>

      {/* Deuxième ligne : Course Visits + Course Completion */}
      <div className="flex flex-wrap -mx-4 mt-4">
        <div className="w-full xl:w-8/12 px-4 mb-6">
          <CardCourseVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4 mb-6">
          <CardCourseCompletionChart />
        </div>
      </div>
    </div>
  );
}
