import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Service from './components/Service/service';
import Faq from './components/FAQ/faq';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/contact';
import Mobile from './components/Mobile/mobile';
import './App.css';

const App = () => {
  

  return (

    <div className="App">
          <BrowserRouter>
     <Navbar/>
     <Mobile/>
     <Service/>
     <Faq/>
     <Contact/>
     <Footer/>
     </BrowserRouter>
    </div>
   
  );
}

export default App;
