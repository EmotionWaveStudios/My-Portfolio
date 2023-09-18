import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";

const Home = () => {
  return (
    <div className="bg-[#212428] text-white">
      <div className="w-[97%] mx-auto">
        <Navbar />
        <Introduction />
      </div>
    </div>
  );
};

export default Home;
