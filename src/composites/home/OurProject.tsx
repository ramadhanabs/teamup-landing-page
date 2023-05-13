import Button from "@/components/Button";
import { ArrowOutward } from "@/components/Icons";
import Text from "@/components/Text";
import Link from "next/link";
import React from "react";

const PROJECT = [
  {
    id: "01",
    category: "UI/UX Design",
    title: "YDSF - Designing Zakat Charity App and Dashboard",
    description:
      "We create a user-friendly app that helps charitable organizations connect with potential donors and volunteers. It will allow users to browse a variety of charities to make donations.",
    href: "https://www.behance.net/gallery/159626675/YDSF-Zakat-Charity-App-and-Dashboard",
    banner: "/images/project-1.png",
    isThumbnail: true
  },
  {
    id: "02",
    category: "UI/UX Design",
    title: "PT Pelindo - User Interface Redesign of Company Profile",
    description:
      "We were trusted to design a Company website for Singapore Startup about service to help user protect their fund. We design about service to help user protect their fund.",
    href: "https://www.behance.net/gallery/158915391/PT-Pelindo-Landing-Page-Redesign",
    banner: "/images/project-2.png",
    isThumbnail: false
  },
  {
    id: "03",
    category: "Illustration",
    title: "Pandai - Creating Mascot Illustration for Edutech Product",
    description:
      "We were trusted to design a Company website for Singapore Startup about service to help user protect their fund. We design about service to help user protect their fund.",
    href: "https://www.behance.net/gallery/159107743/Pandai-Edutech-Mascot-Illustration",
    banner: "/images/project-3.png",
    isThumbnail: false
  },
  {
    id: "04",
    category: "Brand Identity",
    title: "Creating Brand Identity of Tribes by HHWT, a Donation Platform",
    description:
      "We were trusted to design a Company website for Singapore Startup about service to help user protect their fund. We design about service to help user protect their fund.",
    href: "https://www.behance.net/gallery/162956717/Tribes-by-HHWT-Brand-Identity",
    banner: "/images/project-4.png",
    isThumbnail: false
  }
];

const OurProject = () => {
  const handleClickButton = (url: string) => window.open(url, "_blank");
  return (
    <div className="pt-10 mb-[80px]" id="our-work">
      <Text variant="h4-medium">Our Project</Text>
      {/* Desktop */}
      <div className="hidden lg:block">
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
                      onClick={() => handleClickButton(item.href)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-10">
                <Link href={item.href} passHref={true}>
                  <Text variant="h3-medium">{item.id}</Text>
                </Link>
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
                      onClick={() => handleClickButton(item.href)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
        {PROJECT.map(item => (
          <div key={item.id} className="py-8 border-b border-grey-light">
            <img src={item.banner} className="w-full rounded-lg mb-8" />

            <Text variant="h6-regular" className="mb-4">
              {item.category}
            </Text>
            <Text variant="h4-regular">{item.title}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProject;
