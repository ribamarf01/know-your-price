import Header from '@components/Header'

const Layout = ({ children }) => {
  return (<>
    <div className=''>
      <Header />
      { children }
    </div>
  </>)
}

export default Layout