import cellarImage from "@/assets/storage-cellar.jpg";
import loungeImage from "@/assets/lounge-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-5xl font-bold mb-6 tracking-tight">
              About Us
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              In our wine storage facility, your wine is stored in optimal conditions to preserve its quality and flavor.
              We offer you a cabinet with that can hold up to 190 bottles. As members, you can also enjoy our exclusive wine lounge for tastings and events.
              You are welcome to contact us if you have any other needs or requests.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 h-[400px] rounded-lg overflow-hidden">
              <img 
                src={cellarImage} 
                alt="Wine storage cabinets with wooden floors" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden">
              <img 
                src={loungeImage} 
                alt="Wine lounge interior with seating and tables" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden bg-accent flex items-center justify-center">
              <div className="text-center text-accent-foreground p-6">
                <p className="font-serif text-6xl font-bold mb-2">up to 190</p>
                <p className="text-sm uppercase tracking-wider">bottles per Cabinet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
