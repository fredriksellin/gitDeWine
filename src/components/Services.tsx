import { Wine, Thermometer, Shield, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wine,
    title: "Professionell Vinförvaring",
    description: "Optimala förhållanden för långtidsförvaring av dina finaste viner",
  },
  {
    icon: Thermometer,
    title: "Temperaturkontroll",
    description: "Konstant temperatur och luftfuktighet för perfekt mognad",
  },
  {
    icon: Shield,
    title: "Trygg & Säker",
    description: "Larmade lokaler med begränsad åtkomst för din trygghet",
  },
  {
    icon: Building,
    title: "Lounge & Event",
    description: "Möjlighet att boka vår eleganta lounge för privata evenemang",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold mb-4 tracking-tight">
            Våra Tjänster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi erbjuder komplett vinförvaring med alla tjänster du behöver för att ta hand om din vinkollektion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
