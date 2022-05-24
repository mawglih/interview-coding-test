import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
const route = () => {
  return (
    <Routes>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route index path='/' element={<Home/>} />
    </Routes>
  )
}
export default route;
