import React, { useState } from "react";
import Text from "@/components/Text";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";

const TEAM_GENG = [
  {
    id: 1,
    name: "Iqbal Aqaba",
    position: "Chief Executive Officer",
    image: "iqbal-aqaba",
    description: "Experienced working as Top Rated Freelancer at Upwork",
    role: ["UI/UX Designer", "Project Manager"],
    isHover: true
  },
  {
    id: 2,
    name: "Fay Miftachus",
    position: "Chief Marketing Officer",
    image: "fay-miftachus",
    description: "Experienced working from domestic to foreign Agencies",
    role: ["Brand Designer", "Graphic Designer"],
    isHover: true
  },
  {
    id: 3,
    name: "Habib Al Hakim",
    position: "Creative & Culture Director",
    image: "habib-al-hakim",
    description: "Experienced working from Early Stage to Unicorn Startup",
    role: ["UI/UX Designer", "Design Mentor"],
    isHover: true
  },
  {
    id: 4,
    name: "Iqbal Umam",
    position: "Project & Account Manager",
    image: "iqbal-umam",
    description: "Experienced handling project from domestic to foreign client",
    role: ["Illustrator", "Graphic Designer"],
    isHover: true
  },
  {
    id: 5,
    name: "Farizky Nur",
    position: "Ops & Product Manager",
    image: "farizky-nur",
    description:
      "Experienced working from eCommerce, Media and Campaign Startup",
    role: ["UI/UX Designer", "SCRUM Master"],
    isHover: true
  }
];

const TEAM_MATES = [
  {
    id: 1,
    name: "Syamil",
    position: "UI/UX Designer",
    image: "syamil",
    description: "",
    role: [],
    isHover: false
  },
  {
    id: 2,
    name: "Iqbal Surya",
    position: "UI/UX Designer",
    image: "iqbal-surya",
    description: "",
    role: [],
    isHover: false
  },
  {
    id: 3,
    name: "Tazkia Perdana",
    position: "UI/UX Designer",
    image: "tazkia-perdana",
    description: "",
    role: [],
    isHover: false
  },
  {
    id: 4,
    name: "Nuri Zulfana",
    position: "Illustrator",
    image: "nuri-zulfana",
    description: "",
    role: [],
    isHover: false
  },
  {
    id: 5,
    name: "Husna Zulfana",
    position: "Graphic Designer",
    image: "husna-zulfana",
    description: "",
    role: [],
    isHover: false
  }
];

const PARTNER = [
  {
    id: 1,
    name: "Boltshift",
    company: "Company Name",
    image: "company-1"
  },
  {
    id: 2,
    name: "Nietzche",
    company: "Company Name",
    image: "company-2"
  },
  {
    id: 3,
    name: "Nietzche",
    company: "Company Name",
    image: "company-3"
  }
];

const FREELANCER = [
  {
    id: 1,
    name: "Dhimas Aji",
    role: "UI/UX Designer",
    image: ""
  },
  {
    id: 2,
    name: "M Yasin Abdul",
    role: "UI/UX Designer",
    image: ""
  },
  {
    id: 3,
    name: "Aryo Romadhon",
    role: "UI/UX Designer",
    image: ""
  },
  {
    id: 4,
    name: "Talensta Mellandika",
    role: "Illustrator",
    image: ""
  },
  {
    id: 5,
    name: "Ramadhana Bagus",
    role: "Mobile Developer",
    image: ""
  },
  {
    id: 6,
    name: "Rizal Avib",
    role: "Graphic Designer",
    image: ""
  },
  {
    id: 7,
    name: "Riris Septi Arimbi",
    role: "Digital Marketing",
    image: ""
  }
];

