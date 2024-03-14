import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import NotFound from "./NotFound";
import Header from "../components/Header";
import SideCard from "../components/SideCard";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import SmallCard2 from "../components/SmallCard2";
import SmallCard3 from "../components/SmallCard3";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <div className="flex flex-col min-h-screen bg-gray-100 ">
          <Header username />
          <div className="flex flex-col lg:flex-row gap-10 justify-center flex-grow px-10 ">
            <SideCard className="lg:w-1/3 w-full" />
            <div className="flex flex-col justify-center lg:w-2/3 w-full gap-10">
              <div className="flex flex-col lg:flex-row gap-20   ">
                <SmallCard />
                <SmallCard2 />
                <SmallCard3 />
              </div>
              <LargeCard />
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Home;
