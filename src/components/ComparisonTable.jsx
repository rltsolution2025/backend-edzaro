import React from "react";

const ComparisonTable = () => {
  const data = [
     {
      feature: "AWS Certified Cloud Practitioner",
      other: false,
      ours: true,
    },
    {
      feature: "Real work experience",
      other: false,
      ours: true,
    },
    {
      feature: "True, project-based learning",
      other: false,
      ours: true,
    },
    {
      feature: "Live sessions & mentorship",
      other: true,
      ours: true,
    },
    {
      feature: "AI-driven software development",
      other: false,
      ours: true,
    },
    {
      feature: "Job-ready portfolio",
      other: false,
      ours: true,
    },
    {
      feature: "Externship with top companies",
      other: false,
      ours: true,
    },
  ];

  return (
   <div className="p-6 my-5">
  <table className="w-full border  border-separate rounded-lg overflow-hidden shadow-md mx-auto">
    <thead>
      <tr>
        <th className="p-3 border border-blue-500 bg-blue-500 text-black">Features</th>
        <th className="p-3 border border-blue-500 bg-blue-500 text-black">Other Institute</th>
        <th className="p-3 border border-blue-500 bg-blue-500 text-black">RLT Edzaro</th>
      </tr>
    </thead>

    <tbody>
      {data.map((row, idx) => (
        <tr
          key={idx}
          className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
        >
          <td className="p-3 font-medium border border-blue-500">{row.feature}</td>
          <td className="text-center p-3 border border-blue-500">
            {row.other ? "✔️" : "❌"}
          </td>
          <td className="text-center p-3 bg-yellow-50 border border-blue-500">
            {row.ours ? "✔️" : "❌"}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default ComparisonTable;
