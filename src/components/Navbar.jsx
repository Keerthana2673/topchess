import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => { window.open("https://forms.gle/UJ9ypM8xgXj4jnSb8", "_blank"); };

  const navItems = [
    { name: 'Home', href: '/', exact: true },
    { name: 'About Us', href: '/about' },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
        { name: 'Chess Basics', href: '/courses/basics' },
        { name: 'Advanced Strategies', href: '/courses/advanced' },
        { name: 'Tournament Preparation', href: '/courses/tournament' },
      ]
    },
    { name: 'Contact', href: '/contact' },
    // { name: 'Daily puzzle', href: '/puzzles' } // Puzzle link commented out
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href, exact = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  return (
    <>
      {/* Navbar Container - relative positioned with high z-index */}
      <header className={`absolute w-full max-w-full z-50 py-4 transition-all duration-300`}>
        {/* Background overlay with perfect spacing */}
        <div className={`mx-auto w-full px-4 py-4 max-w-[90%] xl:max-w-[1200px] 2xl:max-w-[1400px] transition-all duration-300 ${scrolled ? 'bg-white/35' : 'bg-white/30'
          } backdrop-blur-md rounded-lg shadow-sm`}>

          {/* Navbar content */}
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="border-2 border-black px-6 py-3 inline-block bg-black shadow-lg">
              <img
                className="h-[32px] w-auto"
                src="/logo.png"
                alt="Logo"
                width={140}
                height={52}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      // onMouseEnter={() => setOpenDropdown(item.name)}
                      // onMouseLeave={() => setOpenDropdown(null)}
                      className="relative"
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center gap-x-1 text-[15px] font-medium ${isActive(item.href) ? 'text-[#3a7d44]' : 'text-gray-800 hover:text-[#3a7d44]'}`}
                      >
                        {item.name}
                        {/*
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                        */}
                      </Link>

                      {/*
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
                          >
                            <div className="py-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className={`block px-4 py-2 text-sm ${isActive(subItem.href, true)
                                    ? 'bg-gray-100 text-[#3a7d44]'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#3a7d44]'
                                    }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      */}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-[15px] font-medium ${isActive(item.href, item.exact)
                        ? 'text-[#3a7d44]'
                        : 'text-gray-800 hover:text-[#3a7d44]'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Admin panel link commented out */}
              {/* {localStorage.getItem('isAdminAuthenticated') && (
                <Link to="/admin/upload" className="text-sm text-gray-500">
                  Admin Panel
                </Link>
              )} */}
              <button onClick={handleClick}
                className="ml-4 bg-[#3a7d44] hover:bg-[#2e6336] text-white px-6 py-2 rounded-md text-[15px] font-medium transition-colors duration-200 transition transform hover:-translate-y-1">
                Join Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - appears below navbar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-24 z-40 bg-white/95 backdrop-blur-md lg:hidden shadow-lg mx-auto w-[92%] xl:w-[1200px] 2xl:w-[1400px] rounded-b-lg overflow-hidden"
          >
            <div className="px-6 py-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 last:border-0">
                  {item.dropdown ? (
                    <div className="w-full">
                      <Link
                        to={item.href}
                        className={`flex justify-between items-center py-3 text-[15px] font-medium ${isActive(item.href) ? 'text-[#3a7d44]' : 'text-gray-800'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                        {/*
                        <ChevronDownIcon
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name);
                          }}
                          className={`h-4 w-4 ml-2 transition-transform ${openMobileDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                        */}
                      </Link>

                      {/*
                      {openMobileDropdown === item.name && (
                        <div className="pl-4 space-y-2 pb-3">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block py-2 text-sm ${isActive(subItem.href, true)
                                ? 'text-[#3a7d44]'
                                : 'text-gray-600 hover:text-[#3a7d44]'
                                }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      */}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block py-3 text-[15px] font-medium ${isActive(item.href, item.exact)
                        ? 'text-[#3a7d44]'
                        : 'text-gray-800'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Admin panel link commented out for mobile */}
              {/* {localStorage.getItem('isAdminAuthenticated') && (
                <Link to="/admin/upload" className="text-sm text-gray-500">
                  Admin Panel
                </Link>
              )} */}
              <button className="w-full bg-[#3a7d44] hover:bg-[#2e6336] text-white px-4 py-3 rounded-md text-[15px] font-medium mt-4">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;