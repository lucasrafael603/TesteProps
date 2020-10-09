import React, {useState} from 'react';
import {Form} from '../Formulario/styles'

function Formulario({childen, Teste = () => {}}) {

  const [error, setError] = useState(false)

  function Ehvalidacao(){





  }


  return (


    <Form Iserror={error}>
      
      <label> Name </label>
      <input onFocus={(()=> setError(true))} onBlur={(() => setError(false) )} type='text' />
      <button onClick={(e) => e.preventDefault(), Teste() }> Vamos </button>


    </Form>


  );
}

export default Formulario;

