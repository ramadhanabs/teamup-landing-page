import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="mt-[120px] md:mt-[160px]">{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;
