const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">
            DeWine Storage
          </h3>
          <p className="text-sm opacity-80 mb-6">
            Give your wine and yourself the perfect space.
          </p>
          <div className="flex justify-center gap-8 text-sm opacity-70">
            <span>© 2025 DeWine</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;