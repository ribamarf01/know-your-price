import Link from 'next/link'

const Header = () => {

  return (<>
    <header className="w-full h-16 bg-rich-black-fogra flex items-center justify-between">
      <Link href={"/"}>
        <div className="flex items-center h-full cursor-pointer group">
          <svg className="w-10 h-10 mr-2 ml-8 text-white group-hover:text-rhythm duration-300 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
          <p className="text-3xl font-bold text-white font-poppins -tracking-widest group-hover:text-rhythm duration-300 transition-all">Know your price</p>
        </div>
      </Link>
      <ul className='flex items-center mr-8'>
        <li className='px-3 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-lg tracking-tighter'>Quem somos</li>
        <li className='px-3 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-lg tracking-tighter'>Ideia</li>
        <li className='px-3 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-lg tracking-tighter'>Planos</li>
        <li className='px-3 text-white hover:text-rhythm duration-300 transition-all cursor-pointer font-medium font-poppins text-lg tracking-tighter'>Fale conosco</li>

        <li className='px-3 ml-3 py-1 rounded  text-white bg-rhythm hover:bg-independence hover:text-gray-100 duration-300 transition-all cursor-pointer font-medium text-lg font-poppins tracking-tighter'>Calculadora</li>
      </ul>
    </header>
  </>)

}

export default Header