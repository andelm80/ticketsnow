import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t mt-auto bg-gray-900">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-gray-100">TicketMelody</h3>
            <p className="text-sm text-gray-300">
              Your premier destination for live entertainment tickets.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-gray-100">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/explore" 
                  className="text-gray-300 hover:text-primary"
                  onClick={handleExploreClick}
                >
                  Explore Shows
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-gray-100">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TicketMelody. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};