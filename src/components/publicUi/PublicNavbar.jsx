"use client";
import { useActionState, useState } from "react";
import Link from "next/link";
import {
  MdClose,
  MdMenu,
  MdArrowForward,
  MdKeyboardArrowDown,
  MdDashboard,
  MdPerson,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import {
  RiStethoscopeLine,
  RiFirstAidKitLine,
  RiTeamLine,
  RiBarChartLine,
  RiSettings4Line,
  RiShieldCheckLine,
} from "react-icons/ri";
import { Logout } from "@/actions/auth/logout.auth";

const navigation = [
  { name: "Home", href: "/local" },
  { name: "About", href: "/local/about" },
  { name: "Services", href: "/local/services" },
  {
    name: "Solutions",
    children: [
      {
        name: "AI Wound Assessment",
        href: "/local/solutions/ai-assessment",
        description: "FDA-cleared AI for precise wound measurement",
        icon: RiFirstAidKitLine,
      },
      {
        name: "Clinical Analytics",
        href: "/local/solutions/analytics",
        description: "Advanced healing insights and predictions",
        icon: RiBarChartLine,
      },
      {
        name: "EHR Integration",
        href: "/local/solutions/integration",
        description: "Seamless workflow integration",
        icon: RiSettings4Line,
      },
      {
        name: "Team Collaboration",
        href: "/local/solutions/collaboration",
        description: "Multi-provider care coordination",
        icon: RiTeamLine,
      },
      {
        name: "Compliance & Security",
        href: "/local/solutions/security",
        description: "HIPAA-compliant platform",
        icon: RiShieldCheckLine,
      },
    ],
  },
  { name: "Pricing", href: "/local/pricing" },
  { name: "Contact", href: "/local/contact" },
];

export default function PublicNavbar({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [logoutFormState, logoutFormAction] = useActionState(Logout);
  const userMenuItems = [
    {
      name: "Dashboard",
      href:
        session.role == "patient" ? "/patient/dashboard" : "/doctor/dashboard",
      icon: MdDashboard,
    },
    {
      name: "Profile",
      href: session.role == "patient" ? "/patient/profile" : "/doctor/profile",
      icon: MdPerson,
    },
    {
      name: "Settings",
      href:
        session.role == "patient" ? "/patient/settings" : "/doctor/settings",
      icon: MdSettings,
    },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="w-8 h-8 bg-gradient-to-br from-[#FF6B9D] to-[#C44569] rounded-lg
                           flex items-center justify-center"
            >
              <span className="text-white text-sm font-bold">W</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              WoundCare AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown("")}
              >
                {item.children ? (
                  <>
                    <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                      {item.name}
                    </button>
                    {openDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 w-80 py-4 bg-white rounded-2xl shadow-2xl
                                    border border-[#DDE1EC]/50 backdrop-blur-xl mt-2"
                      >
                        <div className="px-4 pb-3 border-b border-[#DDE1EC]/30">
                          <h3 className="text-sm font-semibold text-[#1C243C] mb-1">
                            Clinical Solutions
                          </h3>
                          <p className="text-xs text-[#8F96AA]">
                            Comprehensive wound care technology
                          </p>
                        </div>
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start gap-3 px-4 py-3 hover:bg-[#F8F9FF]
                                       hover:text-[#6B7AFF] transition-all duration-200 group"
                            >
                              <div
                                className="w-10 h-10 bg-gradient-to-br from-[#6B7AFF]/10 to-[#8B6DFF]/10
                                            rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                              >
                                <child.icon className="w-5 h-5 text-[#6B7AFF]" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-[#1C243C] group-hover:text-[#6B7AFF] mb-1">
                                  {child.name}
                                </div>
                                <div className="text-xs text-[#8F96AA] leading-relaxed">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="px-4 pt-3 border-t border-[#DDE1EC]/30">
                          <Link
                            href="/local/solutions"
                            className="flex items-center gap-2 text-sm text-[#6B7AFF] hover:text-[#8B6DFF] font-medium"
                          >
                            View All Solutions
                            <MdArrowForward className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Non-logged in users */}
          {!session.isLogin && (
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium
                             hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* User Menu - Logged in users */}
          {session.isLogin && (
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F8F9FF]
                           transition-all duration-200 border border-[#DDE1EC]/50"
                >
                  <div
                    className="w-8 h-8 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF] rounded-lg
                                flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-semibold uppercase">
                      {session.fullName?.charAt(0) || "U"}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-[#1C243C]">
                      {session.fullName}
                    </div>
                    <div className="text-xs text-[#8F96AA]">
                      {session.email || "Healthcare Professional"}
                    </div>
                  </div>
                  <MdKeyboardArrowDown
                    className={`w-4 h-4 text-[#8F96AA] transition-transform duration-200 ${
                      userMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {userMenuOpen && (
                  <div
                    className="absolute top-full right-0 w-56 py-3 bg-white rounded-2xl shadow-xl
                                border border-[#DDE1EC]/50 backdrop-blur-xl mt-2"
                  >
                    <div className="px-4 pb-3 border-b border-[#DDE1EC]/30">
                      <div className="text-sm font-semibold text-[#1C243C]">
                        {session.fullName}
                      </div>
                      <div className="text-xs text-[#8F96AA]">
                        {session.email}
                      </div>
                    </div>
                    <div className="py-2">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-[#F8F9FF]
                                   hover:text-[#6B7AFF] transition-all duration-200"
                        >
                          <item.icon className="w-5 h-5 text-[#8F96AA]" />
                          <span className="text-sm font-medium text-[#1C243C]">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 pt-3 border-t border-[#DDE1EC]/30">
                      <form action={logoutFormAction}>
                        <button
                          type="submit"
                          className="flex items-center gap-3 w-full px-0 py-2 text-left hover:text-[#FF5656]
                                   transition-all duration-200"
                        >
                          <MdLogout className="w-5 h-5" />
                          <span className="text-sm font-medium">Logout</span>
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            {session.isLogin && (
              <div
                className="w-8 h-8 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF] rounded-lg
                            flex items-center justify-center"
              >
                <span className="text-white text-sm font-semibold">
                  {session.user?.name?.charAt(0) || "U"}
                </span>
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-[#1C243C] hover:bg-[#F8F9FF]
                       transition-all duration-200 hover:scale-105"
            >
              {isOpen ? (
                <MdClose className="w-6 h-6" />
              ) : (
                <MdMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-[#DDE1EC]/50 bg-white/95 backdrop-blur-xl">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? "" : item.name
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-[#1C243C] hover:bg-[#F8F9FF]
                                 text-sm font-medium rounded-lg mx-2 transition-all duration-200"
                      >
                        {item.name}
                        <MdKeyboardArrowDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-6 space-y-1 mt-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-[#8F96AA] hover:bg-[#F8F9FF]
                                       hover:text-[#6B7AFF] rounded-lg transition-all duration-200"
                            >
                              <child.icon className="w-4 h-4" />
                              <div>
                                <div className="font-medium">{child.name}</div>
                                <div className="text-xs text-[#8F96AA] mt-1">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-[#1C243C] hover:bg-[#F8F9FF] text-sm font-medium
                               rounded-lg mx-2 transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA Section */}
              <div className="pt-6 mt-6 border-t border-[#DDE1EC]/50 mx-2">
                {!session.isLogin ? (
                  <>
                    <Link
                      href="/auth/login"
                      className="block px-4 py-3 text-[#1C243C] hover:text-[#6B7AFF] text-sm font-medium
                               rounded-lg hover:bg-[#F8F9FF] transition-all duration-200 mb-2"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/register"
                      className="block px-4 py-3 bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] text-white
                               text-sm font-semibold rounded-xl text-center transition-all duration-200"
                    >
                      Start Clinical Trial
                    </Link>
                  </>
                ) : (
                  <>
                    {/* Mobile User Menu */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 px-4 py-3 bg-[#F8F9FF] rounded-xl">
                        <div
                          className="w-10 h-10 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF] rounded-lg
                                      flex items-center justify-center"
                        >
                          <span className="text-white font-semibold">
                            {session.user?.name?.charAt(0) || "U"}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#1C243C]">
                            {session.user?.name || "User"}
                          </div>
                          <div className="text-xs text-[#8F96AA]">
                            {session.user?.email || "user@example.com"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {userMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-[#1C243C] hover:bg-[#F8F9FF]
                                 hover:text-[#6B7AFF] rounded-lg transition-all duration-200 mb-2"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}

                    <form action={logoutFormAction}>
                      <button
                        type="submit"
                        className="flex items-center gap-3 w-full px-4 py-3 text-[#FF5656] hover:bg-[#FF5656]/5
                                 rounded-lg transition-all duration-200"
                      >
                        <MdLogout className="w-5 h-5" />
                        <span className="text-sm font-medium">Logout</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
