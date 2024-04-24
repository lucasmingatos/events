"use client"

import { CustomButton } from "./components/CustomButton";
import { FormEvent, useState } from "react";
import { Person } from "./types/Person";

/*usando eventos via Props 
const Page = () => {

  const handleButton1 = () => alert("Funcionou 1")
  const handleButton2 = () => alert("Funcionou 2")
  const handleButton3 = () => alert("Funcionou 3")

  return (
    <div className="w-screen h-screen flex justify-center items-center">

        <CustomButton label="Clique aqui" onClick={handleButton1}/>
        <CustomButton label="Clique aqui" onClick={handleButton2}/>
        <CustomButton label="Clique aqui" onClick={handleButton3}/>

    </div>
  );

}




const Page = () => {

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    alert("Teste de envio");
  
  }
  

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">

        <h1 className="text-5x1 mb-3">Form de login</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text"/>
          <input type="submit" value="Enviar"/>
        </form>

    </div>
  );

}

*/


//utilizando contador para incremetar 1 
//utilizando ESTADO, para renderizar o componente novamente e atualizar o valor do count na TELA 
//const Page = () => {

  //criando um state!! primeiramente vou utilizar um array de construct, primeiro item é o nome do state, depois a função para definir o valor do estado
  //depois dessa estrutura, utiliza-se o HOOK e definimos o valor inicial do state, definindo também o type

//  const [count, setCount] = useState(0);

  //alterar o valor do HOOK para gerar o efeito cascata e atualziar o valor na tela
  /*const handleClickButton = () =>{
    setCount(count + 1);
  } */

  //usando estados para inverter o estado da div na tela... 
  /*
  const [showSecret, setShowSecret] = useState(false);

  const handleClickButton = () => {
    setShowSecret(!showSecret);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">

      <button onClick={handleClickButton} className="bg-blue-500 p-3">{showSecret ? 'Ocultar' : 'Mostrar'}</button>
      
      {showSecret &&
        <div className="p-3 bg-blue-300 rounded-md mt-3">Área oculta</div>
      }
      

    </div>
  );

}


//a função dentro do onChange, faz com que o value digitada no campo seja atualizada 
const Page = () => {

  const [nameInput, setNameInput] = useState('');

  const handleBtnClick = () => {
    alert(nameInput);
  }

  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        type="text" 
        className="border border-black p-3 text-black rounded"
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
      />
      <p>Seu nome é: {nameInput}</p>
      <button onClick={handleBtnClick}>Mostrar valor no campo</button>
    
    </div>
  );

  

}

export default Page; 

const Page = () => {

  const [count, setCount] = useState(0);

  //fazendo mais de uma adição dentro da mesma função, burlando a fila de execução do state
  const handleBtnClick = () => {
    setCount(count +2);   

    setCount(c => c + 2);

    setCount(c => c + 2);
  }

  return(

    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-700 text-white p-3 rounded-md">+6</button>
    </div>
    
  );
}
*/

//USANDO STATE PARA ALTERAR OBJETOS
//...fullName , parte do objeto que desejo alterar
//a primeira parte é simplesmente a clonagem do objeto em sequenci a declaração do que precisa ser alterado
const Page = () => {

  const [fullName, setFullName] = useState<Person>({ name: 'Lucas', lastName: 'Mingatos' });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        type="text" 
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.name}
        onChange={e => setFullName({ ...fullName, name: e.target.value})}
      />

      <input 
        type="text" 
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        onChange={e => setFullName({ ...fullName, lastName: e.target.value })}
      />

      <p>Meu nome é:</p>
      <p>{fullName.name} {fullName.lastName} </p>

    </div>
  );

}

export default Page;
