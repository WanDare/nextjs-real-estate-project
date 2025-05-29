// app/Properties/mockProperties.ts

export type Property = {
  id: number;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  location: string;
  imageUrl: string;
  isForSale: boolean;
  description: string;
  details: string;
  LotSize: number;
  HOADues: number;
  YearBuilt: number;
  GarageSqFt: number;
  BasementSqFt: number;
  propertyType: string;
};

export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Spacious Family Villa in Toul Kork",
    price: 350000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    location: "Toul Kork, Phnom Penh",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "A beautiful modern villa perfect for families, located in the heart of Toul Kork.",
    details:
      "Close to international schools and Aeon Mall 2. Includes private garden and parking.",
    LotSize: 4500,
    HOADues: 0,
    YearBuilt: 2017,
    GarageSqFt: 400,
    BasementSqFt: 0,
    propertyType: "Villa",
  },
  {
    id: 2,
    title: "Modern Studio Apartment BKK1",
    price: 65000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 450,
    location: "BKK1, Phnom Penh",
    imageUrl:
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Fully furnished studio apartment in Phnom Penh’s expat-friendly district.",
    details:
      "Walking distance to cafes, restaurants, and gyms. 24/7 security and pool access.",
    LotSize: 0,
    HOADues: 50,
    YearBuilt: 2019,
    GarageSqFt: 0,
    BasementSqFt: 0,
    propertyType: "Condo",
  },
  {
    id: 3,
    title: "Beachfront Villa Sihanoukville",
    price: 270000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    location: "Otres Beach, Sihanoukville",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Charming villa with sea view and direct access to Otres Beach.",
    details:
      "Private garden, large balcony, and secure parking. Perfect for holiday or retirement.",
    LotSize: 3000,
    HOADues: 0,
    YearBuilt: 2015,
    GarageSqFt: 200,
    BasementSqFt: 0,
    propertyType: "Villa",
  },
  {
    id: 4,
    title: "Central Condo Near Riverside",
    price: 120000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 850,
    location: "Daun Penh, Phnom Penh",
    imageUrl:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Modern condo with a city view, close to the riverside and night market.",
    details:
      "Ideal for professionals and couples. Gym, swimming pool, and rooftop access.",
    LotSize: 0,
    HOADues: 60,
    YearBuilt: 2020,
    GarageSqFt: 0,
    BasementSqFt: 0,
    propertyType: "Condo",
  },
  {
    id: 5,
    title: "Cozy Wooden House in Siem Reap",
    price: 48000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 900,
    location: "Sala Kamreuk, Siem Reap",
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Traditional wooden Khmer house surrounded by nature, minutes from Angkor Wat.",
    details: "Peaceful area, perfect for AirBnb rental or family retreat.",
    LotSize: 1600,
    HOADues: 0,
    YearBuilt: 2012,
    GarageSqFt: 50,
    BasementSqFt: 0,
    propertyType: "Traditional",
  },
  {
    id: 6,
    title: "Luxury Penthouse BKK3",
    price: 270000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    location: "BKK3, Phnom Penh",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Exclusive penthouse with panoramic views and private rooftop garden.",
    details: "Fully equipped kitchen, high security, and reserved parking.",
    LotSize: 0,
    HOADues: 120,
    YearBuilt: 2021,
    GarageSqFt: 100,
    BasementSqFt: 0,
    propertyType: "Penthouse",
  },
  {
    id: 7,
    title: "Serviced Apartment Sen Sok",
    price: 89000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    location: "Sen Sok, Phnom Penh",
    imageUrl:
      "https://images.unsplash.com/photo-1503389152951-9c3d8b6e5a14?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Spacious serviced apartment in a quiet neighborhood, ideal for families.",
    details: "Includes cleaning service, gym, and kids' playground.",
    LotSize: 0,
    HOADues: 60,
    YearBuilt: 2018,
    GarageSqFt: 60,
    BasementSqFt: 0,
    propertyType: "Apartment",
  },
  {
    id: 8,
    title: "Luxury Villa on Koh Pich",
    price: 530000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    location: "Koh Pich (Diamond Island), Phnom Penh",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Stunning luxury villa in the heart of Phnom Penh’s most exclusive area.",
    details: "Private pool, garden, and 2-car garage. Modern security system.",
    LotSize: 4800,
    HOADues: 0,
    YearBuilt: 2016,
    GarageSqFt: 400,
    BasementSqFt: 0,
    propertyType: "Villa",
  },
  {
    id: 9,
    title: "Tiny Home in Kampot Riverside",
    price: 29000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 380,
    location: "Kampot Riverside, Kampot",
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Affordable tiny home ideal for weekend getaways or eco-living.",
    details: "Riverfront views and easy access to Kampot town.",
    LotSize: 800,
    HOADues: 0,
    YearBuilt: 2022,
    GarageSqFt: 0,
    BasementSqFt: 0,
    propertyType: "Tiny Home",
  },
  {
    id: 10,
    title: "Colonial Mansion in Battambang",
    price: 600000,
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5400,
    location: "Battambang City",
    imageUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    isForSale: true,
    description:
      "Historic French colonial mansion with restored interiors and large garden.",
    details:
      "Perfect for boutique hotel or private residence. Walking distance to city center.",
    LotSize: 9000,
    HOADues: 0,
    YearBuilt: 1940,
    GarageSqFt: 250,
    BasementSqFt: 0,
    propertyType: "Mansion",
  },
  {
    id: 11,
    title: "Modern Apartment for Rent in BKK1",
    price: 700, // Monthly rental price in USD
    bedrooms: 2,
    bathrooms: 2,
    sqft: 950,
    location: "BKK1, Phnom Penh",
    imageUrl:
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    isForSale: false, // <-- This makes it for Rent!
    description:
      "Chic apartment with city view, walking distance to shops and restaurants.",
    details:
      "Includes pool, gym, and 24/7 security. Ideal for expats and professionals.",
    LotSize: 0,
    HOADues: 60,
    YearBuilt: 2022,
    GarageSqFt: 0,
    BasementSqFt: 0,
    propertyType: "Apartment",
  },
  {
    id: 12,
    title: "Serviced Condo for Rent Toul Tompoung",
    price: 500,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    location: "Toul Tompoung, Phnom Penh",
    imageUrl:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    isForSale: false,
    description:
      "Fully furnished, ready to move in. Great for singles or couples.",
    details: "Walking distance to Russian Market. Monthly cleaning included.",
    LotSize: 0,
    HOADues: 0,
    YearBuilt: 2021,
    GarageSqFt: 0,
    BasementSqFt: 0,
    propertyType: "Condo",
  },
  {
    id: 13,
    title: "Cozy House for Rent in Siem Reap",
    price: 400,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    location: "Wat Bo, Siem Reap",
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    isForSale: false,
    description: "Quiet location, perfect for long stays and digital nomads.",
    details: "Private yard, motorbike parking, pet friendly.",
    LotSize: 1200,
    HOADues: 0,
    YearBuilt: 2018,
    GarageSqFt: 20,
    BasementSqFt: 0,
    propertyType: "House",
  },
];
