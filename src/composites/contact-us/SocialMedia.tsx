import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import React from "react";

const SOCIAL_MEDIA = [
  {
    title: "Behance",
    description: "Our project portfolio",
    icon: "behance-color.svg",
    href: "https://www.behance.net/teamupagency"
  },
  {
    title: "Dribbble",
    description: "Our design exploration",
    icon: "dribbble-color.svg",
    href: "https://dribbble.com/sunnydayatteamup"
  },
  {
    title: "Instagram",
    description: "Our daily life at agency",
    icon: "instagram-color.svg",
    href: "https://www.instagram.com/teamupagency.id/"
  },
  {
    title: "UI8",
    description: "Our UI Kit and Assets",
    icon: "ui-8-color.svg",
    href: "https://www.ui8.net/teamup-studio/products"
  }
];

const SocialMedia = () => {
  const handleClickButton = (url: string) => window.open(url, "_blank");
  return (
    <div className="mt-[120px] mb-10">
      <Text variant="h4-semibold" className="mb-12">
        Still curious about us?
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {SOCIAL_MEDIA.map(item => (
          <div className="p-8 border border-grey-light rounded-3xl flex items-end justify-between" key={item.title}>
            <div>
              <img
                src={`/images/icons/${item.icon}`}
                className="w-[80px] mb-10 text-right lg:text-left"
              />
              <Text variant="h4-semibold">{item.title}</Text>
              <Text variant="h6-regular">{item.description}</Text>
            </div>
            <div className="hidden lg:block">
              <Button
                variant="circle"
                icon={<ArrowOutward className="w-6 h-6 text-white" />}
                onClick={()=>handleClickButton(item.href)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
