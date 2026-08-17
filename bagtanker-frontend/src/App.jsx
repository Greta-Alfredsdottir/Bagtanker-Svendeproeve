import { BrowserRouter, Routes, Route} from 'react-router'
import { Frontpage } from './pages/Frontpage'
import { Loginpage } from './pages/Loginpage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" index element={<Frontpage/>} />
        <Route path="/Produkter" element={<ProdukterPage/>} />
        <Route path="/Nyheder" element={<NyhederPage/>} />
        <Route path="/Kontakt" element={<KontaktPage/>} />
        <Route path="/Login" element={<Loginpage/>} />
        

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
