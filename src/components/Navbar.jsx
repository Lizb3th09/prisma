'use client'
import React, { useState } from "react";
import { Popover } from '@headlessui/react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 
import Link from "next/link";
import Image from "next/image";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" bg-black w-full  ">
      <header>

      <Popover className='hidden md:flex  justify-center p-11  items-center h-16 bg-black border-2 border-black border-b-green-200'>
  <div className="flex items-center">

    <h1 className="font-bold text-2xl text-center text-white p-4 font-serif ">  SPOTIFY</h1> </div>
    <Image src={'/Spotify_icon.svg'} width={40} height={40} alt='logo' style={{ width: 40, height: 40 }} />

  <div className="hidden sm:flex space-x-9 justify-between m-6 p-4 font-serif text-black ">


    <Link href="/Registro"><p className=" bg-white rounded-md w-20 text-center h-7 hover:bg-green-400   "> Registro</p></Link>
    <Link href="/verRegistros"><p className=" bg-white rounded-md w-20 text-center h-7 hover:bg-green-400   "> Ver Reg</p></Link>
    <Link href="/"><p className=" bg-white rounded-md w-20 text-center h-7 hover:bg-green-400   "> Home</p></Link>

  </div>
</Popover>



        {/* Responsive Menu */}
        <Popover className="md:hidden text-white  flex bg-black border-2 border-black border-b-green-200">

    
        <div className="flex items-center  ">
    <h1 className="font-bold text-2xl text-center   font-serif p-11"></h1>
  </div>


          <Popover.Button >
            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </Popover.Button>




          <Popover.Panel className={`bg-white  absolute h-2/6 w-2/6  m-5 rounded-md font-serif  ${isMenuOpen ? "block" : "hidden"}`}>


          <div className=" text-black justify-content flex-end  p-3">  
            <button onClick={closeMenu}>
              <CloseIcon /> 
            </button>
          </div>


            <div className='flex flex-col  text-black h-full  text-1xl font-serif'>
    <Link href="/Registro"><p className=" text-black rounded-md  text-center h-7  hover:bg-gray-800 hover:text-white "> Registro</p></Link>
    <Link href="/verRegistros"><p className=" text-black rounded-md  text-center h-7  hover:bg-gray-800 hover:text-white"> ver Registro</p></Link>
    <Link href="/"><p className=" text-black rounded-md  text-center h-7 hover:bg-gray-800 hover:text-white"> Home</p></Link>
           
            </div>

          </Popover.Panel>
        </Popover>
      </header>
    </nav>
  );
};

export default NavBar;


