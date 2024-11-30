import logo from './logo.svg';
import './App.css';
import Home from './template/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const role = "admin"
  return (
    <div className="App" >
        {  role && role == "admin" ? <Home/> : '' }
    </div>
  );
}

export default App;
