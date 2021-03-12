import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes';
import {LoginPage} from "./Pages/LoginPage"
import { RegisterationPage } from './Pages/RegisterationPage';
import { SearchResultPage } from './Pages/SearchResultPage';
import { FooterContainer } from './Components/FooterContainer';

// import { LoginBottom } from './Components/LoginBottom';
function App() {
  return (
    < >
    
      {/* <Routes/> */}
      <RegisterationPage/>
      <SearchResultPage />
      <FooterContainer />
    </>

  );
}

export default App;
