"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 px-6 text-center transition-all duration-500">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">
          About Our Company
        </h1>
        <p className="max-w-2xl mx-auto text-lg animate-fade-in delay-200">
          We are committed to transforming real estate experiences in Cambodia
          by connecting people with properties they love.
        </p>
      </section>

      {/* Company Info */}
      <section className="py-20 px-6 max-w-5xl mx-auto transition-opacity duration-700 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://images.pexels.com/photos/6248976/pexels-photo-6248976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Office"
              width={600}
              height={400}
              unoptimized
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Founded in 2024, our mission is to make property buying, selling,
              and renting easier and more accessible across Phnom Penh and
              beyond. We combine expert local knowledge with cutting-edge
              digital tools to bring you the best listings in the market.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're searching for your dream home or selling an
              investment property, our dedicated agents are here to guide you
              every step of the way with professionalism and care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-20 px-6 transition-transform duration-700 animate-slide-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
          <p className="mb-4 text-lg">
            Our mission is to empower buyers and sellers with the tools,
            knowledge, and service they need to make smart property decisions.
            We envision a future where finding a home in Cambodia is simple,
            transparent, and efficient.
          </p>
          <p className="text-lg">
            We are not just agents—we are your advisors, your partners, and your
            biggest supporters in achieving your real estate goals.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We prioritize honesty, transparency, and ethics in every interaction.",
              },
              {
                title: "Innovation",
                desc: "We embrace technology to deliver better, faster service.",
              },
              {
                title: "Client Success",
                desc: "Your goals are our goals. We go above and beyond to help you succeed.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="flex justify-center items-center min-h-[300px]">
            {[
              {
                name: "Neak Vanneath",
                title: "Developer and Designer",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition duration-300 flex flex-col items-center justify-center text-center"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Ready to buy, sell, or rent? Reach out today and let one of our expert
          agents assist you.
        </p>
        <Link
          href="/Contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
