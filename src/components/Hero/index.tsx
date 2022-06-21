const Hero = () => {
  
  return (<> 
    <main className="w-full">

      <div className='flex lg:flex-row flex-col items-center justify-center gap-x-12 h-screen relative px-4'>
        <section className='flex flex-col lg:w-1/3 '>
          <h1 className='text-7xl font-poppins -tracking-wider lg:text-right text-center text-independence'>Você sabia?</h1>
          <div className="my-4" />
          <p className="text-3xl font-poppins tracking-wider lg:text-right text-center text-rhythm lg:mb-0 mb-8">
            A <span className="text-blue-jeans underline font-bold -tracking-wider">Know Your Price</span> pode te ajudar com o seu negócio.
          </p>
        </section>
        <img
          className='h-96 shadow-2xl rounded-lg'
          src={"/img/hero-image.jpg"}
          alt="Imagem de uma mulher confeitando tortas"
        />
        <svg className="h-12 w-12 absolute bottom-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
      </div>

      <div className="w-full mt-6">
        <article className="flex flex-col items-center font-poppins text-3xl tracking-wider text-rhythm">
          <h1 className="md:w-1/3 text-center">A <span className="text-blue-jeans underline font-bold -tracking-wider">Know Your Price</span> tem como objetivo ajudar o pequeno e médio negócio.</h1>
          <div className="my-4"></div>
          
          <h1 className="text-5xl font-poppins -tracking-wider text-independence">Como?</h1>
          <div className="my-4"></div>
          
          <p className="md:w-1/3 text-center">
            Te ajudando a deixar seu produto com o preço mais <b>competitivo</b> e <b>rentável</b> para vendas!
          </p>

          <div className="my-4"></div>

          <p className="text-5xl font-poppins -tracking-wider text-independence">De que forma?</p>

          <div className="my-4"></div>

          <article className="grid xl:grid-cols-3 grid-cols-1 w-full place-items-center px-24 gap-8">
            <section className="rounded-lg shadow-sm bg-green-600 p-4 w-full h-full flex flex-col items-center">
              <svg className="w-20 h-20 center text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h1 className="text-2xl font-bold -tracking-wide text-white text-center my-2">Ferramenta de precificação!</h1>
              <p className="text-lg text-alice-blue text-justify my-1">Uma das maiores dificuldades para quem está começando é saber o valor do seu trabalho. </p>
              <p className="text-lg text-alice-blue text-justify my-1">Te ajudamos com essa etapa, você só precisa nós ajudar preenchendo com o preço das matérias primas. </p>
            </section>
            <section className="rounded-lg shadow-sm bg-blue-500 p-4 w-full h-full flex flex-col items-center">
              <svg className="w-20 h-20 center text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <h1 className="text-2xl font-bold -tracking-wide text-white text-center my-2">Potencialização de ganhos!</h1>
              <p className="text-lg text-alice-blue text-justify my-1">Não analisar o mercado pode te levar a preços ruins, que te leva a falta de recursos para continuar.</p>
              <p className="text-lg text-alice-blue text-justify my-1">Com a nossa ajuda, os produtos irão sempre estar no preço adequado ao mercado e gerando lucro, que te permite continuar e expandir o negócio!</p>
            </section>
            <section className="rounded-lg shadow-lg bg-yellow-500 p-4 w-full h-full flex flex-col items-center">
              <svg className="w-20 h-20 center text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <h1 className="text-2xl font-bold -tracking-wide text-white text-center my-2">Análises sobre cada produto!</h1>
              <p className="text-lg text-alice-blue text-justify my-1">Ao preencher os dados de como faz seu produto, o sistema irar gerar duas análises: </p>
              <p className="text-lg text-alice-blue text-justify my-1"><b>Simples: </b>Fornece os dados de ganhos e projeção de quanto você ira ganhar com quantidades dos produtos.</p>
              <p className="text-lg text-alice-blue text-justify my-1"><b>Complexa: </b>Fornece os dados de ganhos, além de informações de gastos/ganhos com os produtos e informações para empreendedores experientes.</p>
            </section>
          </article>

        </article>

        <div className="my-4"></div>

      </div>

    </main>
  </>)

}

export default Hero