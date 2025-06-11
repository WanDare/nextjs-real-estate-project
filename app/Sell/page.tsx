"use client";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react";

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

export default function SellPage() {
  const router = useRouter();

  return (
    <main className="min-h-[80vh] flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Choose an Agent to Sell With</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            isPressable
            shadow="sm"
            className="min-w-[260px] max-w-[320px] h-[370px] flex flex-col justify-between transition-all duration-200 hover:scale-105 hover:border-indigo-400 border-2 mx-auto"
            onPress={() => router.push(`/Sell/agent/${agent.id}`)}
          >
            <CardBody className="flex flex-col items-center gap-2 py-6 flex-1 w-full">
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
              <p className="text-xs italic mt-1 line-clamp-3 text-center">
                {agent.about}
              </p>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                size="sm"
                variant="solid"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/Sell/agent/${agent.id}`);
                }}
              >
                Sell with {agent.name.split(" ")[0]}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
