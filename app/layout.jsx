import { Inter, Nunito } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / Sourv Sen",
    default: "Home / Sourav Sen ",
  },
  description:
    "Hi, I am Sourav Sen, a software engineer and frontend developer, Crafting Exceptional Frontend Experiences with Precision and Passion 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} relative scrollbar-gutter-stable border-b-4 border-accent h-[100%] min-h-screen`}
      >
        {/* <Pattern /> */}
        <div className="absolute top-0 left-0 z-[-1] h-full w-full heropattern-wiggle-slate-200"></div>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
