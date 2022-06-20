const Hero = () => {
  
  return (<>
    <main className="w-full mt-32">
      <div className='flex items-center justify-center gap-x-12'>
        <section className='flex flex-col items-end w-1/4'>
          <h1 className='text-7xl font-poppins -tracking-widest text-independence'>Você sabia?</h1>
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
    </main>
  </>)

}

export default Hero