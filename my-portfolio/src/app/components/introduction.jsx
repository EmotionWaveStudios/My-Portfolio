import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";

const Introduction = () => {
  return (
    <div className="w-[90%] mx-auto flex">
      <div className="pt-[250px] w-[50%]">
        <h3 className="py-6 text-lg">WELCOME TO MY WORLD</h3>
        <h1 className="text-5xl">
          Hi, I'm <span className="text-[#FF014F]">Mzwandile Nkohla</span>
        </h1>

        <div className="text-4xl py-6">
          <h2>
            a <span>Web Developer In The Making</span>
          </h2>
          <h2>
            a <span>Game Developer</span>
          </h2>
          <h2>
            a <span>Story And Animation Enthusiast</span>
          </h2>
        </div>

        <p className="text-lg pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odit,
          eum cupiditate laboriosam dolor, ipsam eligendi pariatur deserunt
          rerum quas enim magni quibusdam? Praesentium illum quia quas illo,
          voluptatum maxime.
        </p>

        <div id="social&skills" className="flex gap-44">
          <div>
            <p className="py-6 text-lg">FIND ME IN</p>

            <div className="flex gap-3">
              <div className="text-[30px] p-4 rounded-lg shadow-md shadow-white hover:text-[#FF014F]">
                <BiLogoLinkedin />
              </div>
              <div className="text-[30px] p-4 rounded-lg shadow-md shadow-white hover:text-[#FF014F]">
                <BiLogoFacebook />
              </div>
              <div className="text-[30px] p-4 rounded-lg shadow-md shadow-white hover:text-[#FF014F]">
                <AiOutlineTwitter />
              </div>
            </div>
          </div>

          <div>
            <p className="py-6 text-lg">MOSTLY SKILLED IN</p>

            <div className="flex gap-3">
              <div className="text-[30px] p-4 rounded-lg shadow-md shadow-white hover:text-[#FF014F]">
                <FaReact />
              </div>
              <div className="text-[30px] p-4 rounded-lg shadow-md shadow-white hover:text-[#FF014F]">
                <TbBrandNextjs />
              </div>
              <div className="text-[30px] p-4 rounded-lg shadow-md shadow-white hover:text-[#FF014F]">
                <SiTailwindcss />
              </div>
              <div className="text-[30px] p-4 rounded-lg shadow-md shadow-white hover:text-[#FF014F]">
                <AiFillHtml5 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Introduction;
