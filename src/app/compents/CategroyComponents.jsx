import React from 'react';
import img from '../../../public/image.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';

function CategroyComponents() {
  return (
    <div>
      <div className="">
        <div className="grid md:gap-4 md:grid-cols-4 py-32 ">
          <div className="md:col-span-5">
            <p className="py-2 px-5 text-xl text-red-600">
              Inflecation ORG Students
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-5">
              <div className="">
                <Image src={img} alt="" />
                <Card name="ram" />
              </div>
              <div className="">
                <Image src={img} alt="" />
                <Card name="shyam" />
              </div>
              <div className="">
                <Image src={img} alt="" />
                <Card name="mohit" />
              </div>
              <div className="">
                <Image src={img} alt="" />
                <Card name="sohit" />
              </div>
              <div className="">
                <Image src={img} alt="" />
                <Card />
              </div>
              <div className="">
                <Image src={img} alt="" />
                <Card />
              </div>
              <div className="">
                <Image src={img} alt="" />
                <Card />
              </div>
              <div className="">
                <Image src={img} alt="" />
                <Card />
              </div>
              <div className="">
                <Image src={img} alt="" />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategroyComponents;
