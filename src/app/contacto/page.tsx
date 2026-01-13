'use client'
import Navbar from '../components/common/Navbar';
import Footer from '../components/layout/Footer';
import WorkInProgress from '../components/common/workInProgress';

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <WorkInProgress customTitle="Servicios" icon="🌳" />
      <Footer />
    </>
  );
}