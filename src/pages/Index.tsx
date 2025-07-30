import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import SEOStructuredData from "@/components/SEOStructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOStructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Pricing />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
