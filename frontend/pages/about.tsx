import Head from "next/head";

export default function About() {
  return (
    <div className="container py-10 space-y-6">
      <Head><title>About — Brick &amp; Capital</title></Head>
      <h1 className="text-3xl md:text-4xl font-bold text-[#002A4A]">About Brick &amp; Capital</h1>
      <div className="card space-y-4">
        <p>
          Brick &amp; Capital provides elegant, professionally managed serviced apartments in West London.
          We design each home for real comfort—hotel-quality linens, fast Wi-Fi, fully equipped kitchens,
          and reliable housekeeping—so business and family travellers can settle in instantly.
        </p>
        <p>
          We’re local, responsive and detail-driven. Book direct for flexible terms, best available rates,
          and dedicated support before, during and after your stay.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Prime West London locations (Wandsworth, Hammersmith, Kensington)</li>
          <li>Self check-in, clear house rules, and 24/7 guest support</li>
          <li>Corporate-ready amenities: workspace, fast Wi-Fi, weekly cleaning</li>
        </ul>
      </div>
    </div>
  );
}
