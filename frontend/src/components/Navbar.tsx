const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-5 bg-transparent">
      <div className="text-2xl font-bold text-green-400">
        DEEP<span className="text-white">CODE</span>
      </div>
      <nav className="hidden md:flex gap-6 text-gray-300">
        {["Solution", "Docs", "Details", "Company", "FAQ", "Discord"].map(item => (
          <a key={item} href="#" className="hover:text-white">{item}</a>
        ))}
      </nav>
      <div className="flex gap-4">
        <button className="text-gray-200 hover:text-white">Log in</button>
        <button className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
