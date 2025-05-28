import { mockProperties } from "../mockProperties";
import PropertyDetails from "./PropertyDetails";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function PropertyDetailPage({ params }: Props) {
  const propertyId = Number(params.id);
  const property = mockProperties.find((p) => p.id === propertyId);

  if (!property) {
    // Optionally show a 404 page if not found
    notFound();
    return null;
  }

  return <PropertyDetails property={property as any} />;
}
