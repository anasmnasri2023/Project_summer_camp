import React from "react";

// components
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ACTIVE USERS"
                  statTitle="1,254"
                  statArrow="up"
                  statPercent="4.6"
                  statPercentColor="text-emerald-500"
                  statDescripiron="This week"
                  statIconName="fas fa-user-graduate"
                  statIconColor="bg-indigo-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="COURSES"
                  statTitle="38"
                  statArrow="up"
                  statPercent="2.3"
                  statPercentColor="text-emerald-500"
                  statDescripiron="This month"
                  statIconName="fas fa-book-open"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SCHEDULED CALLS"
                  statTitle="212"
                  statArrow="down"
                  statPercent="1.8"
                  statPercentColor="text-red-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-video"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="COMPLETION RATE"
                  statTitle="82.4%"
                  statArrow="up"
                  statPercent="3.2"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Compared to last week"
                  statIconName="fas fa-check-circle"
                  statIconColor="bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
