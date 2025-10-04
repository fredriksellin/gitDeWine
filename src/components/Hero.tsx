import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wine.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
          Ekelund & Ribe
        </h2>
        <p className="font-serif text-3xl md:text-5xl text-primary-foreground mb-12">
          Vinförvaring
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            variant="secondary"
            onClick={scrollToContact}
            className="min-w-[200px] text-lg font-medium"
          >
            Kontakta Oss
          </Button>
          <Button 
            size="lg"
            variant="secondary"
            onClick={scrollToContact}
            className="min-w-[200px] text-lg font-medium"
          >
            Boka Loungen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
