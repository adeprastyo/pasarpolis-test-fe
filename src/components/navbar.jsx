import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full mb-3 shadow-md shadow-slate-200 py-5">
      <div className="flex w-4/5 mx-auto justify-between items-center">
        <Link to="/">
          <h1 className="text-xl sm:text-2xl md:text-3xl italic font-bold">
            PasarP<span className="text-yellow-400">o</span>lis
          </h1>
        </Link>
        <div className="flex justify-center items-center">
          <ul className="flex gap-5 justify-center items-center">
            <li
              className={
                location.pathname === "/tebak-angka"
                  ? "border-b-2 border-yellow-400 text-xs sm:text-sm md:text-base font-medium text-black"
                  : "border-b-2 border-white hover:border-yellow-400 font-medium text-slate-600 hover:text-black tracking-wide text-xs sm:text-sm md:text-base"
              }
            >
              <Link to="/tebak-angka">Tebak Angka</Link>
            </li>
            <li
              className={
                location.pathname === "/gallery"
                  ? "border-b-2 border-yellow-400 text-xs sm:text-sm md:text-base  font-medium text-black"
                  : "border-b-2 border-white hover:border-yellow-400 font-medium text-slate-600 hover:text-black tracking-wide text-xs sm:text-sm md:text-base "
              }
            >
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
