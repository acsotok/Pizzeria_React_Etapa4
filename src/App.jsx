
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Navegacion from './components/Navegacion'
//import Home from './components/Home'
import Pizza from './components/Pizza'
// import Register from './components/Register'
//import Cart from './components/Cart'
//import Login from './Login';


function App() {

  return (
    <>
      <Navegacion />
      {/*<Home /> */}
      {/*<Login />*/}
      {/*<Register /> */}
      {/*<Cart /> */}
      <Pizza /> 
      <Footer />
    </>
  )
}

export default App
