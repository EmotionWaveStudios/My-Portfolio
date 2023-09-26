import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import WhatIDo from "./components/WhatIDo";
import MyProject from "./components/MyProject";

const Home = () => {
  return (
    <div className="bg-[#212428] text-white">
      <div className="w-[97%] mx-auto">
        <Navbar />
        <Introduction />
        <WhatIDo />
        <MyProject />
      </div>
    </div>
  );
};

export default Home;
