import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gums & Giggles Dental Clinic Kathmandu",
    template: "%s | Gums & Giggles",
  },
  description:
    "Specialist-led dental clinic in Kathmandu offering gum care, implants, braces, root canal treatment, teeth cleaning, wisdom tooth removal, and crowns.",
  icons: {
    icon: "/logo_.png",
    shortcut: "/logo_.png",
    apple: "/logo_.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
