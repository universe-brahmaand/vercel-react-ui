import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Universe-Brahmaand!
        </p>
      </header>
      <section className="App-main">
        <div>
          <p>Main Content</p>
        </div>
      </section>
      <footer className="App-footer">
        <p>
          Copyright &copy; Universe-Brahmaand 2023
        </p>
      </footer>
    </div>
  );
}

export default App;
