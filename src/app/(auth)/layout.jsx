import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="">
      <ul className="flex gap-5 justify-center mt-5 bg-gray-600 py-1 font-semibold">
        <Link className="bg-gray-700 px-3 rounded-md  " href={"/"}>Home</Link>
        <Link className="bg-gray-700 px-3 rounded-md  " href={"/services"}>Services</Link>
        <Link className="bg-gray-700 px-3 rounded-md  " href={"/reviews"}>Reviews</Link>
        <Link className="bg-gray-700 px-3 rounded-md  " href={"/about-us"}>About Us</Link>
      </ul>
      <div className="flex justify-center min-h-screen space-x-5 px-10 items-center">
        <Link href={"/"}>
          <Image
            className="w-60 rounded-xl"
            src={
              "https://static.vecteezy.com/system/resources/previews/010/486/954/original/blue-car-wash-auto-detailing-logo-vector.jpg"
            }
            alt="logo"
            width={80}
            height={60}
          ></Image>
        </Link>
        <div className="border rounded-xl p-5  ">{children}</div>
      </div>{" "}
    </div>
  );
};

export default layout;
