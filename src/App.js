import React, {useContext} from 'react';
import './App.css';
import Formulario from '../src/components/Formulario/index'
import {AuthContext, AuthProvider} from '../src/components/context/auth'

function App() {
  
  const Alo = useContext(AuthContext)

  function Teste(e){

    e.preventDefault()

    console.log('testando')



  }

  return (

    <>
    <h1> Hello World </h1>
    <Formulario Teste={() => Teste } />
    {console.log(Alo)}
    </>
    

  );
}

export default App;
