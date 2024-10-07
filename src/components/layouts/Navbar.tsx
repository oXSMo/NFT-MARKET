import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setopen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <header
      className={`container mx-auto w-full sticky   max-w-screen-xl duration-500 z-40   sm:py-6 py-2 
        ${
          open
            ? "top-0 !bg-black"
            : isScrollingUp
            ? "top-0 "
            : "-top-28 ease-out"
        } 
        ${lastScrollY > 20 && "!bg-black"}`}
    >
      {/* FLEX CONTAINER  */}

      <nav className="flex justify-between relative items-center px-6">
        {/* LOGO  */}
        <Link
          to={"/"}
          className="bg-gradient-to-r text-center leading-7 mx-2 bg-clip-text text-transparent text-gradient !font-black hover:scale-105 tracking-tight text-2xl font"
        >
          NFT <br className="block sm:hidden" /> MARKET
        </Link>

        {/* MENU  */}
        <NavLink className="md:flex hidden " />
        {/* BURGER  */}
        <BurgerMenu open={open} setopen={setopen} />
      </nav>
      <NavLink
        className={`md:hidden flex flex-col  gap-3 w-full overflow-auto z-50   !bg-black   transition-all duration-500 justify-center scrollnone   rounded-b-xl bg2
            ${open ? "h-[230px]" : "h-0"}
            `}
      />
    </header>
  );
}

export default Navbar;

const navlinks: { title: string; link: string }[] = [
  { title: "Home", link: "/" },
  { title: "Market", link: "#market" },
  { title: "Explore", link: "#explore" },
  { title: "Exhibition", link: "#exhibition" },
  { title: "Artisits & Collectors", link: "#artisits" },
];

const NavLink = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();

  return (
    <article className={`gap-2.5 text-sm items-center ${className}`}>
      {navlinks.map(({ link, title }) => (
        <a
          href={link}
          className={`bg-gradient-to-l bg-clip-text font-normal line-clamp-1 text-white hover:text-transparent hover:font-black from-primary  to-secondary text-sm font duration-200 ease-in-out ${
            pathname === link && "!text-transparent !font-black"
          }`}
        >
          {title}
        </a>
      ))}
      <button className=" px-4 py-2 lg:mx-4 rounded-md text-xs font-black button-gradient   hover:scale-105  ">
        Connect Wallet
      </button>
    </article>
  );
};

const BurgerMenu = ({ open, setopen }: TBurger) => (
  <aside
    onClick={() => {
      setopen(!open);
    }}
    className="md:hidden flex flex-col scale-110  gap-1 cursor-pointer"
  >
    <div
      className={`w-6 h-0.5 bg-white/60 duration-300
         ${open && "rotate-45 translate-y-1.5 "}`}
    />
    <div
      className={`w-6 py-px bg-white/60 duration-300 ${
        open && "opacity-0 rotate-90 ease-in"
      }`}
    />
    <div
      className={`w-6 h-0.5 bg-white/60 duration-300 ${
        open && "-translate-y-1.5 -rotate-45 "
      }`}
    />
  </aside>
);

type TBurger = { open: boolean; setopen: (value: boolean) => void };
