import React from "react";

// components
import LanguageTable from "components/Cards/LanguageTable.js";

export default function Tables() {
  const languages = [
    {
      name: "Spanish",
      image: "espagnol.png",
      instructors: 12,
      students: 245,
      sessions: 150,
      rating: 4.8,
    },
    {
      name: "German",
      image: "allemagne.png",
      instructors: 8,
      students: 180,
      sessions: 95,
      rating: 4.6,
    },
    {
      name: "French",
      image: "france.png",
      instructors: 10,
      students: 210,
      sessions: 120,
      rating: 4.7,
    },
    {
      name: "English",
      image: "anglais.jpg",
      instructors: 15,
      students: 300,
      sessions: 200,
      rating: 4.9,
    },
    {
      name: "Italian",
      image: "italie.png",
      instructors: 7,
      students: 160,
      sessions: 80,
      rating: 4.5,
    },
  ];

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full px-4">
        <LanguageTable languages={languages} />
      </div>
    </div>
  );
}