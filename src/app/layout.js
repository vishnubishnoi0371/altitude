import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://gsap-practice-phi.vercel.app/",
  title: "Altitude-Gsap",
  description: "gsap pratice",
  openGraph: {
    title: "Gsap-Task",
    description: "gsap pratice",
    images: ["/assets/image/png/meta-tag.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
