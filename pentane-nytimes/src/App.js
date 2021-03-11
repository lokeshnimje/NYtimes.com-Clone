import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes';
import { FooterContainer } from "./Components/FooterContainer"
function App() {
  return (
    <div className="App">
      <Routes/>
    <FooterContainer />
    </div>
  );
}

export default App;
