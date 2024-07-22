import React from "react";
import Header from "./components/Header";
import BackgroundLeaves from "./components/background/BackgroundLeaves";
import Footer from "./components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex flex-col w-full min-h-screen h-full items-center bg-background-accent overflow-clip">
      <BackgroundLeaves />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
