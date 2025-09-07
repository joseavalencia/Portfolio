import {cn} from "@/lib/utils";
import { X, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {name: "Home", id: "hero"},
  {name: "About", id: "about"},
  {name: "Skills", id: "skills"},
  {name: "Projects", id: "projects"},
  {name: "Contact", id: "contact"},
]

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    // Update URL without the hash
    window.history.pushState({}, "", window.location.pathname);
  }
};

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      // Default to dark mode if no theme is stored
      const storedTheme = localStorage.getItem("theme") || "dark";
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, []);

    const toggleTheme = () => {
      if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      }
    };


    useEffect (() => {
      const handleScroll = () => {
        setIsScrolled(window.screenY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )} 
    >
      <div className="container flex items-center justify-between">
        <a 
          className="text-xl font-bold flex items-center" 
          href="/hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        > 
          <span className="relative z-10">
           
            <span className="text-primary">Jose Valencia</span>
          </span>
        </a>

        {/* desktop nav*/} 
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              href={`/${item.id}`}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          
          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* mobile nav*/}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {" "}
        </button>

        <div 
          className={cn(
            "fixed inset-0 bg-gray-700/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen 
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                href={`/${item.id}`}
                className="text-white hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
