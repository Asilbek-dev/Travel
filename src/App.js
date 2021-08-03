import './App.css';
import About from './components/about';
import Booking from './components/booking';
import Contact from './components/contact';
import Destination from './components/destination';
import Footer from './components/footer';
import Header from './components/header';
import Service from './components/service';

function App() {
  return (
    <>
      <Header/>
      <Service/>
      <Destination/>
      <Booking/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
