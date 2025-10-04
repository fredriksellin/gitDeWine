import cellarImage from "@/assets/storage-cellar.jpg";
import loungeImage from "@/assets/lounge-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-5xl font-bold mb-6 tracking-tight">
              Om Oss
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              I våra trevliga lokaler erbjuder vi trygg och sval förvaring av dina viner. 
              Våra standardfack rymmer upp till 190 flaskor.. Välkommen att kontakta oss även 
              om du har andra behov eller önskemål.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 h-[400px] rounded-lg overflow-hidden">
              <img 
                src={cellarImage} 
                alt="Vinförvaringslokaler med träställ fyllda med vinflaskor" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden">
              <img 
                src={loungeImage} 
                alt="Elegant vinlounge med moderna möbler" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden bg-accent flex items-center justify-center">
              <div className="text-center text-accent-foreground p-6">
                <p className="font-serif text-6xl font-bold mb-2">192</p>
                <p className="text-sm uppercase tracking-wider">Flaskor per fack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
