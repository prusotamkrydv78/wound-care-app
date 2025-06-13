'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdClose, MdMenu, MdArrowForward } from 'react-icons/md';

const navigation = [
  { name: 'Home', href: '/local' },
  { name: 'About', href: '/local/about' },
  { name: 'Services', href: '/local/services' },
  {
    name: 'Solutions',
    children: [
      { name: 'For Doctors', href: '/local/solutions/doctors' },
      { name: 'For Hospitals', href: '/local/solutions/hospitals' },
      { name: 'For Clinics', href: '/local/solutions/clinics' },
    ],
  },
  { name: 'Pricing', href: '/local/pricing' },
  { name: 'Contact', href: '/local/contact' },
];

export default function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#DDE1EC]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#6B7AFF] to-[#506EFF] rounded-lg 
                           flex items-center justify-center">
              <span className="text-white text-lg font-bold">+</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#6B7AFF] to-[#506EFF] 
                           bg-clip-text text-transparent">
              WoundCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative"
                   onMouseEnter={() => setOpenDropdown(item.name)}
                   onMouseLeave={() => setOpenDropdown('')}>
                {item.children ? (
                  <>
                    <button className="text-[#4A5468] hover:text-[#6B7AFF] px-3 py-2 text-sm font-medium">
                      {item.name}
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 w-48 py-2 bg-white rounded-xl shadow-lg border border-[#DDE1EC]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-[#4A5468] hover:bg-[#F8F9FF] hover:text-[#6B7AFF]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#4A5468] hover:text-[#6B7AFF] px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link href="/auth/login" 
                  className="text-[#6B7AFF] px-4 py-2 text-sm font-medium hover:text-[#506EFF]">
              Login
            </Link>
            <div className="relative group">
              <button className="bg-gradient-to-r from-[#6B7AFF] to-[#506EFF] text-white px-4 py-2 
                               rounded-lg text-sm font-medium hover:shadow-md hover:shadow-blue-500/20 
                               transition-all">
                Get Started
                <MdArrowForward className="inline ml-2 group-hover:translate-x-1 transition-transform"/>
              </button>
              <div className="absolute hidden group-hover:block top-full right-0 mt-2 w-48 py-2 
                            bg-white rounded-xl shadow-lg border border-[#DDE1EC]">
                <Link href="/auth/register?type=doctor" 
                      className="block px-4 py-2 text-sm text-[#4A5468] hover:bg-[#F8F9FF] hover:text-[#6B7AFF]">
                  Register as Doctor
                </Link>
                <Link href="/auth/register?type=hospital" 
                      className="block px-4 py-2 text-sm text-[#4A5468] hover:bg-[#F8F9FF] hover:text-[#6B7AFF]">
                  Register as Hospital
                </Link>
                <Link href="/auth/register?type=clinic" 
                      className="block px-4 py-2 text-sm text-[#4A5468] hover:bg-[#F8F9FF] hover:text-[#6B7AFF]">
                  Register as Clinic
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#4A5468] hover:bg-[#F8F9FF]"
          >
            {isOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#DDE1EC]">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? '' : item.name)}
                        className="w-full text-left px-4 py-2 text-[#4A5468] hover:bg-[#F8F9FF] text-sm font-medium"
                      >
                        {item.name}
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-[#4A5468] hover:bg-[#F8F9FF]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-[#4A5468] hover:bg-[#F8F9FF] text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-[#DDE1EC]">
                <Link href="/auth/login"
                      className="block px-4 py-2 text-[#6B7AFF] text-sm font-medium">
                  Login
                </Link>
                <Link href="/auth/register"
                      className="block px-4 py-2 text-[#6B7AFF] text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
