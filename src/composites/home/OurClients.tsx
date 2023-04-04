import Text from "@/components/Text";
import React from "react";

const CLIENTS = [
  "telkom",
  "ugm",
  "ditusi",
  "troya",
  "habiskerja",
  "covre",
  "snapx",
  "others"
];

const OurClients = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-[80px]">
      {CLIENTS.map(name => {
        if (name === "others") {
          return (
            <div className="border border-grey-light flex items-center justify-center rounded-lg w-full h-full md:w-[290px] md:h-[160px]">
              <Text variant="p-regular">
                And dozen of
                <br />
                others client
              </Text>
            </div>
          );
        }
        return (
          <div
            key={name}
            className="border border-grey-light flex items-center justify-center rounded-lg w-full h-full md:w-[290px] md:h-[160px]"
          >
            <img src={`/images/logo/logo-${name}.png`} className="w-[120px] md:w-[190px]" />
          </div>
        );
      })}
    </div>
  );
};

export default OurClients;
