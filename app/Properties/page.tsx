"use client";

import { useState } from "react";
import {
  Input,
  Pagination,
  PaginationItemRenderProps,
  PaginationItemType,
} from "@nextui-org/react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";
import { HeartIcon } from "./icons/HeartIcon";
import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ChevronIcon } from "./icons/ChevronIcon";
import { SearchIcon } from "@/app/Properties/icons/SearchIcon";
import Forsale from "../Properties/components/FiltersButtons/Forsale";
import { mockProperties, Property } from "./mockProperties";

// Helper to format price with commas
function formatPrice(price: number) {
  return price.toLocaleString("en-US");
}

export default function Hero() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading] = useState(false);
  const router = useRouter();

  // Filter directly from mockProperties
  const filteredProperties = mockProperties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const propertiesToShow = filteredProperties.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const renderItem = ({
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button key={key} className={className} onClick={onNext}>
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }
    if (value === PaginationItemType.PREV) {
      return (
        <button key={key} className={className} onClick={onPrevious}>
          <ChevronIcon />
        </button>
      );
    }
    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }
    return (
      <button
        key={key}
        className={`${className} ${
          isActive
            ? "text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold"
            : ""
        }`}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <main className="relative">
      {loading && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
          <Spinner />
        </div>
      )}

      <div className="w-full px-4 py-2 flex flex-row items-center justify-between gap-4 border-t border-b border-gray-700">
        <div className="flex-grow md:w-auto relative">
          <Input
            isClearable
            radius="lg"
            placeholder="Search by province, district, or address"
            className="w-full md:w-96"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0" />
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Forsale />
      </div>

      <div className="p-4 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {propertiesToShow.map((property) => (
          <div
            key={property.id}
            className="relative cursor-pointer group"
            tabIndex={0}
            role="button"
            onClick={() => router.push(`/Properties/${property.id}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(`/Properties/${property.id}`);
              }
            }}
          >
            <Card shadow="sm" className="relative">
              <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={property.title}
                  className="w-full object-cover h-100%"
                  src={property.imageUrl}
                />
                {property.propertyType && (
                  <Chip
                    color="primary"
                    size="sm"
                    className="absolute top-2 left-2 z-10 bg-opacity-80"
                  >
                    {property.propertyType}
                  </Chip>
                )}
              </div>
              <Button
                size="sm"
                isIconOnly
                color="danger"
                aria-label="Like"
                className="absolute top-2 right-2 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <HeartIcon size={20} />
              </Button>
              <CardBody className="overflow-visible p-3">
                <p className="text-xl text-start">
                  USD {formatPrice(property.price)}
                </p>
                <p className="p-2 text-sm text-start">
                  {property.bedrooms} bed, {property.bathrooms} bath,{" "}
                  {property.sqft} m²
                </p>
                <b className="p-1 text-md text-default-500">
                  {property.location}
                </b>
              </CardBody>
              <CardFooter className="text-small justify-between flex items-center">
                <b className="text-xs text-start text-default-500">
                  For Sale: {property.isForSale ? "Yes" : "No"}
                </b>
                <Button
                  size="sm"
                  color="primary"
                  className="ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/Properties/${property.id}`);
                  }}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <Pagination
        disableCursorAnimation
        showControls
        total={Math.ceil(filteredProperties.length / 10)}
        initialPage={1}
        className="gap-2 mt-4"
        radius="full"
        renderItem={renderItem}
        variant="light"
        onChange={setCurrentPage}
      />
    </main>
  );
}
