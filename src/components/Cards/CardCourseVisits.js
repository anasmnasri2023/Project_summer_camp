import React from "react";

export default function CardCourseVisits() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow rounded">
      <div className="rounded-t px-2 py-1 border-0">
        <div className="flex items-center">
          <div className="px-1">
            <h3 className="font-semibold text-xs text-blueGray-700">
              Course Engagement
            </h3>
          </div>
          <div className="px-1 text-right">
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold px-1 py-0.5 rounded focus:outline-none mr-0.5 ease-linear transition-all duration-150"
              type="button"
            >
              See all
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-2 bg-blueGray-50 text-blueGray-500 border border-blueGray-100 py-1 text-xs uppercase font-semibold text-left">
                Course
              </th>
              <th className="px-2 bg-blueGray-50 text-blueGray-500 border border-blueGray-100 py-1 text-xs uppercase font-semibold text-left">
                Enrolled
              </th>
              <th className="px-2 bg-blueGray-50 text-blueGray-500 border border-blueGray-100 py-1 text-xs uppercase font-semibold text-left">
                Active
              </th>
              <th className="px-2 bg-blueGray-50 text-blueGray-500 border border-blueGray-100 py-1 text-xs uppercase font-semibold text-left">
                Completion
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-t-0 px-2 border text-xs p-0.5 text-left flex items-center">
                <img
                  src={require("assets/img/anglais.jpg").default}
                  alt="English flag"
                  className="w-3 h-2 mr-2"
                />
                English Beginner
              </th>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                1,569
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                1,240
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                <i className="fas fa-arrow-up text-emerald-500 mr-2"></i>
                79.1%
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-2 border text-xs p-0.5 text-left flex items-center">
                <img
                  src={require("assets/img/espagnol.png").default}
                  alt="Spanish flag"
                  className="w-3 h-2 mr-2"
                />
                Spanish Intermediate
              </th>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                1,285
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                1,019
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                <i className="fas fa-arrow-up text-emerald-500 mr-2"></i>
                79.3%
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-2 border text-xs p-0.5 text-left flex items-center">
                <img
                  src={require("assets/img/france.png").default}
                  alt="French flag"
                  className="w-3 h-2 mr-2"
                />
                French Advanced
              </th>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                1,013
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                794
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                <i className="fas fa-arrow-down text-orange-500 mr-2"></i>
                78.4%
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-2 border text-xs p-0.5 text-left flex items-center">
                <img
                  src={require("assets/img/allemagne.png").default}
                  alt="German flag"
                  className="w-3 h-2 mr-2"
                />
                German Conversation
              </th>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                850
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                647
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                <i className="fas fa-arrow-up text-emerald-500 mr-2"></i>
                76.1%
              </td>
            </tr>
            <tr>
              <th className="border-t-0 px-2 border text-xs p-0.5 text-left flex items-center">
                <img
                  src={require("assets/img/italie.png").default}
                  alt="Italian flag"
                  className="w-3 h-2 mr-2"
                />
                Italian Basics
              </th>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                795
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                590
              </td>
              <td className="border-t-0 px-2 border text-xs p-0.5">
                <i className="fas fa-arrow-down text-red-500 mr-2"></i>
                74.2%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}