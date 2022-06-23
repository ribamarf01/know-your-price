import { FormEvent, useState } from 'react'

interface Form {
  name: string
  email: string
  subject: string
  content: string
}

const EMPTY_FORM: Form = {
  name: '',
  email: '', 
  subject: '', 
  content: '', 
}

const Support = () => {

  const [form, setForm] = useState<Form>(EMPTY_FORM)

  const sendSupportMessage = (e: FormEvent) => {
    e.preventDefault()
    console.log(form)
    setForm(EMPTY_FORM)
  }

  return(<>
    <div>
      <div className="flex flex-col items-center w-full bg-rich-black-fogra py-4">
        <h1 className="text-5xl font-poppins text-alice-blue mx-4 -tracking-wider font-bold">Suporte</h1>
        <div className="py-4"></div>
        <h2 className="mx-4 text-center text-alice-blue text-3xl">Deseja saber algo a mais? Não hesite em nós mandar uma mensagem!</h2>

        <div className="py-4"></div>

        <form className='flex flex-col items-center w-full mx-4 md:w-1/3' onSubmit={e => sendSupportMessage(e)}>
          <label className='text-xl font-bold py-2 text-alice-blue' htmlFor="name">Nome:</label>
          <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 w-2/3' placeholder='Seu nome' id='name' type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}/>

          <label className='text-xl font-bold py-2 text-alice-blue' htmlFor="email">E-mail para contato:</label>
          <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 w-2/3' placeholder='Email para contato' id='email' type="text" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/>

          <label className='text-xl font-bold py-2 text-alice-blue' htmlFor="subject">Motivo:</label>
          <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 w-2/3' placeholder='Motivo' id='subject' type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}/>

          <label className='text-xl font-bold py-2 text-alice-blue' htmlFor="content">Descrição:</label>
          <textarea className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 w-2/3 resize-none h-36' placeholder='Descrição' id='content' value={form.content} onChange={e => setForm({ ...form, content: e.target.value })}/>

          <div className="py-2"></div>

          <button className='text-xl p-2 w-1/4 rounded-lg bg-maya-blue hover:bg-blue-jeans duration-300 transition-all text-white' type='submit'>Enviar</button>

        </form>

        <div className="py-4"></div>

      </div>
    </div>  
  </>)

}

export default Support