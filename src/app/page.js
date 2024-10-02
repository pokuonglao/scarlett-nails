// src/app/page.js
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Gallery />
      {/* <ContactForm /> */}
    </div>
  );
}
