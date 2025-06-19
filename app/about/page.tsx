"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">About Our Company</h1>
        <p className="max-w-2xl mx-auto text-xl opacity-90">
          Transforming real estate in Cambodia by connecting people with
          properties they love.
        </p>
      </section>

      {/* Company Info */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.pexels.com/photos/6248976/pexels-photo-6248976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=700"
              alt="Office"
              width={700}
              height={450}
              unoptimized
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              Founded in 2024, our mission is to simplify and elevate the
              process of buying, selling, and renting properties throughout
              Phnom Penh and beyond.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              With expert local knowledge and advanced technology, our agents
              provide tailored solutions and exceptional service at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="mb-4 text-lg text-gray-700">
            To empower clients with modern tools, data-driven insights, and
            professional guidance to make confident real estate decisions.
          </p>
          <p className="text-lg text-gray-700">
            We envision a real estate market where every transaction is simple,
            transparent, and rewarding.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Integrity", "Innovation", "Client Success"].map((title, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {title}
                </h3>
                <p className="text-gray-600">
                  {title === "Integrity" &&
                    "We act with honesty, transparency, and professionalism in every interaction."}
                  {title === "Innovation" &&
                    "We utilize technology to enhance service delivery and improve user experience."}
                  {title === "Client Success" &&
                    "We measure our success by the satisfaction and success of our clients."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className=" mx-auto flex flex-col lg:flex-row items-start gap-10">
          {/* Left Side: Section Title and Description */}
          <div className="lg:w-1/2">
            <p className="text-sm text-blue-600 font-medium mb-2">Our Team</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-gray-600">
              Our leadership blends technical excellence, creative thinking, and
              strategic execution to elevate Cambodia’s property experience.
            </p>
            <p className="text-gray-600">
              Together, we deliver modern real estate platforms focused on
              speed, usability, and client satisfaction.
            </p>
          </div>

          {/* Right Side: Team Cards */}
          <div className="lg:w-1/2 overflow-x-auto">
            <div className="flex gap-6 min-w-[900px]">
              {[
                {
                  name: "Neak Vanneath",
                  title: "Developer & Designer",
                  img: "https://randomuser.me/api/portraits/women/65.jpg",
                  desc: "Specializes in UI systems, clean component architecture, and intuitive design experiences tailored for the Cambodian market.",
                },
                {
                  name: "Dara Meas",
                  title: "Product Manager",
                  img: "https://randomuser.me/api/portraits/men/85.jpg",
                  desc: "Drives roadmap strategy with agile execution and a focus on aligning features with market demand and user insights.",
                },
                {
                  name: "Sreypov Kong",
                  title: "Marketing Lead",
                  img: "https://randomuser.me/api/portraits/women/70.jpg",
                  desc: "Leads digital marketing initiatives, brand strategy, and customer outreach across channels to grow platform reach.",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[260px] bg-white p-5 rounded-xl text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">{member.title}</p>
                  <p className="text-sm text-gray-600">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Whether you’re buying, selling, or exploring options—our experts are
          ready to guide you.
        </p>
        <Link
          href="/Contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
