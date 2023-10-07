import Link from "next/link";
import React from "react";

interface NavbarProps {
  title?: string;
  links?: NavbarLink[];
}

interface NavbarLink {
  name: string;
  url: string;
}

const navbarLinks: NavbarLink[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Navbar: React.FC<NavbarProps> = ({
  title = "Echo Elevate",
  links = navbarLinks,
}) => {
  return (
    <nav
      className={`flex sticky top-0 left-0 flex-col bg-slate-100 px-8 py-6 gap-4 border-b border-b-slate-400`}
    >
      <Link href={`/`} className={`text-2xl font-semibold`}>
        {title}
      </Link>
      <hr className={`border-slate-950`} />
      <ul
        className={`flex flex-wrap justify-around items-center gap-4 text-xl`}
      >
        {links.map((link) => (
          <li key={link.url}>
            <Link
              className={`text-slate-700 hover:text-slate-950`}
              href={link.url}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
