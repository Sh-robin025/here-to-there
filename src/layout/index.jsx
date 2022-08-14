import React from "react";
import bg from "../assets/bg.png";
import { Layout } from "../styles/layout";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <Layout bgImage={bg}>
      <Header />
      {children}
      <Footer />
    </Layout>
  );
};

export default AppLayout;
