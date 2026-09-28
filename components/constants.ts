export const siteUrl = "https://www.gumsandgiggles.com.np";

// Canonical NAP. This exact wording must match the Google Business Profile and
// every directory listing, character for character.
// TODO (client): create info@gumsandgiggles.com.np, then remove this note.
export const clinic = {
  name: "Gums & Giggles Dental Clinic",
  phone: "+977 984-1243430",
  phoneHref: "tel:+9779841243430",
  phoneE164: "+977-984-1243430",
  email: "info@gumsandgiggles.com.np",
  emailHref: "mailto:info@gumsandgiggles.com.np",
  address: "Dhobidhara Marg, Near Kumari Hall, Kamalpokhari, Kathmandu 44600, Nepal",
  street: "Dhobidhara Marg, Near Kumari Hall, Kamalpokhari",
  locality: "Kathmandu",
  region: "Bagmati",
  postalCode: "44600",
  country: "NP",
  latitude: 27.70895,
  longitude: 85.32444,
  hours: "Sunday to Friday, 10 AM to 7 PM",
  opens: "10:00",
  closes: "19:00",
  openDays: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ],
  appointmentHref: "/appointment",
  mapsHref: "https://maps.app.goo.gl/ff5JWHjBLUdsBLij8",
  sameAs: [
    "https://www.facebook.com/gumsandgigglesdentalclinic/",
    "https://www.instagram.com/gumsandgigglesdentalclinic_/",
  ],
};

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-5";
export const section = "py-14 md:py-20";
export const sectionAlt = `${section} bg-stone-50`;
export const sectionPink = `${section} bg-pink-50`;
export const eyebrowClass =
  "mb-2.5 text-xs font-black uppercase tracking-[0.1em] text-[#E8177A]";
export const h2Class =
  "font-sans text-3xl font-black leading-tight text-zinc-950 md:text-4xl";
export const leadClass = "mt-3 text-base leading-8 text-zinc-600 md:text-lg";
export const actionRowClass = "mt-7 flex flex-wrap gap-3";
export const splitGridClass =
  "grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]";
export const imagePanelClass =
  "relative min-h-80 overflow-hidden rounded-[1.75rem] bg-pink-50 shadow-[0_18px_50px_rgba(17,17,17,0.09)] md:min-h-[420px]";
export const cardClass =
  "rounded-[1.25rem] border border-zinc-200 bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)]";
