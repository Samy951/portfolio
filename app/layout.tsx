import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Samy Hamlat",
  description: "Welcome to my web portfolio",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden bg-[#FF9000] font-germalt md:overflow-visible">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
