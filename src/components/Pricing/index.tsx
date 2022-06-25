const Pricing = () => {

   return (<>
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-poppins -tracking-wider text-center text-independence">Conheça nossos planos:</h1>

      <div className="py-4"></div>

      <div className="grid md:grid-cols-2 gap-8 mx-8">
        <section className="flex flex-col shadow shadow-blue-jeans p-8 rounded-lg">
          <h1 className="text-3xl font-poppins tracking-wide text-independence text-center">Plano Básico</h1>
          <h2 className="text-center text-lg font-poppins text-independence font-bold tracking-tight">Valor: Gratuito</h2>
          <div className="py-4"></div>
          <ul>
            <li className="flex items-center text-lg text-rhythm">
              <Check /><p className="ml-4">Calculadora simples de precificação</p>
            </li>
            <li className="flex items-center text-lg text-rhythm">
              <Check /><p className="ml-4">Dicas de empreendorismo</p>
            </li>
            <li className="flex items-center text-lg text-rhythm">
              <Check /><p className="ml-4">Até 3 produtos salvos e precificados na plataforma</p>
            </li>
          </ul>
        </section>
        <section className="flex flex-col shadow shadow-blue-jeans p-8 rounded-lg">
          <h1 className="text-3xl font-poppins tracking-wide text-independence text-center">Plano Premium</h1>
          <h2 className="text-center text-lg font-poppins text-independence font-bold tracking-tight">Valor: R$ 31,99/mês</h2>
          <div className="py-4"></div>
          <ul>
            <li className="flex items-center text-lg text-rhythm">
              <Check /><p className="ml-4">Calculadora avançada de preços</p>
            </li>
            <li className="flex items-center text-lg text-rhythm">
              <Check /><p className="ml-4">Visualização avançada de produtos</p>
            </li>
            <li className="flex items-center text-lg text-rhythm">
              <Check /><p className="ml-4">Detalhe individuais e de lote do produto</p>
            </li>
            <li className="flex items-center text-lg text-rhythm">
              <Check /><p className="ml-4">Sem limite para produtos salvos</p>
            </li>
          </ul>

        </section>
      </div>

    </div>

    <div className="py-4"></div>
  </>)

}

const Check = () => {
  return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
}

export default Pricing