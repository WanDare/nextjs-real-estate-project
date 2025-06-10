"use client";
import { useState, useEffect } from "react";
import { mockProperties } from "@/app/Properties/mockProperties"; // Adjust path as needed
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Saved() {
  const [savedPropertyIds, setSavedPropertyIds] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedPropertyIds") || "[]");
    setSavedPropertyIds(saved.map(Number));
  }, []);

  const savedProperties = mockProperties.filter((property) =>
    savedPropertyIds.includes(Number(property.id))
  );

  return (
    <main className="min-h-screen p-6 bg-gray-50 dark:bg-black">
      <div className="flex items-center gap-3 mb-6">
        <button
          aria-label="Back"
          onClick={() => router.back()}
          className="rounded-full bg-white hover:bg-gray-100 border shadow p-2 transition"
        >
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold">Saved Favourites</h1>
      </div>
      {savedProperties.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          You have no saved properties.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {savedProperties.map((property) => (
            <Card key={property.id} className="relative">
              <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={property.title}
                  className="w-full object-cover h-100%"
                  src={property.imageUrl}
                />
              </div>
              <CardBody className="p-3">
                <p className="text-xl">{property.title}</p>
                <p className="text-gray-500 mb-1">
                  USD {property.price.toLocaleString("en-US")}
                </p>
                <p className="text-sm text-default-500">{property.location}</p>
              </CardBody>
              <CardFooter>
                <Button
                  size="sm"
                  color="primary"
                  onClick={() => router.push(`/Properties/${property.id}`)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
