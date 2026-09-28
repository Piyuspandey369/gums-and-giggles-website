import type { Metadata } from "next";
import { Footer, Header, JsonLd, clinicSchema, siteUrl } from "@/components";
import "./globals.css";

const description =
  "Specialist-led dental clinic in Kathmandu offering gum care, implants, braces, root canal treatment, teeth cleaning, wisdom tooth removal, and crowns.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gums & Giggles Dental Clinic Kathmandu",
    template: "%s | Gums & Giggles",
  },
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo_.png",
    shortcut: "/logo_.png",
    apple: "/logo_.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    siteName: "Gums & Giggles Dental Clinic",
    title: "Gums & Giggles Dental Clinic Kathmandu",
    description,
    url: "/",
    images: ["/clinic_photos/clinics_building_image_from_outside.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gums & Giggles Dental Clinic Kathmandu",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={clinicSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
