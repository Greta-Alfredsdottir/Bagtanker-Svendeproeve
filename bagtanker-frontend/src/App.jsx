import { BrowserRouter, Routes, Route} from 'react-router'
import { FrontPage } from './pages/Frontpage'
import { LoginPage } from './pages/Loginpage'
import { MainLayout } from './layout/MainLayout'
import { KontaktPage } from './pages/Kontaktpage'
import { ProdukterPage } from './pages/Produkterpage'
import { NyhederPage } from './pages/Nyhederpage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" index element={<FrontPage/>} />
        <Route path="/Produkter" element={<ProdukterPage/>} />
        <Route path="/Nyheder" element={<NyhederPage/>} />
        <Route path="/Kontakt" element={<KontaktPage/>} />
        <Route path="/Login" element={<LoginPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
