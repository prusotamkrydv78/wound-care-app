import React from 'react'
import Link from 'next/link';
import { 
  RiLinkedinBoxLine, 
  RiTwitterLine, 
  RiInstagramLine, 
  RiGithubLine 
} from 'react-icons/ri';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press Kit', href: '/press' },
    ],
    resources: [
      { name: 'Support', href: '/support' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'HIPAA Compliance', href: '/hipaa' },
    ],
  };

  return (
    <footer className="bg-white border-t border-[#DDE1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6B7AFF] to-[#506EFF] rounded-lg 
                           flex items-center justify-center">
                <span className="text-white text-lg font-bold">+</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#6B7AFF] to-[#506EFF] 
                             bg-clip-text text-transparent">
                WoundCare
              </span>
            </div>
            <p className="text-[#8F96AA] mb-4">
              Advanced wound care management platform for healthcare professionals.
            </p>
            <div className="flex space-x-4">
              {[RiLinkedinBoxLine, RiTwitterLine, RiInstagramLine, RiGithubLine].map((Icon, i) => (
                <a key={i} href="#" className="text-[#8F96AA] hover:text-[#6B7AFF] transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-[#1C243C] uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#8F96AA] hover:text-[#6B7AFF] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#DDE1EC] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#8F96AA] text-sm">
            © {new Date().getFullYear()} WoundCare. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-[#8F96AA] hover:text-[#6B7AFF]">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-[#8F96AA] hover:text-[#6B7AFF]">
              Terms
            </Link>
            <Link href="/security" className="text-sm text-[#8F96AA] hover:text-[#6B7AFF]">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
