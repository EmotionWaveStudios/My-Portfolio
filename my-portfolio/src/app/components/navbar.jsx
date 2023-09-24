
const Navbar = () => {
  return (
    <div className="fixed w-[97%] border-b-[1px] border-[#949BA7] flex justify-between bg-[#212428]">
      <div className="flex">
        <img
          src="Portfolios\My-Portfolio\my-portfolio\public\images\ColorLogoIcon.png"
          alt="logo"
        />
        <h1 className="py-9 my-auto text-lg">Emotion Wave Studios</h1>
      </div>

      <ul className="flex list-none w-[40%] justify-evenly">
        <li className="py-9 my-auto">
          <a className="hover:text-[#FF014F]" href="#">
            Home
          </a>
        </li>
        <li className="py-9 my-auto">
          <a className="hover:text-[#FF014F]" href="#">
            Features
          </a>
        </li>
        <li className="py-9 my-auto">
          <a className="hover:text-[#FF014F]" href="#">
            Projects
          </a>
        </li>
        <li className="py-9 my-auto">
          <a className="hover:text-[#FF014F]" href="#">
            Resume
          </a>
        </li>
        <li className="py-9 my-auto">
          <a className="hover:text-[#FF014F]" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
