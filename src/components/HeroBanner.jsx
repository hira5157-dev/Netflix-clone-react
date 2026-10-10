
import React from "react";

const posterUrls = [
  "https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
  "https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  "https://image.tmdb.org/t/p/w300/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
  "https://image.tmdb.org/t/p/w300/iuFNMS8vlodyFCTZDVM7B6BnFMC.jpg",
  "https://image.tmdb.org/t/p/w300/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  "https://image.tmdb.org/t/p/w300/sv1xJUazXoQuIDtiys8c5NHBNXa.jpg",
  "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "https://image.tmdb.org/t/p/w300/A7AoNT06aRAc4SV89I9s8ijHp8.jpg",
  "https://image.tmdb.org/t/p/w300/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
  "https://image.tmdb.org/t/p/w300/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  "https://image.tmdb.org/t/p/w300/nMKdUUepR0i5zn0y1T4CejMGeVU.jpg",
  "https://image.tmdb.org/t/p/w300/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  "https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  "https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  "https://image.tmdb.org/t/p/w300/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
  "https://image.tmdb.org/t/p/w300/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  "https://image.tmdb.org/t/p/w300/jlGmlFOcfo8n5tURmhC7YVQt1Zw.jpg",
  "https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  "https://image.tmdb.org/t/p/w300/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
  "https://image.tmdb.org/t/p/w300/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
];

const HeroBanner = () => {
  const allPosters = [...posterUrls, ...posterUrls, ...posterUrls];

  return (
    <div className="relative w-full h-[85vh] bg-black" style={{ overflow: "hidden" }}>

      {/* Movie Grid Background */}
      <div
        className="absolute inset-0 grid gap-1 opacity-50"
        style={{
          gridTemplateColumns: "repeat(10, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          transform: "skewY(-8deg) scale(1.3)",
          transformOrigin: "center",
        }}
      >
        {allPosters.slice(0, 30).map((url, i) => (
          <img key={i} src={url} alt="" className="w-full h-full object-cover" />
        ))}
      </div>

      {/* Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-white text-5xl font-extrabold max-w-2xl leading-tight">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-white text-xl mt-4 font-medium">
          Starts at Rs 250. Cancel anytime.
        </p>
        <p className="text-white/80 mt-3 text-base">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex mt-6 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-4 bg-black/60 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white text-base"
          />
          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 text-white font-bold text-lg flex items-center gap-2 transition-colors">
            Get Started <span className="text-xl">›</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default HeroBanner;