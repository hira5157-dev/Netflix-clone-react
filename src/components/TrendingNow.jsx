



// import React, { useRef } from 'react';

// const trendingData = [
//   { id: 1, img: "https://upload.wikimedia.org/wikipedia/en/c/ce/Dhurandhar_poster.jpg" },
//   { id: 2, img: "https://resizing.flixster.com/XW7qHSq0jwgLAvp-NlqkEA0eSs8=/206x305/v2/https://resizing.flixster.com/eyBNu6WwkImA62AHACIgsDjYf1o=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNTRiMzFjYmItZTAxZi00OTkzLWIzYzItZjk4ZjRlZDE1M2RhLmpwZw==" },
//   { id: 3, img: "https://m.media-amazon.com/images/M/MV5BYjhjZmYwYjItYjA1Yy00NzkwLTk1OWMtZjYzZTg2MWFiYmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
//   { id: 4, img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Mardaani_3_Film_poster.jpg/250px-Mardaani_3_Film_poster.jpg" },
//   { id: 5, img: "https://upload.wikimedia.org/wikipedia/en/2/22/War_Machine_poster.jpeg" },
//   { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BdQlSjqps0L7S9LT-n9vZ2h7PFHeBiWUyA&s" },
//   { id: 7, img: "https://resizing.flixster.com/2LdyNCv_Mh-XxJUwbI8C-C5VQ7c=/206x305/v2/https://resizing.flixster.com/_2U-8U1dyFDIKzff_V31po5dyUs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzA0YzYyZDUtYTkyYi00OWYxLWIxMmEtZGNlZjViMDBiOGU1LmpwZw==" },
//   { id: 8, img: "https://resizing.flixster.com/aeWpKgms3UxDu3eR9Ij0ooNrfao=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlhMWZlZjhjLWZlMDktNDM5Ny05OGUyLTc3OWIwMzQyOGUxZC5qcGc=" },
//   { id: 9, img: "https://resizing.flixster.com/Lw8J3_IMcJl1ScbrTi98bgNipxA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk1NDA1NTY2LTM5MTQtNGJhYS1hZGVmLTY2YzViYWZhNGQ4Ni5qcGc=" },
//   { id: 10, img: "https://m.media-amazon.com/images/M/MV5BNzgyMjZhZjEtODJkMi00NzlhLWEzNTYtOGQ5YmRlM2EwNWQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
// ];

// const TrendingNow = () => {
//   const scrollRef = useRef();

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
//   };

//   return (
//     <section className="relative px-34 pt-32 pb-10 bg-black group -mt-24 overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-32 bg-black [clip-path: ellipse(70% 100% at 50% 0%);]"></div>

//       <h2 className="text-white text-2xl font-bold mb-6">Trending Now</h2>

//       {/* Left Arrow */}
//       <button
//         onClick={scrollLeft}
//         className="absolute left-25 top-[60%] -translate-y-1/3 z-50 h-24 w-5 rounded-full bg-gray-700 hover:bg-gray-400 flex items-center justify-center transition duration-300"
//       >
//         ❮
//       </button>

//       {/* Scroll Container */}
//       <div
//         id="scroll"
//         ref={scrollRef}
//         className="flex gap-10 overflow-x-auto scroll-smooth"
//       >
//         {trendingData.map((item) => (
//           <div
//             key={item.id}
//             className="relative flex-shrink-0 w-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
//           >
//             {/* Number */}
//             <div
//               className="absolute -left-1 bottom-2 text-[100px] font-extrabold leading-none z-20 text-black"
//               style={{ WebkitTextStroke: "2px white" }}
//             >
//               {item.id}
//             </div>
//             {/* Image */}
//             <img
//               src={item.img}
//               alt=""
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={scrollRight}
//         className="absolute right-25 top-[60%] -translate-y-1/3 z-50 h-28 w-5 rounded-full bg-gray-700 hover:bg-gray-400 flex items-center justify-center transition duration-300"
//       >
//         ❯
//       </button>
//     </section>
//   );
// };

