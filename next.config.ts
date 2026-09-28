import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      // Gum care moved out of /services into its own silo.
      {
        source: "/services/gum-care-and-periodontics",
        destination: "/gum-care",
        permanent: true,
      },
      { source: "/services/periodontics", destination: "/gum-care", permanent: true },
      // Legacy slug aliases, previously served as duplicate 200 pages.
      {
        source: "/services/dental-implants",
        destination: "/services/dental-implants-kathmandu",
        permanent: true,
      },
      {
        source: "/services/dental-braces-and-orthodontics",
        destination: "/services/dental-braces-kathmandu",
        permanent: true,
      },
      {
        source: "/services/root_canal_treatment",
        destination: "/services/root-canal-treatment",
        permanent: true,
      },
      {
        source: "/services/zirconia_crowns_bridges",
        destination: "/services/zirconia-crowns-and-bridges",
        permanent: true,
      },
      {
        source: "/services/teeth-cleaning-and-scaling",
        destination: "/services/teeth-cleaning",
        permanent: true,
      },
      {
        source: "/services/wisdom-tooth-extraction",
        destination: "/services/wisdom-tooth-removal",
        permanent: true,
      },
      // Defensive: URLs people and old links guess at.
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/book", destination: "/appointment", permanent: true },
      { source: "/book-appointment", destination: "/appointment", permanent: true },
      { source: "/prices", destination: "/treatment-prices", permanent: true },
      { source: "/pricing", destination: "/treatment-prices", permanent: true },
      {
        source: "/services/gum-disease-treatment",
        destination: "/gum-care/gum-disease-treatment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
