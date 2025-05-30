"use client";

import { useState } from "react";
import {
  Input,
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Spinner } from "@heroui/react";

const agents = [
  {
    id: 1,
    name: "Polly Grueso",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    phone: "281-235-5925",
    email: "polly.agent@example.com",
    agency: "Anchored Real Estate Group",
    about: "Over 15 years helping clients sell homes for top value.",
  },
  {
    id: 2,
    name: "James Lee",
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    phone: "310-478-4567",
    email: "james.lee@example.com",
    agency: "Urban Realty",
    about: "Specialist in city properties with a strong negotiation record.",
  },
  {
    id: 3,
    name: "Sofia Rivas",
    imageUrl: "https://randomuser.me/api/portraits/women/48.jpg",
    phone: "646-555-2100",
    email: "sofia.rivas@example.com",
    agency: "Skyline Brokers",
    about: "Award-winning sales agent with attention to client needs.",
  },
];

const propertyTypes = [
  { key: "House", label: "House" },
  { key: "Condo", label: "Condo" },
  { key: "Land", label: "Land" },
  { key: "Townhouse", label: "Townhouse" },
  { key: "Other", label: "Other" },
];

export default function SellPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    details: "",
    askingPrice: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    contactMethod: "email",
    agentId: agents[0].id,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleAgentSelect = (id: number) => {
    setForm((prev) => ({ ...prev, agentId: id }));
  };

  const handleSelectChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  // Custom validation logic
  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email.";
    if (!form.address.trim())
      newErrors.address = "Property address is required.";
    if (!form.contactMethod)
      newErrors.contactMethod = "Choose a contact method.";
    if (form.contactMethod === "phone" && !form.phone.trim())
      newErrors.phone = "Phone is required if preferred contact is phone.";
    if (!form.propertyType) newErrors.propertyType = "Select a property type.";
    if (!form.askingPrice.trim())
      newErrors.askingPrice = "Asking price is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length) return;

    setLoading(true);
    // Example: Send to API route (optional)
    await fetch("/api/sell-property", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setSubmitted(true);
  };

  const selectedAgent = agents.find((a) => a.id === form.agentId)!;

  return (
    <main className="relative">
      {loading && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
          <Spinner />
        </div>
      )}
      <div className="w-full px-4 py-2 flex flex-row items-center justify-between gap-4 border-t border-b border-gray-700 mb-6">
        <h1 className="text-2xl font-bold">Sell Your Property</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        {/* Contact Form */}
        <div className="col-span-1 md:col-span-2 bg-white/90 rounded-xl shadow-md p-6 flex flex-col justify-between">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg
                width={80}
                height={80}
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
              <p className="text-xl font-bold mb-2">Thank you!</p>
              <p className="text-md">
                Your property info has been sent to {selectedAgent.name}. An
                agent will contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  isRequired
                  name="name"
                  label="Your Name"
                  value={form.name}
                  onChange={handleInput}
                  placeholder="Full Name"
                  isInvalid={!!errors.name}
                  errorMessage={errors.name}
                />
                <Input
                  isRequired
                  name="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleInput}
                  placeholder="your@email.com"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email}
                />
                <Input
                  isRequired={form.contactMethod === "phone"}
                  name="phone"
                  label="Phone"
                  value={form.phone}
                  onChange={handleInput}
                  placeholder="e.g., 555-123-4567"
                  isInvalid={!!errors.phone}
                  errorMessage={errors.phone}
                />
                <Input
                  isRequired
                  name="address"
                  label="Property Address"
                  value={form.address}
                  onChange={handleInput}
                  placeholder="123 Main St, City"
                  isInvalid={!!errors.address}
                  errorMessage={errors.address}
                />
                <Input
                  isRequired
                  name="askingPrice"
                  label="Asking Price (USD)"
                  value={form.askingPrice}
                  onChange={handleInput}
                  placeholder="e.g. 350000"
                  isInvalid={!!errors.askingPrice}
                  errorMessage={errors.askingPrice}
                />
                <div className="flex flex-col ">
                  <label
                    htmlFor="propertyType"
                    className="text-sm font-medium text-gray-700"
                  >
                    Property Type
                  </label>
                  <Select
                    id="propertyType"
                    placeholder="Select property type"
                    selectedKeys={
                      form.propertyType
                        ? new Set([form.propertyType])
                        : undefined
                    }
                    onChange={(e) =>
                      handleSelectChange("propertyType", e.target.value)
                    }
                    isInvalid={!!errors.propertyType}
                    errorMessage={errors.propertyType}
                    name="propertyType"
                    className="w-full"
                  >
                    {propertyTypes.map((type) => (
                      <SelectItem key={type.key} value={type.key}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <Input
                  name="bedrooms"
                  label="Bedrooms"
                  type="number"
                  min={0}
                  value={form.bedrooms}
                  onChange={handleInput}
                  placeholder="Number of bedrooms"
                />
                <Input
                  name="bathrooms"
                  label="Bathrooms"
                  type="number"
                  min={0}
                  value={form.bathrooms}
                  onChange={handleInput}
                  placeholder="Number of bathrooms"
                />
              </div>
              <Textarea
                name="details"
                label="Details (optional)"
                value={form.details}
                onChange={handleInput}
                placeholder="Share anything special about your property..."
                minRows={3}
              />
              <div className="flex flex-col gap-2">
                <label className="font-semibold mb-1">
                  Preferred Contact Method
                </label>
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
                {errors.contactMethod && (
                  <p className="text-red-500 text-xs">{errors.contactMethod}</p>
                )}
              </div>
              <div>
                <label className="font-semibold mb-2 block">Select Agent</label>
                <div className="flex gap-4 overflow-x-auto py-10 px-2">
                  {agents.map((agent) => (
                    <Card
                      key={agent.id}
                      isPressable
                      shadow="sm"
                      className={`min-w-[220px] transition-all duration-200 ${
                        form.agentId === agent.id
                          ? "border-2 border-indigo-600 scale-105 shadow-lg"
                          : "hover:border-indigo-400"
                      }`}
                      onPress={() => handleAgentSelect(agent.id)}
                    >
                      <CardBody className="flex flex-col items-center gap-2">
                        <Image
                          src={agent.imageUrl}
                          width={72}
                          height={72}
                          radius="full"
                          alt={agent.name}
                          className="mb-1"
                        />
                        <h3 className="text-md font-bold">{agent.name}</h3>
                        <p className="text-xs text-gray-500">{agent.agency}</p>
                        <p className="text-xs">{agent.phone}</p>
                      </CardBody>
                      <CardFooter className="justify-center">
                        <Button
                          color={
                            form.agentId === agent.id ? "primary" : "default"
                          }
                          size="sm"
                          variant={
                            form.agentId === agent.id ? "solid" : "bordered"
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            handleAgentSelect(agent.id);
                          }}
                        >
                          {form.agentId === agent.id ? "Selected" : "Choose"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              <Button
                className="w-full font-semibold"
                type="submit"
                color="primary"
                size="lg"
                isDisabled={loading}
              >
                Contact Agent & Sell
              </Button>
            </form>
          )}
        </div>
        {/* Agent Details */}
        <div className="col-span-1 flex flex-col gap-4">
          <Card className="rounded-xl shadow-lg p-3">
            <CardBody className="flex flex-col items-center">
              <Image
                src={selectedAgent.imageUrl}
                width={100}
                height={100}
                radius="full"
                alt={selectedAgent.name}
                className="mb-2"
              />
              <h2 className="text-xl font-bold">{selectedAgent.name}</h2>
              <p className="text-gray-600 mb-1">{selectedAgent.agency}</p>
              <p className="text-sm mb-2">{selectedAgent.about}</p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href={`tel:${selectedAgent.phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {selectedAgent.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${selectedAgent.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {selectedAgent.email}
                </a>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
