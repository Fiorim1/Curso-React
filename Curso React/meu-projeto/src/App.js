import './App.css';
// import HelloWorld from './components/HelloWorld';
// import Frase from './components/Frase';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import PessoaPropsAvancado from './components/PessoaPropsAvancado';
// import NavBar from './components/NavBar';
// import List from './components/List';
// import List2 from './components/List2';
// import Evento from './components/Evento';
// import Formulario from './components/Formulario';
// import Form2 from './components/Form2';
// import Condicional from './components/Condicional';
// import RenderizacaoLista from './components/RenderizacaoLista';
import { useState } from "react";
import Name from './components/Name';
import Saudacao from './components/Saudacao';


function App() {

  // // Criando variáveis
  // let nome = "Gabriel";

  // function soma(a, b) {
  //   return a + b;
  // }

  // let newName = nome.toUpperCase();

  // const url = "https://via.placeholder.com/150"

  // let nomeNovo = "Lucas";
  // let idade = 19;

  // const meusItens = ["React", "Vue", "Angular"];

  const [name, setName] = useState()

  return (
    // <div className="App">
    //   {/* Entendendo o JSX */}
    //   {/* Que no caso, é o famoso HTML dentro do JavaScript */}
    //   <h2>Alterando O JSX</h2>
    //   <p>Olá, meu nome {nome}</p>
    //   <p>2 + 2 é igual a {soma(2, 2)}</p>
    //   <p>Meu nome em caixa alta: {newName}
    //   </p>
    //   <img src={url} alt="Minha Imagem" />
    //   {/* Trabalhando Com Componentes */}
    //   <HelloWorld />
    //   <Frase />
    //   {/* --- */}
    //   {/* Trabalhando Com PROPS */}
    //   <SayMyName nome="Lucas" idade="19" /> {/* Passado Pelo HTML */}
    //   <SayMyName nome={nomeNovo} idade={idade} /> {/* Passado Pelo JavaScript */}
    //   <Pessoa nome="Rogério" idade="34" profissao="Programador Front-End" foto="https://via.placeholder.com/250" />
    //   <PessoaPropsAvancado foto="https://via.placeholder.com/320" nome="Kleyton" idade="22" profissacao="T.I" />
    //   {/* --- */}
    //   {/* Trabalhando Com CSS Modules */}
    //   <NavBar />
    //   {/* --- */}
    //   {/* Utilizando Fragments <> </> */}
    //   {/* Foi Usado No Arquivo List.js */}
    //   <List />
    //   {/* --- */}
    //   {/* Usando propTypes */}
    //   <List2 />
    //   {/* --- */}
    //   {/* Eventos */}
    //   {/* Usando O onClick */}
    //   <Evento numero={1}/>
    //   <Evento numero={2}/>
    //   {/* Usando o submit */}
    //   <Formulario />
    //   {/* --- */}
    //   {/* UseState */}
    //   <Form2 />
    //   {/* --- */}
    //   {/* Evento Por Props */}
    //   <Evento />
    //   {/* --- */}
    //   {/* Renderização Por Condição  */}
    //   <Condicional />
    //   {/* --- */}
    //   {/* Renderização Listas */}
    //   <RenderizacaoLista itens={meusItens}/>
    //   {/* --- */}
    // </div>
    <div className="App">
      {/* State Lift */}
      <h1>State Lift</h1>
      <Name  setName={setName}/> {/* Setando O Nome */}
      {/* <div className="text">
        {name}
      </div> */}
      <Saudacao name={name}/>
    </div>
  );
}

export default App;
