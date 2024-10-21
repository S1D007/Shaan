import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8 text-center">Shann Concert</h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="/control">
          <p className="px-8 py-3 bg-white text-[#001E3B] font-semibold rounded-lg shadow-md hover:bg-[#001E3B] hover:text-white transition-colors duration-300 text-center">
            Control Panel
          </p>
        </Link>
        <Link href="/display">
          <p className="px-8 py-3 bg-white text-[#001E3B] font-semibold rounded-lg shadow-md hover:bg-[#001E3B] hover:text-white transition-colors duration-300 text-center">
            Display
          </p>
        </Link>
        <Link href="/register">
          <p className="px-8 py-3 bg-white text-[#001E3B] font-semibold rounded-lg shadow-md hover:bg-[#001A37] hover:text-white transition-colors duration-300 text-center">
            Register
          </p>
        </Link>
      </div>
    </div>
  );
}

export default page;
