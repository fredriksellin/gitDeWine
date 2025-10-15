import cellarImage from "@/assets/storage-cellar.jpg";
import loungeImage from "@/assets/lounge-interior.jpg";
import outsideImage from "@/assets/outside.jpg";
import winecupes from "@/assets/wine-cupes.jpeg";

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
              We offer you cabinets in three sizes, 66 bottles (rack), 80 bottles (rack), and 130 bottles (2 floors for piling). 
              Each cabinet is equipped with a lock to ensure the safety of your wine collection.
              
              As a member, you can also enjoy our cozy wine lounge for tasting. You need to book the Lounge in advance and can do so directly on our website.
              <br />
              <br /><b>Note, smoking and bringing your own food or drinks into the lounge is not allowed.</b> 
              <br />We look forward to welcoming you as a member and providing you with the best possible service for your wine storage needs.
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
             <div className="h-[200px] rounded-lg overflow-hidden bg-accent flex items-center justify-center">
              <div className="text-center text-accent-foreground p-6">
                <p className="font-serif text-6xl font-bold mb-2 text-accent-foreground">Cabinets up to 130 bottles</p>
    
              </div>
            </div>
            <div className="h-[200px] rounded-lg overflow-hidden">
              <img 
                src={outsideImage} 
                alt="Part of the charming old building" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[200px] rounded-lg overflow-hidden">
              <img 
                src={loungeImage} 
                alt="Wine lounge interior with seating and tables" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
           
            <div className="h-[200px] rounded-lg overflow-hidden">
              <img 
                src={winecupes} 
                alt="Wine lounge interior with seating and tables" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
