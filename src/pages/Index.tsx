import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import SEOStructuredData from "@/components/SEOStructuredData";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Аренда 1С в облаке - Надежные облачные решения | CloudIT Solutions"
        description="Аренда 1С в облаке от 1400₽/мес. Круглосуточная поддержка, автоматические обновления, 14 дней бесплатно. Бухгалтерия, ЗУП, УТ в облаке."
        keywords="1С облако, аренда 1С, облачная 1С, 1С в облаке, хостинг 1С, бухгалтерия онлайн, ЗУП облако, управление торговлей облако"
        canonical="https://clouditsolutions.ru/"
        ogTitle="CloudIT Solutions - Аренда 1С в облаке"
        ogDescription="Надежная аренда 1С в облаке. 14 дней бесплатно, круглосуточная поддержка, автоматические обновления."
      />
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
