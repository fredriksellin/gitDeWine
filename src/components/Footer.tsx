const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">
            Ekelund & Ribe Vinförvaring
          </h3>
          <p className="text-sm opacity-80 mb-6">
            Trygg och professionell förvaring av dina viner sedan 2010
          </p>
          <div className="flex justify-center gap-8 text-sm opacity-70">
            <span>© 2024 Ekelund & Ribe</span>
            <span>•</span>
            <span>Alla rättigheter förbehållna</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;