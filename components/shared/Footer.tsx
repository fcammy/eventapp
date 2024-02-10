import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/white.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>2024 URBOND. All Rights reserved.</p>
      </div>
    </footer>
  );
};
