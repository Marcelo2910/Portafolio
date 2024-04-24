
import { useState } from "react";
import { CgNametag } from "react-icons/cg";
import { GiShieldReflect } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";

export const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(true);
  }

  const closeMenu = () =>{
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center"><CgNametag />M. Lira</a>
        </div>
        <div className="space-x-4">
          <div className={"sssm:hidden ssm:hidden lg:block space-x-2"}>
            <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Experiencia</a>
            <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Proyectos</a>
            <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Acerca de Mi</a>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle?(<GiShieldReflect onClick={closeMenu} size={30} className='text-white'/>):(<HiMenuAlt1 onClick={openMenu}  size={30} className='text-white'/>)}
          </div>
        </div>
      </div>
      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className='flex justify-between ml-10'>
          <ul>
            <li className='text-white text-xl mb-2 cursor-pointer'>Experiencia</li>
            <li className='text-white text-xl mb-2 cursor-pointer'>Proyectos</li>
            <li className='text-white text-xl mb-2 cursor-pointer'>Acerca de Mi</li>
          </ul>
        </div>
        ): (<div></div>)}
        
      </div>
    </>
  )
}