// export default TrendingNow;








// import React, { useRef } from 'react';

// const trendingData = [
//   { id: 1, img: "https://upload.wikimedia.org/wikipedia/en/c/ce/Dhurandhar_poster.jpg" },
//   { id: 2, img: "https://resizing.flixster.com/XW7qHSq0jwgLAvp-NlqkEA0eSs8=/206x305/v2/https://resizing.flixster.com/eyBNu6WwkImA62AHACIgsDjYf1o=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNTRiMzFjYmItZTAxZi00OTkzLWIzYzItZjk4ZjRlZDE1M2RhLmpwZw==" },
//   { id: 3, img: "https://m.media-amazon.com/images/M/MV5BYjhjZmYwYjItYjA1Yy00NzkwLTk1OWMtZjYzZTg2MWFiYmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
//   { id: 4, img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Mardaani_3_Film_poster.jpg/250px-Mardaani_3_Film_poster.jpg" },
//   { id: 5, img: "https://upload.wikimedia.org/wikipedia/en/2/22/War_Machine_poster.jpeg" },
//   { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BdQlSjqps0L7S9LT-n9vZ2h7PFHeBiWUyA&s" },
//   { id: 7, img: "https://resizing.flixster.com/2LdyNCv_Mh-XxJUwbI8C-C5VQ7c=/206x305/v2/https://resizing.flixster.com/_2U-8U1dyFDIKzff_V31po5dyUs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzA0YzYyZDUtYTkyYi00OWYxLWIxMmEtZGNlZjViMDBiOGU1LmpwZw==" },
//   { id: 8, img: "https://resizing.flixster.com/aeWpKgms3UxDu3eR9Ij0ooNrfao=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlhMWZlZjhjLWZlMDktNDM5Ny05OGUyLTc3OWIwMzQyOGUxZC5qcGc=" },
//   { id: 9, img: "https://resizing.flixster.com/Lw8J3_IMcJl1ScbrTi98bgNipxA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk1NDA1NTY2LTM5MTQtNGJhYS1hZGVmLTY2YzViYWZhNGQ4Ni5qcGc=" },
//   { id: 10, img: "https://m.media-amazon.com/images/M/MV5BNzgyMjZhZjEtODJkMi00NzlhLWEzNTYtOGQ5YmRlM2EwNWQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
// ];

// const TrendingNow = () => {
//   const scrollRef = useRef();

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
//   };

//   return (
//     <section className="relative px-34 pt-32 pb-10 bg-black group -mt-24 overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-32 bg-black [clip-path: ellipse(70% 100% at 50% 0%);]"></div>

//       <h2 className="text-white text-2xl font-bold mb-6">Trending Now</h2>

//       {/* Left Arrow */}
//       <button
//         onClick={scrollLeft}
//         className="absolute left-25 top-[60%] -translate-y-1/3 z-50 h-24 w-5 rounded-full bg-gray-700 hover:bg-gray-400 flex items-center justify-center transition duration-300"
//       >
//         ❮
//       </button>

