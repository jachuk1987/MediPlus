import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Schedule from './Components/Schedule';
import Slider from './Components/Slider';
import Features from './Components/FeautesSection';
import FunFacts from './Components/Fun-Facts';
import WhyChoose from './Components/why-choose';
import CallAction from './Components/Call-action';
import Portfolio from './Components/Startportfolio';
import Newsletter from './Components/Newsletter';
import Appointment from './Components/Appointment';
import Clients from './Components/clients';
import Blog from './Components/Blog-Area';
import Footers from './Components/Footer';
import PricingTable from './Components/PricingTable';
import Services from './Components/Service';



function App() {
  return (
    <div className="App">
     <Header/>
     <Slider/>
     <Schedule/>
     <Features/>
     <FunFacts/>
     <WhyChoose/>
     <CallAction/>
     <Portfolio/>
     <Services/>
     <PricingTable/>
     <Blog/>
     <Clients/>
     <Appointment/>
     <Newsletter/>
     <Footers/>
    

    </div>
  );
}

export default App;