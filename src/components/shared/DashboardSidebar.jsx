import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div className="w-[200px] bg-purple-200 text-gray-800 h-screen fixed top-0 left-0">
      <Link href={'/dashboard'}>
        <Image
          src={
            "https://static.vecteezy.com/system/resources/previews/010/486/954/original/blue-car-wash-auto-detailing-logo-vector.jpg"
          }
          alt="logo"
          width={80}
          height={60}
        ></Image>
      </Link>

      <div className="flex flex-col gap-5 mt-7 px-3 py-5">
        <Link href={"/dashboard/profile"}>Profile</Link>
        <Link href={"/dashboard/my-booking"}>My Booking</Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
