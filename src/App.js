
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './componentes/navbar';
import Main from './paginas/main';
import Sobremi from './paginas/sobremi';
import Contacto from './paginas/contacto';
import Footer from './componentes/footer';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main />}/>
           
      
  
          <Route path='/sobremi' element={<Sobremi />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
};

export default App;
