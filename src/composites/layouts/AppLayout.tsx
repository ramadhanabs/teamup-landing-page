import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
