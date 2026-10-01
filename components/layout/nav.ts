import { services } from "@/data/services";
import { gumTopics } from "@/data/gum-topics";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "Dr. Niyukty Arjal", href: "/about-us/dr-niyukty-arjal" },
      { label: "Inside the clinic", href: "/about-us/clinic" },
      { label: "Our team", href: "/about-us#team" },
      { label: "Why choose us", href: "/about-us#why-choose-us" },
    ],
  },
  {
    label: "Gum Care",
    href: "/gum-care",
    children: [
      { label: "All gum treatments", href: "/gum-care" },
      ...gumTopics.map((topic) => ({
        label: topic.navTitle,
        href: `/gum-care/${topic.slug}`,
      })),
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All dental services", href: "/services" },
      ...services.map((service) => ({
        label: service.navTitle,
        href: `/services/${service.slug}`,
      })),
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