const TeamMember = () => {
  const [hoverItem, setHoverItem] = useState<number | null>(null);
  const onMouseEnter = (id: number) => setHoverItem(id);
  const onMouseLeave = () => setHoverItem(null);

  return (
    <div>
      {/* Team Geng */}
      <div className="grid grid-cols-12 lg:gap-10 mb-[100px]">
        <div className="col-span-12 lg:col-span-3 mb-6">
          <Text variant="h5-medium" className="mb-1">
            Team Geng
          </Text>
          <Text variant="p-regular">Our Founder & Co-Founder</Text>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-10">
            {TEAM_GENG.map(member => (
              <div key={member.id}>
                <div
                  className="relative"
                  onMouseEnter={() => onMouseEnter(member.id)}
                  onMouseLeave={onMouseLeave}
                >
                  <img
                    src={`/images/team-member/${member.image}.png`}
                    alt={`member-${member.id}`}
                    className="mb-6 w-full lg:w-[290px]"
                  />

                  <Transition
                    show={hoverItem === member.id}
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 w-full h-full rounded-2xl bg-purple p-6 flex flex-col justify-between cursor-pointer">
                      <Text variant="p-regular">{member.description}</Text>

                      <div>
                        {member.role.map(role => (
                          <Text key={role} variant="h6-semibold">
                            {role}
                          </Text>
                        ))}
                      </div>
                    </div>
                  </Transition>
                </div>
                <Text variant="h6-semibold">{member.name}</Text>
                <Text variant="p-regular">{member.position}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Mates */}
      <div className="grid grid-cols-12 lg:gap-10 mb-[100px]">
        <div className="col-span-12 lg:col-span-3 mb-6">
          <Text variant="h5-medium" className="mb-1">
            Team Mates
          </Text>
          <Text variant="p-regular">Our main performer</Text>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-10">
            {TEAM_MATES.map(member => (
              <div key={member.id}>
                <div className="relative">
                  <Image
                    src={`/images/team-member/${member.image}.png`}
                    width={290}
                    height={290}
                    alt={`member-${member.id}`}
                    className="mb-6"
                  />
                </div>
                <Text variant="h6-semibold">{member.name}</Text>
                <Text variant="p-regular">{member.position}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner */}
      <div className="grid grid-cols-12 lg:gap-10 mb-[100px]">
        <div className="col-span-12 lg:col-span-3">
          <Text variant="h5-medium" className="mb-1">
            Partner
          </Text>
          <Text variant="p-regular">Our business partner</Text>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2">
            {PARTNER.map(item => (
              <div
                className="flex flex-col lg:flex-row lg:items-end py-10 gap-4 lg:gap-10 border-b border-grey-light"
                key={item.id}
              >
                <Image
                  src={`/images/logo/${item.image}.png`}
                  alt=""
                  width={130}
                  height={130}
                />
                <div>
                  <Text variant="h6-semibold">{item.name}</Text>
                  <Text variant="p-regular">{item.company}</Text>
                </div>
              </div>
            ))}
            <div className="flex flex-col lg:flex-row lg:items-end py-10 gap-4 lg:gap-10 border-b border-grey-light">
              <Button
                variant="circle"
                icon={<ArrowOutward className="w-6 h-6 text-white" />}
              />
              <div>
                <Text variant="h6-semibold">And many more</Text>
                <Text variant="p-regular">Join with us now!</Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Freelancer */}
      <div className="grid grid-cols-12 lg:gap-10 mb-[100px]">
        <div className="col-span-12 lg:col-span-3">
          <Text variant="h5-medium" className="mb-1">
            Freelancer
          </Text>
          <Text variant="p-regular">Our professional team</Text>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2">
            {FREELANCER.map(item => (
              <div
                className="flex flex-col lg:flex-row lg:items-end py-10 gap-4 lg:gap-10 border-b border-grey-light"
                key={item.id}
              >
                <img
                  src={`/images/team-member/freelancer.png`}
                  alt=""
                  className="w-[130px]"
                />
                <div>
                  <Text variant="h6-semibold">{item.name}</Text>
                  <Text variant="p-regular">{item.role}</Text>
                </div>
              </div>
            ))}
            <div className="flex flex-col lg:flex-row lg:items-end py-10 gap-4 lg:gap-10 border-b border-grey-light">
              <Button
                variant="circle"
                icon={<ArrowOutward className="w-6 h-6 text-white" />}
              />
              <div>
                <Text variant="h6-semibold">And many more</Text>
                <Text variant="p-regular">Join with us now!</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
