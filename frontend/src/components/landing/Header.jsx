import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isAuthenticated = false;
    const user = {name:'Alex', mail: 'alex@timetoprogram.com'}
    const logout = ()=>{}

    const [portfileDropdownOpen, setProfileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <header
    className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gray-100 ${
      isScrolled ? " bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/0"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
      <div className="flex items">
        <div className="">
          <div className="">
            <FileText className="" />
          </div>
          <span className="">
            AI Invoice App
          </span>
        </div>
        <div className="">
          <a
            href="#features"
            className=""
          >
            Features
          </a>
          <a
            href="#testimonials"
            className=""
          >
            Testimonils
          </a>
          <a
            href="#faq"
            className=""
          >
            FAQ
          </a>
        </div>
        <div className="">
          <Link
            to="/login"
            className=""
          >
            Login
          </Link>
          <Link
            to="/Signup"
            className=""
          >
            Signup
          </Link>
        </div>
        <div className="">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=""
          >
            {isMenuOpen ? (
              <x className="" />
            ) : (
              <Menu className="" />
            )}
          </button>
        </div>
      </div>
    </div>



    </header>
  )
}
            
export default Header      


       
  


