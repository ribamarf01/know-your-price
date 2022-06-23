import { useState } from 'react'
import Link from 'next/link'

const Header = () => {

  const [activeMenu, setActiveMenu] = useState(false)

  const changeMenuState = () => {
    setActiveMenu(!activeMenu)
  }

  return (<>
    <header className="w-full h-16 bg-rich-black-fogra flex items-center justify-between fixed top-0 z-10">
      <Link href={"/"}>
        <div className="flex items-center h-full cursor-pointer group">
          <svg className="w-10 h-10 mr-2 ml-8 text-white group-hover:text-rhythm duration-300 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
          <p className="text-3xl font-bold text-white font-poppins -tracking-widest group-hover:text-rhythm duration-300 transition-all">Know your price</p>
        </div>
      </Link>
      { activeMenu ?  
        <svg className="w-6 h-6 text-white mr-8 md:hidden cursor-pointer" onClick={()=>changeMenuState()} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        :
        <svg className="w-6 h-6 text-white mr-8 md:hidden cursor-pointer" onClick={()=>changeMenuState()} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      }
      
      <ul className={`md:flex md:static md:items-center mr-5 ${activeMenu ? 'block absolute' : 'hidden'} md:top-0 top-16 bg-rich-black-fogra w-full md:w-auto text-center `}>
        <li className='px-3 py-2 md:py-0 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-2xl md:text-lg tracking-tighter'>Inicio</li>
        <li className='px-3 py-2 md:py-0 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-2xl md:text-lg tracking-tighter'>Como</li>
        <li className='px-3 py-2 md:py-0 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-2xl md:text-lg tracking-tighter'>Ferramenta</li>
        <li className='px-3 py-2 md:py-0 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-2xl md:text-lg tracking-tighter'>Planos</li>
        <li className='px-3 py-2 md:py-0 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-2xl md:text-lg tracking-tighter'>Suporte</li>

        {/* <li className='md:py-0 mx-3 mb-3 md:mb-0 flex justify-center'>
          <p className='px-3 py-2 md:w-full w-1/3 rounded text-white bg-rhythm hover:bg-independence hover:text-alice-blue duration-300 transition-all cursor-pointer font-medium text-2xl md:text-lg font-poppins tracking-tighter'>Calculadora</p>
        </li> */}
      </ul>
    </header>
  </>)

}

export default Header