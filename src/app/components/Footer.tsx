import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../../../public/assests/picture/logo.png")}
              alt="It Mate"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl">IT MATE PAKISTAN</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 IT MATE PAKISTAN
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.youtube.com/@itmatepakistan"}
              className="text-gray-500"
            >
             
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

      