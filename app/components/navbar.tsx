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
      className={`flex z-10 sticky top-0 flex-col bg-primary-300 px-8 py-6 gap-4 border-b border-b-slate-500`}
    >
      <Link href={`/`} className={`text-2xl font-semibold w-fit`}>
        {title}
      </Link>
      <hr className={`border-slate-950`} />
      <div className={`flex justify-center items-center`}>
        <ul
          className={`flex grow flex-wrap max-w-7xl justify-center items-center sm:divide-x divide-slate-950 text-xl`}
        >
          {links.map((link) => (
            <li
              className={`grow flex px-2 justify-center items-center text-center`}
              key={link.url}
            >
              <Link
                className={`grow hover:bg-primary-200 rounded-md px-4 py-2 text-slate-700 hover:text-slate-950 duration-200`}
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
