import React from "react";
import Navigation from "../../components/mainNav";

const Home = () => {
  return (
    <main className="home h-[100vh] overflow-hidden">
      <Navigation />

      <section className=" flex relative overflow-hidden">
        <header className="w-[25%] h-[100vh] ml-[11rem] pt-[20%]">
          <h3 className="text-[#D0D6F9] font-['Barlow Condensed'] font-[400] text-xl uppercase">
            so, you want to travel to
          </h3>
          <h1 className="text-[#fff] text-[150px] font-[400] leading-[172px] uppercase">
            space
          </h1>
          <p className="text-[#D0D6F9] text-[18px] font-[400] leading-[32px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </header>
        <aside className="w-[75%] absolute top-2/4 left-2/3">
          <div className="w-[13rem] h-[13rem] rounded-full bg-white text-black flex justify-center items-center p-[2rem]">
            <p className="text-[400] text-[32px] text-[#0B0D17] uppercase">
              Explore
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Home;
