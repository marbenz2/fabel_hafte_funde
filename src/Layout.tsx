import React from "react";
import Header from "./components/Header";
import BackgroundLeaves from "./components/background/BackgroundLeaves";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex flex-col w-full min-h-screen items-center bg-background-accent overflow-clip">
      <BackgroundLeaves />
      <Header />
      {children}
    </main>
  );
};

export default Layout;
