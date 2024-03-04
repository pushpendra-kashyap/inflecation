import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Card(props) {
  return (
    <div className="mt-1 bg-slate-50 shadow-sm">
      <div className="flex-col px-2 hover:bg-slate-100">
        <div className="py-1 text-xl">
          <p>{props.name}</p>
        </div>
        <div className="py-2 text-3xl hover:text-red-500">
          <Link href="#">
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
