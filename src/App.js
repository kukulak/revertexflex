import './App.css';
import CreatorPage from './pages/CreatorPage/CreatorPage.component.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RegisterForm from './components/Form/RegisterForm'
import LoginForm from './components/Form/LoginForm'
import OlvidePassword from './components/Perfil/OlvidePassword';
import NuevoPassword from './components/Perfil/NuevoPassword'
import ConfirmarCuenta from './components/Perfil/ConfirmarCuenta';
import RutaProtegida from './pages/RutaProtegida';
import Proyectos from './pages/Proyectos';
import { AuthProvider } from './context/AuthProvider'
import { ProyectosProvider } from './context/ProyectosProvider'

import About from './pages/About'
import BuyingProcess from './pages/BuyingProcess'
import Revertexflex from './pages/Revertexflex'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <ProyectosProvider>
        <Routes>
          <Route path='/' element={ <CreatorPage/> }>
            <Route path='login' element={ <LoginForm />} />
            <Route path="register" element={<RegisterForm />} /> 
            <Route path="olvide-password" element={<OlvidePassword />} /> 
            <Route path="olvide-password/:token" element={<NuevoPassword />} /> 
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} /> 

            <Route path="about" element={<About />} /> 
            <Route path="buy" element={<BuyingProcess />} /> 
            <Route path="revertexflex" element={<Revertexflex />} /> 
            <Route path="contact" element={<Contact />} /> 


          </Route>
          <Route path='/proyectos' element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
          </Route>
        </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
