"use client";
import {
  Hammer,
  Ruler,
  House,
  BedDouble,
  Bath,
  Flame,
  Snowflake,
  Utensils,
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

  // Add extra fields for rental if needed
  const leaseTerm = property.leaseTerm || "1 year min";
  const deposit = property.deposit || property.price; // Default: 1 month rent as deposit
  const availableDate = property.availableDate || "Immediately";

  return (
    <main className="p-2 bg-gray-50 min-h-screen w-full">
      {/* Tabs for navigation */}
      <div className="tabs-container flex flex-wrap sm:flex-nowrap font-medium text-xs sm:text-sm md:text-base justify-between border-b border-gray-300 mb-4 ">
        <button
          className="tab-button p-2 font-medium whitespace-nowrap"
          onClick={() =>
            document.getElementById("overview")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Overview
        </button>
        <button
          className="tab-button p-2 font-medium whitespace-nowrap"
          onClick={() =>
            document.getElementById("Facts & features")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Facts & Features
        </button>
        <button
          className="tab-button p-2 font-medium whitespace-nowrap"
          onClick={() =>
            document.getElementById("Rental Market")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Rental Market
        </button>
        <button
          className="tab-button p-2 font-medium whitespace-nowrap"
          onClick={() =>
            document.getElementById("Neighborhood")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Neighborhood
        </button>
      </div>

      {/* Property Main Image */}
      <div className="flex w-full mb-4">
        <Image
          className="rounded-md w-full h-[600px] object-cover"
          src={property.imageUrl}
          alt={property.title}
          width={1200}
          height={400}
        />
      </div>

      {/* Main Content and Request Details Side by Side */}
      <div className="py-4 flex flex-col lg:flex-row gap-8 w-full">
        {/* Left: Main Content */}
        <div className="flex-1 min-w-0">
          {/* Overview Section */}
          <section
            id="overview"
            className="p-6 rounded-xl border-2 mb-4 shadow-md bg-white"
          >
            {/* Price and Location */}
            <div className="mb-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h2 className="text-3xl font-bold mb-2 text-blue-700">
                  USD {property.price.toLocaleString()}{" "}
                  <span className="text-lg font-normal text-gray-500">
                    / month
                  </span>
                </h2>
                <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full font-semibold">
                  For Rent
                </span>
                <SaveShare />
              </div>
              <p className="text-gray-700">{property.location}</p>
            </div>

            {/* Beds, Baths, and Sqft */}
            <div className="flex items-center justify-between border-t border-b py-4 border-gray-300">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold">{property.bedrooms}</h3>
                <p>
                  Beds <BedDouble className="inline ml-1" size={18} />
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold">{property.bathrooms}</h3>
                <p>Baths</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold">
                  {property.sqft.toLocaleString()}
                </h3>
                <p>m²</p>
              </div>
            </div>

            {/* Rental Details */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <House />
                <p>{property.propertyType}</p>
              </div>
              <div className="flex items-center gap-2">
                <Hammer />
                <p>Built in {property.YearBuilt}</p>
              </div>
              <div className="flex items-center gap-2">
                <Ruler />
                <p>{property.LotSize} m²</p>
              </div>
              <div className="flex items-center gap-2">
                <Ruler />
                <p>Lease Term: {leaseTerm}</p>
              </div>
              <div className="flex items-center gap-2">
                <Ruler />
                <p>Deposit: USD {deposit.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <Ruler />
                <p>Available: {availableDate}</p>
              </div>
            </div>

            {/* Property Description Section */}
            <section className="border-t border-b border-gray-300">
              <h2 className="text-xl font-bold py-6">What's special</h2>
              <div className="flex gap-2 p-2 text-black flex-wrap">
                {property.architecturalStyle && (
                  <p className="bg-[#F1F1F4] rounded-sm p-1">
                    {property.architecturalStyle}
                  </p>
                )}
                {property.exterior && (
                  <p className="bg-[#F1F1F4] rounded-sm p-1">
                    {property.exterior}
                  </p>
                )}
                {property.outdoorAmenities && (
                  <p className="bg-[#F1F1F4] rounded-sm p-1">
                    {property.outdoorAmenities}
                  </p>
                )}
                {property.indoorFeatures && (
                  <p className="bg-[#F1F1F4] rounded-sm p-1">
                    {property.indoorFeatures}
                  </p>
                )}
                {property.propertyType && (
                  <p className="bg-[#F1F1F4] rounded-sm p-1">
                    {property.propertyType}
                  </p>
                )}
              </div>

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
                  Nestled in the heart of Phnom Penh, this modern 3-bedroom
                  villa blends elegant design with functional living. The
                  spacious layout includes a sunlit open-concept living and
                  dining area, a fully equipped gourmet kitchen, and a private
                  balcony with stunning city views. The master suite boasts a
                  walk-in closet and a luxurious ensuite bath. Enjoy access to a
                  secure gated community, landscaped gardens, and private
                  parking. Ideal for families or professionals seeking comfort,
                  security, and urban convenience.
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

          {/* Rental Market Value Section */}
          <section
            id="Rental Market"
            className="p-4 rounded-xl border-2 mb-4 shadow-md bg-white"
          >
            {/* Price History */}
            <h3 className="text-xl font-bold mb-2">Rental History</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300 text-gray-600 font-semibold">
                  <th className="py-2 px-2 w-1/4">Date</th>
                  <th className="py-2 px-2 w-1/4">Event</th>
                  <th className="py-2 px-2 w-1/4">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2">1/25/2025</td>
                  <td className="py-3 px-2">Listed for rent</td>
                  <td className="py-3 px-2">
                    <p>USD {property.price.toLocaleString()}/mo</p>
                    <p className="text-sm text-gray-500">
                      USD {(property.price / property.sqft).toFixed(2)}/sqft
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

        {/* Right: Request Details Box (Sticky on Desktop) */}
        <div className="w-full lg:w-[400px] flex-shrink-0">
          <div className="sticky top-8">
            <RequestDetailsBox />
          </div>
        </div>
      </div>
    </main>
  );
}
