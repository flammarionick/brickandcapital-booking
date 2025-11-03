import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="container py-6 space-y-6">
        {/* Hero Section */}
        <div className="bg-[#F7F6F3] rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <img src="/logo.png" alt="Brick & Capital" className="w-20 h-20" />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-[#002A4A]">
              Brick &amp; Capital — Serviced Apartments
            </h1>
            <p className="text-gray-700 mt-2">
              Elegant stays in West London. Book direct for best rates, flexible terms, and dedicated support.
            </p>
          </div>
        </div>

        {/* Featured Listing */}
        <div className="card space-y-3">
          <img
            src="/images/wandsworth/01.jpg"
            alt="Elegant 3-Bedroom Serviced Apartment in Wandsworth"
            className="w-full h-80 object-cover rounded"
          />
          <h2 className="text-2xl font-semibold text-[#002A4A]">
            Elegant 3-Bedroom Serviced Apartment in Wandsworth, London
          </h2>
          <p className="text-gray-700">
            Spacious, bright 3BR with full kitchen, dining for six, and premium bedding. Ideal for families and corporate stays.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium">£322 / night</p>
            <Link href="/listing/1" className="btn btn-primary">View Apartment</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