//       {/* Scroll Container */}
//       <div
//         id="scroll"
//         ref={scrollRef}
//         className="flex gap-10 overflow-x-auto scroll-smooth"
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {trendingData.map((item) => (
//           <div
//             key={item.id}
//             className="relative flex-shrink-0 w-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
//           >
//             {/* Number */}
//             <div
//               className="absolute -left-1 bottom-2 text-[100px] font-extrabold leading-none z-20 text-black"
//               style={{ WebkitTextStroke: "2px white" }}
//             >
//               {item.id}
//             </div>
//             {/* Image */}
//             <img
//               src={item.img}
//               alt=""
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={scrollRight}
//         className="absolute right-25 top-[60%] -translate-y-1/3 z-50 h-28 w-5 rounded-full bg-gray-700 hover:bg-gray-400 flex items-center justify-center transition duration-300"
//       >
//         ❯
//       </button>
//     </section>
//   );
// };

// export default TrendingNow;



import React, { useRef, useState } from 'react';

const trendingData = [
  { id: 1, img: "https://upload.wikimedia.org/wikipedia/en/c/ce/Dhurandhar_poster.jpg" },
  { id: 2, img: "https://resizing.flixster.com/XW7qHSq0jwgLAvp-NlqkEA0eSs8=/206x305/v2/https://resizing.flixster.com/eyBNu6WwkImA62AHACIgsDjYf1o=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNTRiMzFjYmItZTAxZi00OTkzLWIzYzItZjk4ZjRlZDE1M2RhLmpwZw==" },
  { id: 3, img: "https://m.media-amazon.com/images/M/MV5BYjhjZmYwYjItYjA1Yy00NzkwLTk1OWMtZjYzZTg2MWFiYmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { id: 4, img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Mardaani_3_Film_poster.jpg/250px-Mardaani_3_Film_poster.jpg" },
  { id: 5, img: "https://upload.wikimedia.org/wikipedia/en/2/22/War_Machine_poster.jpeg" },
  { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BdQlSjqps0L7S9LT-n9vZ2h7PFHeBiWUyA&s" },
  { id: 7, img: "https://resizing.flixster.com/2LdyNCv_Mh-XxJUwbI8C-C5VQ7c=/206x305/v2/https://resizing.flixster.com/_2U-8U1dyFDIKzff_V31po5dyUs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzA0YzYyZDUtYTkyYi00OWYxLWIxMmEtZGNlZjViMDBiOGU1LmpwZw==" },
  { id: 8, img: "https://resizing.flixster.com/aeWpKgms3UxDu3eR9Ij0ooNrfao=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzlhMWZlZjhjLWZlMDktNDM5Ny05OGUyLTc3OWIwMzQyOGUxZC5qcGc=" },
  { id: 9, img: "https://resizing.flixster.com/Lw8J3_IMcJl1ScbrTi98bgNipxA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk1NDA1NTY2LTM5MTQtNGJhYS1hZGVmLTY2YzViYWZhNGQ4Ni5qcGc=" },
  { id: 10, img: "https://m.media-amazon.com/images/M/MV5BNzgyMjZhZjEtODJkMi00NzlhLWEzNTYtOGQ5YmRlM2EwNWQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
];

const TrendingNow = () => {
  const scrollRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    setTimeout(updateArrows, 450);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    setTimeout(updateArrows, 450);
  };

  return (
    <section className="relative px-34 pt-32 pb-10 bg-black group -mt-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-black [clip-path: ellipse(70% 100% at 50% 0%);]"></div>

      <h2 className="text-white text-2xl font-bold mb-6">Trending Now</h2>

      {/* Left Arrow */}
      {showLeft && (
      <button
        onClick={scrollLeft}
        className="absolute left-25 top-[60%] -translate-y-1/3 z-50 h-24 w-5 rounded-full bg-gray-700 hover:bg-gray-400 flex items-center justify-center transition duration-300"
      >
        ❮
      </button>
      )}

      {/* Scroll Container */}
      <div
        id="scroll"
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={updateArrows}
      >
        {trendingData.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {/* Number */}
            <div
              className="absolute -left-1 bottom-2 text-[100px] font-extrabold leading-none z-20 text-black"
              style={{ WebkitTextStroke: "2px white" }}
            >
              {item.id}
            </div>
            {/* Image */}
            <img
              src={item.img}
              alt=""
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRight && (
      <button
        onClick={scrollRight}
        className="absolute right-25 top-[60%] -translate-y-1/3 z-50 h-28 w-5 rounded-full bg-gray-700 hover:bg-gray-400 flex items-center justify-center transition duration-300"
      >
        ❯
      </button>
      )}
    </section>
  );
};

export default TrendingNow;