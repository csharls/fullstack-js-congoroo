import './App.css';

import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app de bootcamp</p>
}
const  App = () => {


  return (
    <div className="App">
      <Mensaje color="red" message='Estamos trabajando en React' />
      <Mensaje color="blue" message= 'Esto es un mensaje'/>
      <Mensaje color="yellow" message= 'No te rindas'/>
      <Description></Description>
    { + new Date() }  {/* react no puede renderizar objetos asique lo convertimos en timestamp */}
    </div>
  );
}

export default App;
