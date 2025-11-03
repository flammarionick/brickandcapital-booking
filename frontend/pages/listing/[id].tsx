import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ListingPage() {
  const router = useRouter();
  const { id } = router.query;

  const listing = {
    id,
    title: "Elegant 3-Bedroom Serviced Apartment in Wandsworth, London",
    description:
      "Spacious, bright 3BR with full kitchen, dining for six, and premium bedding. Ideal for families and corporate stays.",
    price_per_night: 322,
    location: "Wandsworth, London",
    images: Array.from({ length: 10 }, (_, i) => `/images/wandsworth/${String(i + 1).padStart(2, "0")}.jpg`),
  };

  return (
    <Layout title={listing.title}>
      <div className="container py-10 space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#002A4A] mb-2">{listing.title}</h1>
          <p className="text-gray-600">{listing.location}</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {listing.images.map((img, i) => (
            <img key={i} src={img} alt={`Image ${i + 1}`} className="w-full h-64 object-cover rounded" />
          ))}
        </div>

        {/* Description & Enquiry */}
        <div className="card space-y-3">
          <p className="text-gray-700">{listing.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium">£{listing.price_per_night} / night</p>
            <Link href="/contact" className="btn btn-primary">Send Booking Enquiry</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
