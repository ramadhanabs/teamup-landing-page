import Container from "@/components/Container";
import Text from "@/components/Text";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Container className="grid grid-cols-3 pt-[90px] pb-8">
        <div>
          <Text variant="p-semibold" className="mb-4">
            TeamUp Agency
          </Text>
          <Text variant="p-regular">
            Perum Berlian Asri, Jl. Merpati Gg. Beo No.B5, Bantul, Yogyakarta
          </Text>
        </div>
        <div>
          <Text variant="p-semibold" className="mb-4">
            Contact Us
          </Text>
          <Text variant="p-regular">
            hello@teamup.com
            <br />
            0989787393
          </Text>
        </div>
        <div>
          <Text variant="p-semibold" className="mb-4">
            Connect with us
          </Text>
          <div className="flex items-center gap-4">
            <button>
              <img src="/images/icons/facebook.svg" className="w-[48px]" />
            </button>
            <button>
              <img src="/images/icons/behance.svg" className="w-[48px]" />
            </button>
            <button>
              <img src="/images/icons/instagram.svg" className="w-[48px]" />
            </button>
            <button>
              <img src="/images/icons/dribbble.svg" className="w-[48px]" />
            </button>
          </div>
        </div>
      </Container>
      <hr className="border-grey-light" />
      <Container className="py-8 flex justify-between">
        <Text>Copyright © TeamUp Agency</Text>
        <Text>In a mission to build better creative ecosystem</Text>
      </Container>
    </footer>
  );
};

export default Footer;
