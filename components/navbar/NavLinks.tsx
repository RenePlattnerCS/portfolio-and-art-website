import { signedOutLinks, signedInLinks, NavLink } from "@/utils/links";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

async function NavLinks() {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  const loggedIn: boolean = userId != null;
  let links: NavLink[] = [];

  if (loggedIn) {
    links = signedOutLinks.concat(signedInLinks);
  } else {
    links = signedOutLinks;
  }
  return (
    <>
      {links.map((link) => {
        if (link.label === "dashboard" && !isAdmin) return null;
        return (
          <li key={link.href}>
            <Link href={link.href} className="text-sky-50 hover:text-blue-300">
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}
export default NavLinks;
