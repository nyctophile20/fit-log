import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/components/PlanProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PlanProvider>
          <Navbar />

          {children}

          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}