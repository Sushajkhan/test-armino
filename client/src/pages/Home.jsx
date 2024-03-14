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
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {/* {isAuthenticated ? ( */}
      <div className=" flex flex-col bg-gray-100  ">
        <Header />
        <div className="flex gap-10 justify-center ">
          <SideCard />
          <div className="flex flex-col ">
            <div className="flex gap-3 ">
              <SmallCard />
              <SmallCard2 />
              <SmallCard3 />
            </div>
            <LargeCard />
          </div>
        </div>
      </div>
      {/* ) : (
        <NotFound />
      )} */}
    </>
  );
};

export default Home;
