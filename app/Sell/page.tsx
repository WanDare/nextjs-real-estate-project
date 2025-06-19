"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react";

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
  {
    id: 7,
    name: "Sokunthy Chea",
    imageUrl:
      "https://imgcdn.stablediffusionweb.com/2024/11/6/8708a5a1-2092-49ef-bb2b-d8c9567f3595.jpg",
    phone: "085-234-1592",
    email: "sokunthy.chea@example.com",
    agency: "Mekong Property Group",
    about:
      "With over 15 years of experience, Sokunthy helps clients get top value for their homes. Specializes in marketing and negotiation, delivering above-market results with honesty and transparency.",
  },
];

export default function SellPage() {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, agents.length));
  };

  return (
    <main className="min-h-[80vh] flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Choose an Agent to Sell With</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {agents.slice(0, visibleCount).map((agent) => (
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
                className="mb-2 rounded-full object-cover object-center w-[86px] h-[86px]"
              />
              <h3 className="text-lg font-bold">{agent.name}</h3>
              <p className="text-xs text-gray-500">{agent.agency}</p>
              <p className="text-xs">{agent.phone}</p>
              <p className="text-xs mt-1 line-clamp-3 text-center">
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

      {visibleCount < agents.length && (
        <button
          onClick={handleShowMore}
          className="mt-8 text-blue-600 font-medium hover:underline transition"
        >
          See More Agents
        </button>
      )}
    </main>
  );
}
