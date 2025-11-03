import Head from "next/head";
import type { ReactNode } from "react";
const Q = ({ q, a }: { q: string; a: ReactNode }) => (
  <details className="card">
    <summary className="font-semibold">{q}</summary>
    <div className="pt-2 text-gray-700">{a}</div>
  </details>
);

export default function FAQ() {
  return (
    <div className="container py-10 space-y-6">
      <Head><title>FAQs — Brick &amp; Capital</title></Head>
      <h1 className="text-3xl md:text-4xl font-bold text-[#002A4A]">Frequently Asked Questions</h1>

      <Q q="How do I book?"
         a={<p>Choose your dates on a listing and click <b>Send Booking Enquiry</b>. We’ll confirm availability and send next steps by email.</p>} />
      <Q q="Do you take a security deposit?"
         a={<p>For most stays we pre-authorise a refundable deposit. Exact amount depends on length of stay and guest profile; we’ll confirm in your email.</p>} />
      <Q q="What’s your cancellation policy?"
         a={<p>Flexible 7 days for direct bookings unless otherwise stated. Full details are on the checkout page and your confirmation email.</p>} />
      <Q q="Is early check-in / late check-out available?"
         a={<p>Subject to availability. Tell us your preference in your enquiry and we’ll do our best.</p>} />
      <Q q="Do you allow pets or parties?"
         a={<p>No parties or events. Pets only by prior agreement in select homes.</p>} />
    </div>
  );
}
