import logo from './perfil-new.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <h1>Jefferson Campos</h1>
        
        <a className="App-link">Web designer</a>

        <div className="App-line">
          <p>contato@jeffersonjunior.com.br</p>
          <p>(13) 98132-6869</p>
          <p>Parque Novo Mundo - São Paulo, SP</p>
        </div>
        
      </header>

      

    </div>
  );
}

export default App;
