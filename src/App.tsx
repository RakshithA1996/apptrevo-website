import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Approach from "./components/Approach";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Approach />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
