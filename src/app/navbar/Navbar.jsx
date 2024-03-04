import React from 'react';
import img from '../../../public/inflecation.png';
import Image from 'next/image';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full opacity-100">
      <div className="h-28 border-2 bg-slate-100 flex justify-center items-center gap-12 shadow-sm ">
        <Image src={img} height={100} width={100} alt="logo" />
        <p className="text-xl whitespace-normal  md:text-3xl  text-red-600">
          Inflection ORG
        </p>
      </div>
    </div>
  );
}

export default Navbar;
