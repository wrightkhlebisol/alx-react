import Logo from './Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <body class="App-body">
        <p>Login to access the full dashboard</p>
      </body>

      <footer class="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
