import { BrowserRouter, Routes, Route} from 'react-router'
import { Frontpage } from './pages/Frontpage'
import { Loginpage } from './pages/Loginpage'
import { MainLayout } from './layout/MainLayout'
import { Contactpage } from './pages/Contaktpage'
import { ProdukterPage } from './pages/Produkterpage'
import { NyhederPage } from './pages/Nyhederpage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" index element={<Frontpage/>} />
        <Route path="/Produkter" element={<ProdukterPage/>} />
        <Route path="/Nyheder" element={<NyhederPage/>} />
        <Route path="/Kontakt" element={<Contactpage/>} />
        <Route path="/Login" element={<Loginpage/>} />
        

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
