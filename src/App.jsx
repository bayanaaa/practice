import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import Service from './Pages/Service'
import Page from './Pages/Page'
import Blog from './Pages/Blog'
import bg1 from './assets/bg1.svg'


function App() {
  return (
    <>
    <img src={bg1} className='bg1' alt="" />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/aboutUs' element={<AboutUs />}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/page' element={<Page/>}/>
      <Route path='/blog' element={<Blog/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
