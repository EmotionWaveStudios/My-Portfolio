const Navbar = () => {
  return (
    <div className="">
      <div className="flex absolute border-b-2 border-[#949BA7]">
        <img src="" alt="" />
        <h1>Emotion Wave Studios</h1>
      </div>

      <ul className="flex list-none">
        <li className="hover:bg-[#FF014F]">
          <a href="#">Home</a>
        </li>
        <li className="hover:bg-[#FF014F]">
          <a href="#">Features</a>
        </li>
        <li className="hover:bg-[#FF014F]">
          <a href="#">Projects</a>
        </li>
        <li className="hover:bg-[#FF014F]">
          <a href="#">Resume</a>
        </li>
        <li className="hover:bg-[#FF014F]">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
