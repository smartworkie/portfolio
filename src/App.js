import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import './App.css';
import Intro from './components/Intro/intro';
import Header from './components/Header/header';
import Service from './components/Service/service';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
const App = () => {
  

  return (

    <div className="App">
          <BrowserRouter>
     <Navbar/>
     <Header/>
      <Intro/>
     <Service/>
     <Project/>
     <Contact/>
     <Footer/>
     
     </BrowserRouter>
    </div>
   
  );
}

export default App;
