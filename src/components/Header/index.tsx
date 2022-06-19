import Link from 'next/link'

const Header = () => {

  return (<>
    <header className="w-full h-16 bg-gradient-to-tr from-blue-400 to-purple-400">
      <Link href={"/"}>
        <div className="flex items-center h-full cursor-pointer group">
          <svg className="w-10 h-10 mx-4 text-white group-hover:text-gray-200 duration-300 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
          <p className="text-2xl font-bold text-white tracking-tighter font-poppins group-hover:text-gray-200 duration-300 transition-all">Know your price</p>
        </div>
      </Link>
    </header>
  </>)

}

export default Header