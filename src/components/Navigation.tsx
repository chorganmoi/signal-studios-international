import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const links = [
    { path: "/", label: "Home" },
    { path: "/journal", label: "Journal" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link to="/" className="text-2xl font-serif text-primary hover:opacity-80 transition-opacity">
            Signal Studios
          </Link>
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider hover:opacity-80 transition-opacity ${
                  location.pathname === link.path ? "text-primary" : "text-primary/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;