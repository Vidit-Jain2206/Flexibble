import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";
const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      {/* logo and Menu Items */}
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="./logo.svg" alt="flexibble" width={116} height={43} />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((item) => {
            return (
              <Link href={item.href} key={item.key}>
                {item.text}
              </Link>
            );
          })}
        </ul>
      </div>

      {/* profilePic And button */}

      <div className="flexCenter gap-4">
        {session ? (
          <>
            ProfilePic
            <Link href={"/create-project"}>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
