import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome To Chype Start Page :)
        </p>
        <a
          className="App-link"
          href="https://github.com/bhagatabhijeet/chype"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our GitHub Repo
        </a>
        <a
          className="App-link"
          href="https://github.com/bhagatabhijeet/chype/projects/1"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Our Project Board
        </a>
      </header>
    </div>
  );
}

export default App;
