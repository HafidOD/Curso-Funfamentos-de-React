import React, { useState } from 'react';

//hoooks
function ContadorFunc(props){
  // inicializa 2 variables, uno que contiene el valor
  //otro para establecer el valor
  //por defecto useState(0) se le tiene que pasar un valor inicial como argumento en este caso 0
  const [contador, setContador] = useState(0);
  return(
    <div>
      <p>Conteo: {contador}</p>
      <button onClick={ () => setContador(contador+1) }>AumentoF</button>
    </div>
  );
}

export default ContadorFunc;