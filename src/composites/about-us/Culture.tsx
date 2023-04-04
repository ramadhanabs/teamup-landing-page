import Text from "@/components/Text";
import React from "react";

const CULTURE = [
  {
    id: "responsive",
    title: "Responsive communication",
    description:
      "We often work remotely with either the Client or Team, therefore good and fast communication is the key to our success."
  },
  {
    id: "honest",
    title: "Honest and emphatetic",
    description:
      "To keep us growing better, we need an openness of aspirations towards the team in good way and at the right moment."
  },
  {
    id: "better-life",
    title: "Design for better life",
    description:
      "We are very passionate about design, but we have to understand that it’s also a tool to achieve our better life as human being."
  },
  {
    id: "positive-mutualist",
    title: "Positive and mutualist",
    description:
      "We maintain good environment by minimizing toxic things, so we can happily give and receive goods from each other."
  }
];

const Culture = () => {
  return (
    <div className="my-[100px]">
      <Text variant="h4-medium" className="mb-12">
        Our Culture
      </Text>

      {CULTURE.map(item => (
        <div
          className="flex justify-between items-center py-10 gap-10 border-b border-grey-light"
          key={item.id}
        >
          <div className="flex items-center gap-10">
            <img
              src={`/images/illustrations/${item.id}.svg`}
              alt=""
              className="w-[80px] h-[80px]"
            />
            <Text variant="h5-regular">{item.title}</Text>
          </div>
          <Text variant="p-regular" className="max-w-[600px]">{item.description}</Text>
        </div>
      ))}
    </div>
  );
};

export default Culture;
