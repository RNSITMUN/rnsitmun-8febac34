
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main-container flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-18 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
