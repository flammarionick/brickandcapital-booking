// frontend/components/Layout.tsx
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title,
  description = 'Elegant stays in West London. Book direct for best rates, flexible terms, and dedicated support.'
}: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pageTitle = title ? `${title} — Brick & Capital` : 'Brick & Capital — Book Direct';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="Brick & Capital" 
                  className="h-10 w-10 rounded object-cover" 
                />
                <span className="text-lg font-semibold text-gray-900">
                  Brick & Capital
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  About
                </Link>
                <Link 
                  href="/faq" 
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  FAQs
                </Link>
                <a 
                  href={process.env.NEXT_PUBLIC_AIRBNB_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Airbnb
                </a>
                <a 
                  href={process.env.NEXT_PUBLIC_BOOKING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Booking.com
                </a>
                <Link 
                  href="/listing/1" 
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Book Now
                </Link>
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link 
                    href="/" 
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQs
                  </Link>
                  <a 
                    href={process.env.NEXT_PUBLIC_AIRBNB_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Airbnb
                  </a>
                  <a 
                    href={process.env.NEXT_PUBLIC_BOOKING_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Booking.com
                  </a>
                  <Link 
                    href="/listing/1" 
                    className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/logo.png" 
                    alt="Brick & Capital" 
                    className="h-8 w-8 rounded object-cover" 
                  />
                  <span className="text-xl font-bold text-white">Brick & Capital</span>
                </div>
                <p className="text-sm mb-4">
                  Elegant serviced apartments in West London. Book direct for best rates, flexible terms, and dedicated support.
                </p>
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Brick & Capital. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-white transition">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy/privacy" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy/terms" className="hover:text-white transition">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Book On */}
              <div>
                <h3 className="text-white font-semibold mb-4">Book On</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a 
                      href={process.env.NEXT_PUBLIC_AIRBNB_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z"/>
                      </svg>
                      Airbnb
                    </a>
                  </li>
                  <li>
                    <a 
                      href={process.env.NEXT_PUBLIC_BOOKING_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z"/>
                      </svg>
                      Booking.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}