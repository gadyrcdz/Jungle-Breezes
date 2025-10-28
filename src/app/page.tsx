// src/app/page.tsx
'use client'
import Hero from './components/home/Hero';
import ActivityCards from './components/home/ActivityCards';
import Testimonials from './components/home/Testimonials';
import ContactCTA from './components/home/ContactCTA';
import Navbar from './components/common/Navbar';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ActivityCards />
      <Testimonials />
      <ContactCTA />
      <Footer/>
    </>
  );
}