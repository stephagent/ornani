import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import AboutContinued from "@/components/AboutContinued";
import FeatureGrid from "@/components/FeatureGrid";


import ContactForm from "@/components/ContactForm";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MeetTheTeam />
      <AboutContinued />
      <FeatureGrid />
      
      
      <ContactForm />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
