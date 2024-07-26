import React from "react";
import Header from "./components/Header";
import BackgroundLeaves from "./components/background/BackgroundLeaves";
import Footer from "./components/Footer/Footer";
import BackgroundHouse from "./components/background/BackgroundHouse";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex flex-col w-full max-w-[2560px] min-h-screen h-full items-center bg-background-accent overflow-clip">
      <BackgroundHouse />
      <BackgroundLeaves />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
