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
    name: "Polly Grueso",
    imageUrl:
      "https://imgcdn.stablediffusionweb.com/2024/11/6/8708a5a1-2092-49ef-bb2b-d8c9567f3595.jpg",
    phone: "281-235-5925",
    email: "polly.agent@example.com",
    agency: "Anchored Real Estate Group",
    about:
      "Over 15 years helping clients sell homes for top value. Polly is a certified negotiation expert, consistently achieving above-market sales for her clients. She specializes in staging and marketing strategies that maximize property exposure and has a reputation for transparent communication throughout the selling process.",
  },
  {
    id: 2,
    name: "Jennifer lorez",
    imageUrl:
      "https://imgcdn.stablediffusionweb.com/2024/10/22/b749b5f3-f64e-4dde-9182-2254b29486c1.jpg",
    phone: "310-478-4567",
    email: "james.lee@example.com",
    agency: "Urban Realty",
    about:
      "Specialist in city properties with a strong negotiation record. James has closed over 200 urban property deals, leveraging deep market knowledge and digital marketing expertise. He is known for his responsiveness and ability to guide first-time sellers through every step.",
  },
  {
    id: 3,
    name: "Sofia Rivas",
    imageUrl:
      "https://i.pinimg.com/originals/cd/07/8c/cd078cd628bf15fa05303482a5eb6d31.png",
    phone: "646-555-2100",
    email: "sofia.rivas@example.com",
    agency: "Skyline Brokers",
    about:
      "Award-winning sales agent with attention to client needs. Sofia has received multiple industry awards for customer satisfaction and sales volume. She provides personalized selling plans, multilingual support, and is highly rated for her follow-through and dedication.",
  },
  {
    id: 4,
    name: "Amenda Chan",
    imageUrl:
      "https://img.freepik.com/premium-photo/professional-headshot-indian-woman-business-suit_943281-26035.jpg",
    phone: "702-444-1234",
    email: "david.chan@example.com",
    agency: "Golden Homes",
    about:
      "Expert in luxury and investment properties. David brings over a decade of experience in high-end real estate, offering tailored marketing for luxury listings and in-depth investment analysis. He is trusted by repeat clients for his discretion and market insight.",
  },
  {
    id: 5,
    name: "Linda Smith",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E12AQFT7GlBaqw0kg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520242448808?e=2147483647&v=beta&t=dbUghHgF29FEQi7lQSk4WbgGB-GBhrxgbINhnMfwgxY",
    phone: "213-555-7890",
    email: "linda.smith@example.com",
    agency: "HomeFinders Realty",
    about:
      "Known for dedicated service and quick sales. Linda has a proven track record of selling homes faster than the market average. She excels at pricing strategies, open house events, and provides sellers with regular updates and honest feedback.",
  },
  {
    id: 6,
    name: "Laura Jane",
    imageUrl:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/17b1593d-fecb-4684-bd4f-09f4fe3949b9/faa90aa0-3dfa-4756-844e-e9a4eb037880.png",
    phone: "112-555-7790",
    email: "laura.jane@example.com",
    agency: "HomeFinders Realty",
    about:
      "Known for dedicated service and quick sales. Laura is praised for her attention to detail, proactive communication, and ability to coordinate seamless transactions. She offers complimentary home evaluations and custom marketing plans for each client.",
  },
];

const propertyTypes = [
  { key: "House", label: "House" },
  { key: "Condo", label: "Condo" },
  { key: "Land", label: "Land" },
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
