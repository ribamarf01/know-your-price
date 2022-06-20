const Hero = () => {
  
  return (<>
    <main className="w-full h-screen flex items-center justify-center relative">
      <div className='flex items-center justify-center gap-x-12'>
        <section className='flex flex-col w-1/3'>
          <h1 className='text-7xl font-poppins -tracking-wider text-right text-independence'>Você sabia?</h1>
          <div className="my-3" />
          <p className="text-3xl font-poppins tracking-wider text-right text-rhythm ">
            A <span className="text-blue-jeans underline font-bold -tracking-wider">Know Your Price</span> pode te ajudar com o seu negócio.
          </p>
        </section>
        <img
          className='h-96 object-center shadow-2xl rounded-lg'
          src={"/img/hero-image.jpg"}
          alt="Imagem de uma mulher confeitando tortas"
        />
      </div>
      <svg className="h-6 w-6 absolute bottom-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
    </main>
  </>)

}

export default Hero