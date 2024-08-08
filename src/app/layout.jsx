import "./globals.css";
import Menu from "./components/Menu";
import Footer from "@/app/components/Footer"
// import Footer from "./components/Footer";

export const metadata = {
  title: "CGC Wargaming",
  description: "Welcome to CGC Wargaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
