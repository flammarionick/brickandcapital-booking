import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }: { children: React.ReactNode; title?: string }) {
  const pageTitle = title ? `${title} — Brick & Capital` : "Brick & Capital — Book Direct";

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Brick & Capital — Serviced Apartments in West London" />
      </Head>

      {/* Navbar */}
      <header className="navbar">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Brick & Capital" className="w-10 h-10 rounded" />
            <span className="font-semibold text-lg text-[#002A4A]">Brick & Capital</span>
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQs</Link>
            <Link href="/contact" className="btn btn-primary text-white px-3 py-1 rounded-md">Book Now</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-700 text-sm">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="w-6 h-6" alt="Brick & Capital" />
            <span>© {new Date().getFullYear()} Brick & Capital</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.airbnb.com/l/c313AB9E" target="_blank" rel="noreferrer">Airbnb</a>
            <a href="https://www.booking.com/Share-gDN2HGG" target="_blank" rel="noreferrer">Booking.com</a>
            <Link href="/policy/terms">Terms</Link>
            <Link href="/policy/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
