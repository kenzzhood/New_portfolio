import Header from './components/Header';
import { AnomalousMatterHero } from './components/ui/anomalous-matter-hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Header />
      <AnomalousMatterHero
        title="Launch Sequence: Anomaly 12"
        subtitle="Energy dances along unseen frontiers."
        description="This demo shows how to override the default copy and integrate hero into a page layout."
      />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
