import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

function App() {
  // JS
  const name = "9antra";

  return (
    <>
      {/* JSX */}
      <div className="App">
        <header className="App-header">
          {/* Affichage du nom */}
          {name}
        </header>
      </div>
    </>
  );
}

export default App;
