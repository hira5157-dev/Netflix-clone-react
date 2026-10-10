

import React from 'react';
import { FaTv, FaDownload, FaMobileAlt, FaSmile } from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    title: "Enjoy on your TV",
    desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <FaTv />,
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    desc: "Save your favorites easily and always have something to watch.",
    icon: <FaDownload />,
  },
  {
    id: 3,
    title: "Watch everywhere",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    title: "Create profiles for kids",
    desc: "Send kids on adventures with their favorite characters in a space made just for them.",
    icon: <FaSmile />,
  },
];

const ReasonsToJoin = () => {
  return (
    <section className="px-34 py-12 bg-black text-white">
      <h2 className="text-2xl font-bold mb-8">
        More Reasons to Join
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {featuresData.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-[#1c1c3c] to-[#2a1a2f] p-6 rounded-xl relative hover:scale-105 transition duration-300 w-half h-60"
          >
            <h3 className="text-lg font-bold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {item.desc}
            </p>
            <div className="absolute bottom-4 right-4 text-3xl text-red-500 drop-shadow-lg">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToJoin;
