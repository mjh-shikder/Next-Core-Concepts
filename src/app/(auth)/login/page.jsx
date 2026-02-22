import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="">
      <h1 className="font-bold p-5 text-center mt-5 ">Car Clenify</h1>
      <div className="flex gap-5">
        <div className="border border-amber-700">
          {" "}
          <Image
            src={
              "https://static.vecteezy.com/system/resources/previews/010/486/954/original/blue-car-wash-auto-detailing-logo-vector.jpg"
            }
            alt="logo"
            width={80}
            height={60}
          ></Image>
        </div>
        <div className=" border border-amber-400">Login Form</div>
      </div>
    </div>
  );
};

export default LoginPage;
