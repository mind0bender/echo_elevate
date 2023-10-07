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

export const navbarLinks: NavbarLink[] = [
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
  {
    name: "FAQs",
    url: "/faqs",
  },
];

const Navbar: React.FC<NavbarProps> = ({
  title = "Echo Elevate",
  links = navbarLinks,
}) => {
  return (
    <nav
      className={`flex sticky top-0 flex-col bg-primary-300 px-8 py-6 gap-4 border-b border-b-slate-400`}
    >
      <Link href={`/`} className={`text-2xl font-semibold`}>
        {title}
      </Link>
      <hr className={`border-slate-950`} />
      <ul
        className={`flex flex-wrap justify-center items-center divide-x divide-slate-950 text-xl`}
      >
        {links.map((link) => (
          <li className={`grow text-center`} key={link.url}>
            <Link
              className={`hover:bg-primary-200 rounded-md px-4 py-2 text-slate-700 hover:text-slate-950`}
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
