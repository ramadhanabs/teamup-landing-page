import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import React from "react";

const PROJECT = [
  {
    id: "01",
    category: "UI/UX Design",
    title: "Encourage kids to grow and explore their interest with",
    description:
      "We were trusted to design a Company website for Singapore Startup about service to help user protect their fund. We design about service to help user protect their fund.",
    href: "/#",
    banner: "/images/project-1.png",
    isThumbnail: true
  },
  {
    id: "02",
    category: "UI/UX Design",
    title: "Encourage kids to grow and explore their interest with",
    description:
      "We were trusted to design a Company website for Singapore Startup about service to help user protect their fund. We design about service to help user protect their fund.",
    href: "/#",
    banner: "/images/project-2.png",
    isThumbnail: false
  },
  {
    id: "03",
    category: "UI/UX Design",
    title: "Encourage kids to grow and explore their interest with",
    description:
      "We were trusted to design a Company website for Singapore Startup about service to help user protect their fund. We design about service to help user protect their fund.",
    href: "/#",
    banner: "/images/project-3.png",
    isThumbnail: false
  },
  {
    id: "04",
    category: "UI/UX Design",
    title: "Encourage kids to grow and explore their interest with",
    description:
      "We were trusted to design a Company website for Singapore Startup about service to help user protect their fund. We design about service to help user protect their fund.",
    href: "/#",
    banner: "/images/project-4.png",
    isThumbnail: false
  }
];

const OurProject = () => {
  return (
    <div className="mb-[80px]">
      <Text variant="h4-medium">Our Project</Text>
      {PROJECT.map(item => (
        <div className="py-10 border-b border-grey-light" key={item.id}>
          {item.isThumbnail ? (
            <div>
              <img src={item.banner} className="w-full mb-10 rounded-lg" />
              <div className="flex items-center justify-between">
                <div className="flex gap-10">
                  <Text variant="h3-medium">{item.id}</Text>
                  <div>
                    <Text variant="h6-regular" className="mb-2">
                      {item.category}
                    </Text>
                    <Text variant="h4-medium" className="max-w-[500px]">
                      {item.title}
                    </Text>
                  </div>
                  <Text variant="p-regular" className="max-w-[400px]">
                    {item.description}
                  </Text>
                </div>
                <div className="shrink-0">
                  <Button
                    variant="circle"
                    icon={<ArrowOutward className="w-6 h-6 text-white" />}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-10">
              <Text variant="h3-medium">{item.id}</Text>
              <img src={item.banner} className="w-[450px] rounded-lg" />
              <div className="flex flex-col justify-between gap-10">
                <div>
                  <Text variant="h6-regular" className="mb-2">
                    {item.category}
                  </Text>
                  <Text variant="h4-medium">{item.title}</Text>
                </div>
                <div className="flex justify-end">
                  <Button
                    variant="circle"
                    icon={<ArrowOutward className="w-6 h-6 text-white" />}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OurProject;
