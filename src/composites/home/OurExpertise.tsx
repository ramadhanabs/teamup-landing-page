import Text from "@/components/Text";
import React from "react";

const EXPERTISE = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Web Design, User Flow, Wireframing, Prototyping, Mobile Design, UX Research"
  },
  {
    id: "dev",
    title: "App/Web Dev",
    description:
      "Frontend and Backend Web Development,  Android and iOS Development, Wordpress Dev"
  },
  {
    id: "branding",
    title: "Brand Identity",
    description:
      "Logo Design, Visual Identity, Stationary Kit, Marketing Materials, Brand Guidelines"
  },
  {
    id: "illustration",
    title: "Illustration",
    description:
      "Character Design, Flat Illustration Design, 2D Illustration Design, Illustration Set Design"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Layout Design, Packaging Design, Social Media Needs Design, Advertising Needs Design"
  },
  {
    id: "icon",
    title: "Icon Design",
    description:
      "Rounded Icon, Filled Icon, Outlined Icon, Custom Style Icon, Icon Set and Guidelines"
  }
];

const OurExpertise = () => {
  return (
    <div className="mb-[80px]">
      <Text variant="h4-medium">Our Expertise</Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {EXPERTISE.map(item => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-grey-light py-8 lg:py-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-10">
              <img
                src={`/images/illustrations/${item.id}.png`}
                className="w-[80px]"
              />
              <Text variant="h2-regular">{item.title}</Text>
            </div>
            <Text variant="p-regular" className="max-w-[500px]">
              {item.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExpertise;
