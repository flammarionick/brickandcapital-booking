import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState(
    "Booking enquiry for: Elegant 3-Bedroom Serviced Apartment in Wandsworth, London\nDates: \nGuests: \nAdditional notes:"
  );

  const mailto = `mailto:admin@example.com?subject=Booking Enquiry — Brick & Capital&body=${encodeURIComponent(
    message + "\n\nFrom: " + name + " (" + email + ")"
  )}`;

  return (
    <div className="container py-8 space-y-6">
      <Head><title>Contact — Brick &amp; Capital</title></Head>
      <h1 className="text-3xl">Send a Booking Enquiry</h1>
      <div className="card space-y-3">
        <input className="border rounded p-2 w-full" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="border rounded p-2 w-full" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} />
        <label className="block">
          <span className="text-sm text-gray-700">Message</span>
          <textarea
            rows={8}
            className="border rounded p-2 w-full mt-1"
            placeholder="Add any additional details or questions"
            title="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </label>
        <a href={mailto} className="btn btn-primary">Send Email</a>
        <p className="text-sm text-gray-600">We’ll reply within a few hours.</p>
      </div>
    </div>
  );
}
