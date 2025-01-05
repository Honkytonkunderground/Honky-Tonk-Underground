import { Venue } from './components/Venue';
import { Hero } from './components/Hero';
import { Shows } from './components/Shows';
import { BandMembers } from './components/BandMembers';
import { About } from './components/About';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1b1917] text-[#f59d0e] font-sans">
      <Hero />
      <Shows />
      <BandMembers />
      {/* <Venue /> */}
      <About />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;