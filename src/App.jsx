import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './page/About/About'
import Contact from './page/Contact/Contact'
import Home from './page/Home/Home'
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact/:param' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
