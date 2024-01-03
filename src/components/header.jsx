const Header = () => {
  return (
    <section className="flex_start_layout p-5 text-white bg-black">
      <h4 className="text-3xl font-bold font-league">room</h4>
      <nav className="px-2">
        <ul className="flex_centered_layout cursor-pointer space-x-2 mt-2">
          <li className="group">
            home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-slate-400"></span>
          </li>
          <li className="group">
            shop
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-slate-400"></span>
          </li>
          <li className="group">
            about
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-slate-400"></span>
          </li>
          <li className="group">
            contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-slate-400"></span>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
