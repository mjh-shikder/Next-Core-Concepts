import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-purple-200 text-gray-800 font-bold text-5xl flex justify-between items-center ">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src={
              "https://static.vecteezy.com/system/resources/previews/010/486/954/original/blue-car-wash-auto-detailing-logo-vector.jpg"
            }
            alt="logo"
            width={80}
            height={60}
          ></Image>
        </Link>
        <ul className="flex text-[25px] gap-5 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/reviews"}>Reviews</Link>
          <Link href={"/about-us"}>About Us</Link>
        </ul>
      </div>
      <div className="">
        <Link href={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
