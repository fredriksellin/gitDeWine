import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-serif text-2xl font-bold tracking-tight">
            DeWine <span className="text-accent">Wine storage & events</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
          Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:text-accent transition-colors"
          >
          Contact
          </button>
          <BookingModal trigger={<Button variant="default" className="ml-2">Book the Lounge</Button>} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
