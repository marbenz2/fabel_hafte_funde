import React from "react";
import Header from "./components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full min-h-screen items-center">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
