"use client";
import { SetStateAction, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Input,
  Textarea,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

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
  {
    id: 4,
    name: "David Chan",
    imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    phone: "702-444-1234",
    email: "david.chan@example.com",
    agency: "Golden Homes",
    about: "Expert in luxury and investment properties.",
  },
  {
    id: 5,
    name: "Linda Smith",
    imageUrl: "https://randomuser.me/api/portraits/women/66.jpg",
    phone: "213-555-7890",
    email: "linda.smith@example.com",
    agency: "HomeFinders Realty",
    about: "Known for dedicated service and quick sales.",
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

type Agent = {
  id: number;
  name: string;
  imageUrl: string;
  phone: string;
  email: string;
  agency: string;
  about: string;
};

export default function SellPage() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
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

  const handleAgentSelect = (agent: SetStateAction<Agent | null>) => {
    setSelectedAgent(agent);
    setModalOpen(true);
    setSubmitted(false);
    setForm({
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
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedAgent(null);
    setSubmitted(false);
  };

  const handleInput = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-[80vh] flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Choose an Agent to Sell With</h1>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            isPressable
            shadow="sm"
            className="min-w-[260px] max-w-[320px] transition-all duration-200 hover:scale-105 hover:border-indigo-400 border-2"
            onPress={() => handleAgentSelect(agent)}
          >
            <CardBody className="flex flex-col items-center gap-2 py-6">
              <Image
                src={agent.imageUrl}
                width={86}
                height={86}
                alt={agent.name}
                className="mb-2 rounded-full"
              />
              <h3 className="text-lg font-bold">{agent.name}</h3>
              <p className="text-xs text-gray-500">{agent.agency}</p>
              <p className="text-xs">{agent.phone}</p>
              <p className="text-xs italic mt-1">{agent.about}</p>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                size="sm"
                variant="solid"
                onClick={(e) => {
                  e.preventDefault();
                  handleAgentSelect(agent);
                }}
              >
                Sell with {agent.name.split(" ")[0]}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal for input info */}
      <Modal isOpen={modalOpen} onClose={handleModalClose} size="lg">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 items-center">
            <Image
              src={selectedAgent?.imageUrl}
              width={60}
              height={60}
              alt={selectedAgent?.name}
              className="rounded-full"
            />
            <span className="text-lg font-bold">{selectedAgent?.name}</span>
            <span className="text-xs text-gray-500">
              {selectedAgent?.agency}
            </span>
            <span className="text-xs text-gray-600">
              {selectedAgent?.about}
            </span>
          </ModalHeader>
          <ModalBody>
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-3 max-h-[60vh] overflow-y-auto pr-2"
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
                  <span className="font-semibold">
                    Preferred Contact Method
                  </span>
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
                  Your property info has been sent to {selectedAgent?.name}. An
                  agent will contact you soon.
                </p>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="light" color="danger" onClick={handleModalClose}>
              {submitted ? "Close" : "Cancel"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  );
}
