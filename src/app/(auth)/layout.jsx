import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
      <div className="flex justify-center items-center h-screen ">
        <div className=" border  border-green-400 flex-1">
          <Link href={"/dashboard"}>
            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/010/486/954/original/blue-car-wash-auto-detailing-logo-vector.jpg"
              }
              className='rounded-xl'
              alt="logo"
              width={500}
              height={600}
            ></Image>
          </Link>
        </div>
        <div className=" border">{children}</div>
      </div>
    );
};

export default layout;