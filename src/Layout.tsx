import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Navigation } from "./components/Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full max-w-[2560px] min-h-screen h-full items-center bg-background-accent overflow-clip">
      <Navigation />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
