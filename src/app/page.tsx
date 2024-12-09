import Link from "next/link";
 import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Skill from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

   // export default function HOme(){
//   return (
//     <div className="grid grid-rows-[auto,1fr,1fr,auto] grid-cols-[100px,1fr] h-screen bg-white ">
//       <div className="bg-gray-800 col-span-2">logo</div>
//       <div className="bg-gray-900">Side Bar</div>
//       <div className="bg-blue-900">Search Bar</div>
//       <div className="bg-white col-span-2"> 
//         Footer</div>
//     </div>
//   )
// }  //this is grid 

// export default function Home (){
//   return (
//     <div className="bg-white flex justify-evenly gap-3 md:flex-row">
//       <div className="bg-red-500 h-[50px] w-[50px]">Home</div>
//       <div className="bg-red-500 h-[50px] w-[50px]">about</div>
//       <div className="bg-red-500 h-[50px] w-[50px]">contact</div>

//     </div>
//   )
// }

   