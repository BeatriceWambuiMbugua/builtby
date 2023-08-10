import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";

export default async function Navbar() {
    const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar lg:px-20">
      <div className="flex-1 flexStart gap-10">
        <Link href="/" className="">
        <p className="logotext text-black text-3xl">builtby</p>
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
            <>
            {session?.user?.image && (<Image src={session.user.image} width={40} height={40} className="rounded-full" alt={session.user.name}/>)}
        

            <Link href="/create-project">
                Share Work
            </Link>
            </>
        ) : (
            <AuthProviders/>
        )}
      </div>
    </nav>
  );
}
