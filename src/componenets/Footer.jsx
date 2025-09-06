import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Joseavalencia. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-conditions" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <a 
          href="#hero" 
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
