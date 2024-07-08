/* eslint-disable react/jsx-no-undef */
import './App.css';
import Header from './Tatumotions/Scripts/Header';
import Home from './Tatumotions/Scripts/Home'
import Portfolio from './Tatumotions/Scripts/Portfolio';
import Services from './Tatumotions/Scripts/Services';
import WhoAreWe from './Tatumotions/Scripts/WhoAreWe';
import Contactform from './Tatumotions/Scripts/Contactform';
import Footer from './Tatumotions/Scripts/Footer';

function App() {
  return (
    
    <div className='App'>
      <div className='Container'>
        <div className='TheHeader'>
          <Header />
        </div>
        <Home />
        <Services/>
        <Portfolio/>
        <div id='WhoAreWe' className='whoarewe'>
          <WhoAreWe/>
        </div>
        <Contactform/>
        <div className='TheFooter'>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
