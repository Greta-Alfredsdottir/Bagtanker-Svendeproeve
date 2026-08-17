import { BrowserRouter, Routes, Route} from 'react-router'

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
