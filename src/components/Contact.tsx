import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold mb-4 tracking-tight">
              Kontakta Oss
            </h2>
            <p className="text-lg text-muted-foreground">
              Välkommen att höra av dig med frågor eller för att boka ett besök
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Adress</h3>
                <p className="text-sm text-muted-foreground">
                  Bråvallagatan 10<br />
                  Stockholm
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Telefon</h3>
                <p className="text-sm text-muted-foreground">
                  070 123 45 67
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">E-post</h3>
                <p className="text-sm text-muted-foreground">
                  info@vinforvaring.se
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="min-w-[250px]">
              Skicka Förfrågan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;