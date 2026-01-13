// src/app/servicios/page.tsx
'use client'
import Navbar from '../components/common/Navbar';
import Footer from '../components/layout/Footer';
import WorkInProgress from '../components/common/workInProgress';

export default function ServiciosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <WorkInProgress 
          titleKey="navbar.services"  
          icon="🌳" 
          backgroundImage="/images/hero/adventure-hero.jpg" 
        />
      <Footer />
    </div>
  );
}