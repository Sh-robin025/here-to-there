import React from "react";
import { ToastContainer } from "react-toastify";
import bg from "../assets/bg.png";
import { Layout } from "../styles/layout";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <Layout bgImage={bg}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        // hideProgressBar={false}
        // newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <Header />
      {children}
      <Footer />
    </Layout>
  );
};

export default AppLayout;
