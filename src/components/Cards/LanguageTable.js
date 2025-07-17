import React from "react";

const LanguageTable = ({ languages }) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-lg text-blueGray-700">
              Language Learning Overview
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 align-middle py-3 text-xs uppercase font-semibold text-blueGray-500 bg-blueGray-50 text-blueGray-500 border border-blueGray-100">
                Language
              </th>
              <th className="px-6 align-middle py-3 text-xs uppercase font-semibold text-blueGray-500 bg-blueGray-50 text-blueGray-500 border border-blueGray-100">
                Instructors
              </th>
              <th className="px-6 align-middle py-3 text-xs uppercase font-semibold text-blueGray-500 bg-blueGray-50 text-blueGray-500 border border-blueGray-100">
                Students
              </th>
              <th className="px-6 align-middle py-3 text-xs uppercase font-semibold text-blueGray-500 bg-blueGray-50 text-blueGray-100 border border-blueGray-100">
                Sessions
              </th>
              <th className="px-6 align-middle py-3 text-xs uppercase font-semibold text-blueGray-500 bg-blueGray-50 text-blueGray-500 border border-blueGray-100">
                Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {languages.map((language, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-blueGray-100" : "bg-white"}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                  <div className="flex items-center">
                    <img
                      src={require(`assets/img/${language.image}`).default}
                      alt={`${language.name} flag`}
                      className="w-10 h-6 rounded mr-3"
                    />
                    <span className="ml-3 font-bold text-blueGray-600">{language.name}</span>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                  {language.instructors}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                  {language.students}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                  {language.sessions}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {language.rating}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LanguageTable;