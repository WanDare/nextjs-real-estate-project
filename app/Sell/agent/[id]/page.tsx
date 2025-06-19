// app/sell/agent/[id]/page.tsx
"use client";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import {
  Input,
  Textarea,
  Select,
  SelectItem,
  Button,
  Image,
} from "@nextui-org/react";

const agents = [
  {
    id: 1,
    name: "Sokunthy Chea",
    imageUrl:
      "https://imgcdn.stablediffusionweb.com/2024/11/6/8708a5a1-2092-49ef-bb2b-d8c9567f3595.jpg",
    phone: "085-234-1592",
    email: "sokunthy.chea@example.com",
    agency: "Mekong Property Group",
    about:
      "With over 15 years of experience, Sokunthy helps clients get top value for their homes. Specializes in marketing and negotiation, delivering above-market results with honesty and transparency.",
  },
  {
    id: 2,
    name: "Chanra Phan",
    imageUrl:
      "https://imgcdn.stablediffusionweb.com/2024/10/22/b749b5f3-f64e-4dde-9182-2254b29486c1.jpg",
    phone: "096-478-4567",
    email: "chanra.phan@example.com",
    agency: "Urban Realty Cambodia",
    about:
      "Expert in Phnom Penh city properties with deep market insights. Chanra is trusted for guiding first-time sellers and investors through every step of the process.",
  },
  {
    id: 3,
    name: "Sreypov Kong",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/17/54/28/360_F_517542860_S6JeujV9a7G8bhje5qIyfYNCNBvowUeS.jpg",
    phone: "089-555-2100",
    email: "sreypov.kong@example.com",
    agency: "Skyline Brokers Cambodia",
    about:
      "Award-winning sales agent known for personalized service. Sreypov is multilingual and ensures excellent communication and follow-through for all clients.",
  },
  {
    id: 4,
    name: "Rithy Keo",
    imageUrl:
      "https://media.istockphoto.com/id/1318327528/photo/charming-asian-businesswoman-working-with-a-laptop-at-the-office-looking-at-camera.jpg?s=612x612&w=0&k=20&c=t-DTh02iSEXHea_5ZV0hnuw-8KCMz3Z9Ki4slzQkulk=",
    phone: "092-444-1234",
    email: "rithy.keo@example.com",
    agency: "Golden Homes Cambodia",
    about:
      "Specialist in luxury and investment real estate. Rithy has built a solid reputation for delivering market insights and professional guidance on high-value properties.",
  },
  {
    id: 5,
    name: "Sokha Chhim",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E12AQFT7GlBaqw0kg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520242448808?e=2147483647&v=beta&t=dbUghHgF29FEQi7lQSk4WbgGB-GBhrxgbINhnMfwgxY",
    phone: "081-555-7890",
    email: "sokha.chhim@example.com",
    agency: "HomeFinders Cambodia",
    about:
      "Sokha is known for quick home sales and professional service. Clients praise her dedication, pricing strategy, and market knowledge.",
  },
  {
    id: 6,
    name: "Pov Sreypich",
    imageUrl:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/17b1593d-fecb-4684-bd4f-09f4fe3949b9/faa90aa0-3dfa-4756-844e-e9a4eb037880.png",
    phone: "087-555-7790",
    email: "dara.meas@example.com",
    agency: "NextStep Realty",
    about:
      "Known for transparent communication and effective coordination. Dara offers free home evaluations and customized marketing plans.",
  },
];

const propertyTypes = [
  { key: "House", label: "House" },
  { key: "Condo", label: "Condo" },
  { key: "Townhouse", label: "Townhouse" },
  { key: "Apartment", label: "Apartment" },
  { key: "Other", label: "Other" },
];
export default function AgentFormScreen() {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const agent = agents.find((a) => a.id === Number(id));
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    askingPrice: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    details: "",
    contactMethod: "email",
  });

  if (!agent) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <p>Agent not found.</p>
        <Button onClick={() => router.push("/Sell")}>Back</Button>
      </main>
    );
  }

  const handleInput = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-lg shadow-lg mx-auto px-4 py-6">
        <button
          onClick={() => router.push("/Sell")}
          className="mb-2 text-sm text-gray-400 hover:text-blue-500"
        >
          ← Back to agent list
        </button>
        <div className="flex flex-col items-center mb-3">
          <Image
            src={agent.imageUrl}
            width={60}
            height={60}
            alt={agent.name}
            className="rounded-full"
          />
          <span className="text-lg font-bold mt-2">{agent.name}</span>
          <span className="text-xs text-gray-500">{agent.agency}</span>
          <span className="text-xs text-gray-600">{agent.about}</span>
        </div>
        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-3"
          >
            <Input
              name="name"
              label="Your Name"
              isRequired
              value={form.name}
              onChange={handleInput}
              placeholder="Full Name"
            />
            <Input
              name="email"
              label="Email"
              type="email"
              isRequired
              value={form.email}
              onChange={handleInput}
              placeholder="your@email.com"
            />
            <Input
              name="phone"
              label="Phone"
              value={form.phone}
              onChange={handleInput}
              placeholder="e.g., 555-123-4567"
            />
            <Input
              name="address"
              label="Property Address"
              isRequired
              value={form.address}
              onChange={handleInput}
              placeholder="123 Main St, City"
            />
            <Input
              name="askingPrice"
              label="Asking Price (USD)"
              isRequired
              value={form.askingPrice}
              onChange={handleInput}
              placeholder="e.g. 350000"
            />
            <Input
              name="bedrooms"
              label="Bedrooms"
              type="number"
              value={form.bedrooms}
              onChange={handleInput}
              placeholder="Number of bedrooms"
            />
            <Input
              name="bathrooms"
              label="Bathrooms"
              type="number"
              value={form.bathrooms}
              onChange={handleInput}
              placeholder="Number of bathrooms"
            />
            <Select
              name="propertyType"
              label=""
              isRequired
              selectedKeys={form.propertyType ? [form.propertyType] : []}
              onSelectionChange={(keys) =>
                setForm((prev) => ({
                  ...prev,
                  propertyType: Array.from(keys)[0] as string,
                }))
              }
              placeholder="Select property type"
              className="w-full"
            >
              {propertyTypes.map((type) => (
                <SelectItem key={type.key} value={type.key}>
                  {type.label}
                </SelectItem>
              ))}
            </Select>
            <Textarea
              name="details"
              label="Details (optional)"
              value={form.details}
              onChange={handleInput}
              placeholder="Share anything special about your property..."
              minRows={2}
            />
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Preferred Contact Method</span>
              <div className="flex gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={form.contactMethod === "email"}
                    onChange={handleInput}
                  />
                  Email
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={form.contactMethod === "phone"}
                    onChange={handleInput}
                  />
                  Phone
                </label>
              </div>
            </div>
            <Button className="w-full" color="primary" type="submit">
              Submit
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center py-8">
            <svg
              width={64}
              height={64}
              className="mb-2 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-lg font-bold mb-2">Thank you!</p>
            <p className="text-sm">
              Your property info has been sent to {agent.name}. An agent will
              contact you soon.
            </p>
            <Button
              className="mt-4"
              color="primary"
              onClick={() => router.push("/Sell")}
            >
              Back to agent list
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
