
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SocialMedia from '../components/SocialMedia';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />
      <Hero />
      <SocialMedia />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
