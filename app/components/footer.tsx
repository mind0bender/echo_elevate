import Link from "next/link";
import { navbarLinks } from "./navbar";

export default function Footer(): JSX.Element {
  return (
    <footer
      className={`flex justify-between items-center text-lg bg-primary-300 px-4 py-3`}
    >
      <Link href={`/`} className={`text-2xl font-semibold`}>
        Echo Elevate
      </Link>
      <ul className={`flex flex-wrap justify-around items-center text-base`}>
        {navbarLinks.map((link) => (
          <li
            className={`grow flex justify-center px-2 items-center text-center`}
            key={link.url}
          >
            <Link
              className={`hover:bg-primary-200 bg-opacity-10 rounded-md px-4 py-2 text-slate-700 hover:text-slate-950`}
              href={link.url}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
