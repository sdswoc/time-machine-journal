import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#FAD961] to-[#F76B1C] py-16 text-white">
    <div className="container mx-auto max-w-6xl px-8 flex justify-between">
      <div className="max-w-2xl animate-fadeIn">
      <h1 className="text-5xl font-bold text-gray-800 mb-6 whitespace-nowrap">
        Welcome to <span className=" text-5xl font-bold mb-4 animate-slideUp bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Time Machine Journal</span>
       </h1>
        
        <p className="text-xl mb-8 opacity-90 font-['Lucida Grande'] animate-slideUp">
          Embark on a nostalgic journey through time as you delve into the depths of your memories.
          Take the opportunity to document your experiences, carefully tracking your moods and emotions along the way.
          So, gather your thoughts and start your adventure — the past awaits!
        </p>

      </div>      
    </div>
  </section>
  );
};

export default Hero;