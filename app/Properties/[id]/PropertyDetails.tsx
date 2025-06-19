"use client";
import {
  Hammer,
  BadgeDollarSign,
  Ruler,
  House,
  BedDouble,
  ChevronDown,
  MessageSquare,
  Phone,
  Bath,
  Flame,
  Snowflake,
  Utensils,
  Car,
  Building2,
  Home,
  DollarSign,
} from "lucide-react";
import SaveShare from "@/components/SaveShare";
import { useState } from "react";
import Image from "next/image";
import { Property } from "@/types/property";
import RequestDetailsBox from "@/components/RequestDetailsBox";

type PropertyDetailsProps = {
  property: Property;
};

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <main className="bg-gray-50 min-h-screen w-full">
      {/* Tabs for navigation */}
      <div className="w-full mx-auto px-4 pt-8">
        <div className="flex flex-wrap sm:flex-nowrap font-medium text-xs sm:text-sm md:text-base justify-between border-b border-gray-200 mb-4 bg-white rounded-t-2xl shadow-sm">
          <button
            className="tab-button p-3 font-semibold whitespace-nowrap hover:text-blue-700"
            onClick={() =>
              document
                .getElementById("overview")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Overview
          </button>
          <button
            className="tab-button p-3 font-semibold whitespace-nowrap hover:text-blue-700"
            onClick={() =>
              document
                .getElementById("Facts & features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Facts & features
          </button>
          <button
            className="tab-button p-3 font-semibold whitespace-nowrap hover:text-blue-700"
            onClick={() =>
              document
                .getElementById("Market value")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Market value
          </button>
        </div>
      </div>

      {/* Property Main Image */}
      <div className="w-full mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            className="w-full h-[600px] object-cover"
            src={property.imageUrl}
            alt={property.title}
            width={1200}
            height={400}
            priority
          />
        </div>
      </div>

      {/* Two-column area: Details (left) + Request Details (right) */}
      <div className="w-full mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Left: Main Property Detail Content */}
        <div className="w-full lg:w-2/3">
          {/* Overview Section */}
          <section
            id="overview"
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md mb-6"
          >
            {/* Price and Location */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-extrabold mb-2 text-gray-900">
                  ${property.price.toLocaleString()}
                </h2>
                <SaveShare />
              </div>
              <p className="text-gray-600 text-lg">{property.location}</p>
            </div>
            {/* Beds, Baths, and Sqft */}
            <div className="flex items-center justify-between border-t border-b py-6 border-gray-100">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-extrabold">{property.bedrooms}</h3>
                <p className="flex items-center gap-1 text-gray-500 font-medium">
                  Beds <BedDouble />
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-extrabold">
                  {property.bathrooms}
                </h3>
                <p className="text-gray-500 font-medium">Baths</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-extrabold">
                  {property.sqft.toLocaleString()}
                </h3>
                <p className="text-gray-500 font-medium">m²</p>
              </div>
            </div>
            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-6 mt-6 text-base mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50">
                  <House />
                </span>
                <p>{property.propertyType}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50">
                  <Hammer />
                </span>
                <p>Built in {property.YearBuilt}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50">
                  <Ruler />
                </span>
                <p>{property.LotSize} m²</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50">
                  <BadgeDollarSign />
                </span>
                <p>$-- Zestimate</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50">
                  <BadgeDollarSign />
                </span>
                <p>${property.HOADues}/mo HOA</p>
              </div>
            </div>
            {/* Property Description Section */}
            <section className="border-t border-b border-gray-100 py-6">
              {/* <p className="text-gray-700 leading-relaxed">
                {showMore
                  ? property.description
                  : property.description.slice(0, 250) + "..."}
              </p> */}
              {/* <button onClick={toggleShowMore} className="flex items-center">
                {showMore ? "Show Less" : "Property Description"}
                <ChevronDown
                  className={`ml-1 transition-transform ${
                    showMore ? "rotate-180" : "rotate-0"
                  }`}
                  size={16}
                />
              </button> */}
              <div className="flex gap-2 py-3 text-blue-600 mt-3 font-medium">
                <h1>Property Description</h1>
              </div>

              {/* <div className="flex gap-2 py-3 text-gray-400">
                | <p>Now on MHK-RealEstate</p> | <p>200 views</p> |{" "}
                <p>19 saves</p> |
              </div> */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {property.description}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nestled in the heart of Phnom Penh, this modern 3-bedroom villa
                blends elegant design with functional living. The spacious
                layout includes a sunlit open-concept living and dining area, a
                fully equipped gourmet kitchen, and a private balcony with
                stunning city views. The master suite boasts a walk-in closet
                and a luxurious ensuite bath. Enjoy access to a secure gated
                community, landscaped gardens, and private parking. Ideal for
                families or professionals seeking comfort, security, and urban
                convenience.
              </p>

              {/* <ol className="py-4 text-sm text-gray-400 list-disc list-inside">
                <li>MHK last checked: 13 hours ago</li>
                <li>Listing updated: January 25, 2025 at 08:00pm</li>
                <li>
                  Listed by: Polly Grueso TREC #0742460, 281-235-5925, Anchored
                  Real Estate Group
                </li>
                <li>Source: HAR, MLS#: 89058153</li>
              </ol> */}
            </section>
          </section>
          {/* Facts & features */}
          <section
            id="Facts & features"
            className="flex flex-col md:flex-row p-8 rounded-2xl border border-gray-100 shadow-md mb-6 gap-6 bg-white"
          >
            {/* Left Column */}
            <div className="w-full md:w-1/2 pr-0 md:pr-4">
              <h1 className="text-xl font-bold mb-4 text-gray-900">
                Facts & features
              </h1>

              <h2 className="font-semibold text-gray-700 mb-2">Interior</h2>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <BedDouble className="w-5 h-5 text-blue-600" />
                  Bedrooms: {property.bedrooms}
                </li>
                <li className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-blue-600" />
                  Bathrooms: {property.bathrooms}
                </li>
                <li className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-600" />
                  Room types: {property.rooms}
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <ul className="space-y-2 text-gray-700 mt-9 md:mt-11">
                <li className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-blue-600" />
                  Appliances: {property.rooms}
                </li>
                <li className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-600" />
                  Features: {property.indoorFeatures}
                </li>
                <li className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-blue-600" />
                  Total structure area: 2,156 m²
                </li>
                <li className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-blue-600" />
                  Livable area: 2,156 m²
                </li>
              </ul>
            </div>
          </section>

          {/* Additional Features */}
          <section className="flex flex-col md:flex-row p-8 rounded-2xl border border-gray-100 shadow-md mb-6 gap-6 bg-white">
            {/* Left Column */}
            <div className="w-full md:w-1/2 pr-0 md:pr-4">
              <h1 className="text-xl font-bold mb-2 text-gray-900">Property</h1>
              <section className="py-4 bg-white">
                <div className="max-w-2xl mx-auto flex flex-col items-start gap-6">
                  {/* Parking Info */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="bg-blue-100 p-2 rounded-full">
                      <Car className="w-5 h-5 text-blue-600" />
                    </span>
                    <p className="text-base font-medium">Parking Available</p>
                  </div>

                  {/* Commercial Area Info */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="bg-yellow-100 p-2 rounded-full">
                      <Building2 className="w-5 h-5 text-yellow-600" />
                    </span>
                    <p className="text-base font-medium">
                      Located in a Commercial Area
                    </p>
                  </div>
                </div>
              </section>
            </div>
            {/* Right Column */}
            <div className="w-full md:w-1/2 pl-0 md:pl-4">
              <h3 className="font-semibold text-base mt-2">Features</h3>
              <ul className="list-disc list-inside text-gray-700 mb-3">
                <li>Crown Molding, All Bedrooms Up, Countertops (Granite)</li>
                <li>Flooring: Carpet, Laminate</li>
                <li>Windows: Insulated/Low-E windows</li>
                <li>Number of fireplaces: 1</li>
                <li>Fireplace features: Wood Burning</li>
              </ul>
              <h3 className="font-semibold text-base mt-2">Interior area</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Total structure area: 2,156</li>
                <li>Total interior livable area: 2,156 m²</li>
              </ul>
            </div>
          </section>
          {/* Property Price Section */}
          <section
            id="Market value"
            className="bg-white p-8 rounded-2xl border border-gray-100 mb-10 shadow-md"
          >
            {/* Price History */}
            <h3 className="text-xl font-bold mb-2">Price history</h3>
            <table className="w-full text-left border-collapse mb-3">
              <thead>
                <tr className="border-b border-gray-200 text-gray-600 font-semibold">
                  <th className="py-2 px-2 w-1/4">Date</th>
                  <th className="py-2 px-2 w-1/4">Event</th>
                  <th className="py-2 px-2 w-1/4">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">1/25/2025</td>
                  <td className="py-3 px-2">Listed for sale</td>
                  <td className="py-3 px-2">
                    <p>$200,000</p>
                    <p className="text-sm text-gray-500">$93/m²</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-400 mt-2">
              Source: <span className="text-blue-600">HAR #89058153</span>{" "}
              <a href="#" className="underline">
                Report
              </a>
            </p>
            <h1 className="font-semibold mt-4 text-gray-900">
              Public tax history
            </h1>
            <p className="text-gray-500">Tax history is unavailable.</p>
          </section>
        </div>
        {/* Right: Request Details Box */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="sticky top-8 pb-8">
            <RequestDetailsBox />
          </div>
        </div>
      </div>
    </main>
  );
}
