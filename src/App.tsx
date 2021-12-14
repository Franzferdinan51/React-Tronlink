import './App.css';
import Card from './components/Card';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <main style={{ display: 'flex' }}>
        <h1 style={{ color: 'white' }}>React Tronlink</h1>
        <img width={90} src={logo} className="App-logo" alt="logo" />
      </main>

      <Card />
    </div>
  );
}

export default App;
