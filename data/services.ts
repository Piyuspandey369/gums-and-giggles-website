export type CardItem = {
  title: string;
  text: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  aliases?: string[];
  title: string;
  shortTitle: string;
  navTitle: string;
  eyebrow: string;
  summary: string;
  price: string;
  heroImage: string;
  imageAlt: string;
  highlights: string[];
  overview: string[];
  optionsTitle?: string;
  optionsLead?: string;
  options?: CardItem[];
  signsTitle?: string;
  signs?: string[];
  process: CardItem[];
  why: CardItem[];
  careTitle?: string;
  care?: CardItem[];
  extraImages?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaText: string;
};

export const services: Service[] = [
  {
    slug: "dental-implants-kathmandu",
    aliases: ["dental-implants"],
    title: "Dental Implants in Kathmandu",
    shortTitle: "Dental Implants",
    navTitle: "Implants",
    eyebrow: "Permanent tooth replacement",
    summary:
      "Replace missing teeth with a fixed, natural-looking solution planned around gum and bone health.",
    price: "Starting from NPR 100,000",
    heroImage: "/images/dental-implant-diagram.jpg",
    imageAlt: "Dental implant diagram showing implant post and crown",
    highlights: [
      "Periodontist-led implant planning",
      "Bone and gum assessment before treatment",
      "Fixed replacement that does not move while eating",
    ],
    overview: [
      "A dental implant is a small titanium post placed into the jawbone to replace the root of a missing tooth. After it bonds with the bone, a custom crown is fitted on top so the restored tooth looks and functions like a natural tooth.",
      "Unlike dentures, implants do not move while you speak or eat. Unlike bridges, they do not require trimming healthy neighbouring teeth. For many patients, implants are the most complete long-term replacement option.",
    ],
    optionsTitle: "Who is usually a good candidate?",
    optionsLead:
      "Most adults with missing teeth can be assessed for implants, but the right plan depends on bone support, gum health, and medical history.",
    options: [
      {
        title: "One or more missing teeth",
        text: "Implants may suit patients who want a fixed replacement instead of a removable denture.",
      },
      {
        title: "Healthy gums or treatable gum issues",
        text: "Active gum disease should be stabilised first, which is where periodontist-led care is valuable.",
      },
      {
        title: "Adequate bone support",
        text: "Some bone-loss cases can still move forward after grafting or staged treatment.",
      },
      {
        title: "Stable overall health",
        text: "Smoking, uncontrolled diabetes, or some medical conditions require careful planning but do not always rule implants out.",
      },
    ],
    process: [
      {
        title: "Consultation",
        text: "We examine your teeth, gums, bite, and X-rays to see whether the site is ready for an implant.",
      },
      {
        title: "Planning",
        text: "If gum treatment or bone grafting is needed first, we map that out before implant placement.",
      },
      {
        title: "Placement",
        text: "The implant post is placed under local anaesthesia in a controlled, comfortable appointment.",
      },
      {
        title: "Healing",
        text: "Over the next few months, the implant bonds with the jawbone through osseointegration.",
      },
      {
        title: "Final crown",
        text: "Once healing is confirmed, we attach a custom crown matched to your surrounding teeth.",
      },
    ],
    why: [
      {
        title: "Periodontist-led planning",
        text: "Dr. Niyukty Arjal specialises in the gums and bone that support implants.",
      },
      {
        title: "Clear diagnostics",
        text: "We assess bone support, gum condition, and site quality before recommending treatment.",
      },
      {
        title: "Honest communication",
        text: "Candidacy, timelines, costs, and alternatives are explained clearly before you decide.",
      },
      {
        title: "Structured follow-up",
        text: "Healing is reviewed properly before the final crown stage begins.",
      },
    ],
    careTitle: "How to help your implant last longer",
    care: [
      {
        title: "Brush gently but thoroughly",
        text: "Keep the implant crown and gumline clean with a soft-bristled brush twice a day.",
      },
      {
        title: "Clean between teeth daily",
        text: "Use floss or interdental aids so plaque does not accumulate around the implant site.",
      },
      {
        title: "Attend review visits",
        text: "Regular check-ups help catch bite pressure or gum issues early.",
      },
    ],
    extraImages: [
      {
        src: "/images/dental-implants-before-after.jpg",
        alt: "Dental implants before and after comparison",
        caption: "Restoring a missing tooth improves chewing, bite stability, and smile confidence.",
      },
    ],
    faqs: [
      {
        question: "How long does implant treatment take?",
        answer:
          "Many cases take a few months because the implant needs time to bond with the jawbone before the final crown is placed.",
      },
      {
        question: "Are implants painful?",
        answer:
          "Placement is done under local anaesthesia. Most patients describe pressure during the procedure and manageable soreness afterward.",
      },
      {
        question: "Can I get an implant if I have bone loss?",
        answer:
          "Possibly. We assess the bone first and explain whether grafting or staged care is appropriate.",
      },
    ],
    ctaTitle: "Ready to replace your missing tooth?",
    ctaText:
      "Book an implant consultation and get a clear assessment of your bone support, treatment timeline, and exact options.",
  },
  {
    slug: "dental-braces-kathmandu",
    aliases: ["dental-braces-and-orthodontics"],
    title: "Dental Braces in Kathmandu",
    shortTitle: "Dental Braces and Orthodontics",
    navTitle: "Braces",
    eyebrow: "Straighter teeth and a healthier bite",
    summary:
      "Metal, ceramic, and self-ligating braces tailored to your teeth, lifestyle, and budget.",
    price: "Starting from NPR 70,000",
    heroImage: "/images/braces/braces-hero.png",
    imageAlt: "Dental braces treatment illustration",
    highlights: [
      "Metal, ceramic, and self-ligating options",
      "Adjustment visits every 4 to 6 weeks",
      "Retainer guidance after braces removal",
    ],
    overview: [
      "Dental braces are orthodontic appliances that gradually move your teeth into better positions over time. They use gentle, continuous pressure through brackets and an archwire.",
      "Braces do more than improve appearance. Properly aligned teeth are easier to clean, and a corrected bite can reduce uneven wear, jaw strain, and chewing difficulty.",
    ],
    optionsTitle: "Types of braces available",
    optionsLead:
      "We offer several types of braces to match your needs, budget, and lifestyle.",
    options: [
      {
        title: "Metal braces",
        text: "The classic, time-tested option. Modern metal braces are smaller and more comfortable than older versions.",
      },
      {
        title: "Ceramic braces",
        text: "Tooth-coloured brackets that blend with your smile, popular with adults and working professionals.",
      },
      {
        title: "Self-ligating braces",
        text: "Built-in clips replace elastic bands, meaning fewer adjustments and faster treatment in many cases.",
      },
    ],
    signsTitle: "Signs you may need orthodontic treatment",
    signs: [
      "Crowded or overlapping teeth",
      "Gaps between teeth",
      "Overbite, underbite, or crossbite",
      "Jaw discomfort or uneven tooth wear",
      "Difficulty cleaning between teeth",
    ],
    process: [
      {
        title: "Consultation and exam",
        text: "We assess your teeth, take X-rays, discuss your goals, and provide a clear estimate.",
      },
      {
        title: "Treatment planning",
        text: "We choose the braces type, estimated duration, and visit schedule.",
      },
      {
        title: "Braces placement",
        text: "Brackets are bonded to each tooth and connected with an archwire.",
      },
      {
        title: "Regular adjustments",
        text: "Short visits every 4 to 6 weeks keep your teeth moving on track.",
      },
      {
        title: "Removal and retainer",
        text: "When alignment is complete, we remove the braces and fit a custom retainer.",
      },
    ],
    why: [
      {
        title: "MDS specialist led",
        text: "Gum health is evaluated alongside orthodontic needs, not as an afterthought.",
      },
      {
        title: "Transparent pricing",
        text: "We explain the cost breakdown before treatment starts.",
      },
      {
        title: "Appointment-based system",
        text: "Dedicated time slots keep adjustment visits efficient.",
      },
      {
        title: "Emergency orthodontic support",
        text: "Loose bracket or broken wire? Call us and we will guide the next step.",
      },
    ],
    careTitle: "Braces care and aftercare tips",
    care: [
      {
        title: "Brush and floss carefully",
        text: "Use a soft brush, interdental brush, or floss threader to clean around brackets and wires.",
      },
      {
        title: "Avoid hard and sticky foods",
        text: "Skip popcorn kernels, hard candy, ice chewing, and sticky sweets.",
      },
      {
        title: "Wear your retainer",
        text: "After braces removal, retainers prevent teeth from shifting back.",
      },
    ],
    extraImages: [
      {
        src: "/images/braces/braces-types-infographic.png",
        alt: "Types of dental braces infographic",
        caption: "Braces options can be chosen around visibility, cost, and treatment goals.",
      },
      {
        src: "/images/braces/braces-process-infographic_.png",
        alt: "Dental braces process infographic",
        caption: "Orthodontic treatment progresses through planning, placement, adjustment, and retention.",
      },
    ],
    faqs: [
      {
        question: "How much do braces cost in Kathmandu?",
        answer:
          "Braces at Gums and Giggles start from NPR 70,000. Final cost depends on braces type and case complexity.",
      },
      {
        question: "How long does braces treatment take?",
        answer:
          "Many cases take 12 to 24 months, but your timeline depends on tooth movement and bite correction needs.",
      },
      {
        question: "Do braces hurt?",
        answer:
          "Placement is not painful. Soreness after adjustments is normal and usually settles within a few days.",
      },
    ],
    ctaTitle: "Ready for a straighter smile?",
    ctaText:
      "Book a braces consultation and get an honest recommendation with transparent pricing.",
  },
  {
    slug: "root-canal-treatment",
    aliases: ["root_canal_treatment"],
    title: "Root Canal Treatment (RCT) in Kathmandu",
    shortTitle: "Root Canal Treatment",
    navTitle: "Root Canal",
    eyebrow: "Save an infected tooth",
    summary:
      "Modern root canal treatment removes infection, relieves pain, and helps preserve your natural tooth.",
    price: "Starting from NPR 12,000",
    heroImage: "/clinic_photos/clinics_counter_image.webp",
    imageAlt: "Reception area at Gums and Giggles Dental Clinic",
    highlights: [
      "Pain-controlled treatment with local anaesthesia",
      "Digital X-ray based diagnosis",
      "Crown planning when the tooth needs protection",
    ],
    overview: [
      "Root canal treatment removes infected or inflamed pulp from inside a tooth, cleans the canals, and seals the space so the tooth can be restored instead of extracted.",
      "RCT is commonly recommended for severe toothache, lingering sensitivity, swelling near a tooth, pain on biting, or a cracked tooth with deep infection.",
    ],
    signsTitle: "Symptoms that may need RCT",
    signs: [
      "Severe or throbbing toothache",
      "Lingering hot or cold sensitivity",
      "Pain when biting or chewing",
      "Swollen or tender gum near a tooth",
      "A pimple-like bump on the gum",
      "Darkening of a tooth",
    ],
    process: [
      {
        title: "Examination and X-ray",
        text: "We confirm the source of pain and check the roots before treatment begins.",
      },
      {
        title: "Anaesthesia and isolation",
        text: "The tooth is numbed and isolated so treatment can be performed comfortably.",
      },
      {
        title: "Cleaning and shaping",
        text: "Infected tissue is removed and the canals are cleaned and shaped.",
      },
      {
        title: "Filling, sealing, and crown",
        text: "The canals are sealed, and a crown may be recommended to protect the tooth.",
      },
    ],
    why: [
      {
        title: "Keep your natural tooth",
        text: "Saving a tooth preserves chewing function and avoids replacement treatment where possible.",
      },
      {
        title: "Gentle anaesthesia-based care",
        text: "The area is numbed before treatment so the procedure is much more comfortable than patients expect.",
      },
      {
        title: "Transparent pricing",
        text: "We explain treatment cost and crown needs before you commit.",
      },
      {
        title: "Clear aftercare guidance",
        text: "You leave with practical instructions on eating, medication, and restoration timing.",
      },
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "The tooth is numbed with local anaesthesia. Most patients feel pressure rather than sharp pain.",
      },
      {
        question: "Will I need a crown after RCT?",
        answer:
          "Back teeth and heavily damaged teeth often need crowns after RCT to prevent fracture.",
      },
      {
        question: "How many visits are needed?",
        answer:
          "Some cases finish in one visit, while infected or complex teeth may need more appointments.",
      },
    ],
    ctaTitle: "Tooth pain? Do not wait for it to get worse.",
    ctaText:
      "Book a consultation so we can diagnose the cause and explain whether RCT can save your tooth.",
  },
  {
    slug: "zirconia-crowns-and-bridges",
    aliases: ["zirconia_crowns_bridges"],
    title: "Zirconia Crowns and Bridges in Kathmandu",
    shortTitle: "Zirconia Crowns and Bridges",
    navTitle: "Crowns",
    eyebrow: "Natural-looking tooth restoration",
    summary:
      "Strong, metal-free ceramic crowns and bridges that match the colour of real teeth.",
    price: "Starting from NPR 22,000",
    heroImage: "/images/zirconia-crown-hero.png",
    imageAlt: "Zirconia crown hero illustration",
    highlights: [
      "Tooth-coloured, metal-free material",
      "Common after root canal treatment",
      "Suitable for crowns and fixed bridges",
    ],
    overview: [
      "A dental crown is a cap that fits over a damaged, weakened, or root-canal-treated tooth to restore shape, strength, and appearance.",
      "Zirconia is a high-strength ceramic that combines durability with a natural white appearance. There is no metal line at the gumline and it is a good choice for visible teeth.",
    ],
    optionsTitle: "Zirconia, metal, or PFM crowns",
    options: [
      {
        title: "Metal crown",
        text: "Very strong but visibly silver or gold, usually reserved for back molars where appearance matters less.",
      },
      {
        title: "Metal ceramic crown",
        text: "Porcelain over metal. Looks reasonable but can develop a dark gumline over time.",
      },
      {
        title: "Zirconia crown",
        text: "Metal-free, colour-matched, strong, and biocompatible. Our premium option for visible and back teeth.",
      },
    ],
    process: [
      {
        title: "Examination and X-ray",
        text: "We check the tooth, root, and surrounding bone before recommending a crown.",
      },
      {
        title: "Tooth preparation",
        text: "The tooth is shaped under local anaesthesia and an impression is taken.",
      },
      {
        title: "Lab fabrication",
        text: "Your crown is custom-made with shade, shape, and size matched to nearby teeth.",
      },
      {
        title: "Fitting and cementing",
        text: "Fit, bite, and colour are checked before the crown is permanently cemented.",
      },
    ],
    why: [
      {
        title: "Precise colour matching",
        text: "We shade-match the crown so it blends naturally with surrounding teeth.",
      },
      {
        title: "Specialist-led clinic",
        text: "Gumline health is considered in crown design and long-term maintenance.",
      },
      {
        title: "Appointment-based care",
        text: "Your crown fitting receives dedicated time and careful review.",
      },
      {
        title: "Biocompatible material",
        text: "Zirconia is metal-free and suitable for patients who prefer an allergy-free option.",
      },
    ],
    extraImages: [
      {
        src: "/images/crown-comparison-infographic.png",
        alt: "Crown material comparison infographic",
        caption: "Zirconia combines strength with a natural tooth-coloured appearance.",
      },
      {
        src: "/images/crown-process-steps.png",
        alt: "Crown process steps infographic",
        caption: "Most crown and bridge treatment follows a planned two-visit process.",
      },
    ],
    faqs: [
      {
        question: "How long does a zirconia crown last?",
        answer:
          "A well-placed zirconia crown can last 15 years or more with good home care and routine check-ups.",
      },
      {
        question: "Is zirconia better than metal ceramic?",
        answer:
          "Zirconia is metal-free, stronger than many older porcelain options, and avoids a dark gumline.",
      },
      {
        question: "Do I need a crown after root canal treatment?",
        answer:
          "Many root-canal-treated teeth need crowns because they are weaker and more likely to fracture.",
      },
    ],
    ctaTitle: "Ready for a crown that looks like your real tooth?",
    ctaText:
      "Book a consultation and find out whether a zirconia crown or bridge is the right solution.",
  },
  {
    slug: "teeth-cleaning",
    aliases: ["teeth-cleaning-and-scaling"],
    title: "Teeth Cleaning and Scaling in Kathmandu",
    shortTitle: "Teeth Cleaning and Scaling",
    navTitle: "Cleaning",
    eyebrow: "Preventive dental care",
    summary:
      "Professional tartar removal, polishing, and gum assessment for healthier teeth and gums.",
    price: "Starting from NPR 2,000",
    heroImage: "/clinic_photos/clinics_counter_image.webp",
    imageAlt: "Reception at Gums and Giggles Dental Clinic",
    highlights: [
      "Ultrasonic scaling equipment",
      "Gum disease screening during cleaning",
      "Recommended every six months for many patients",
    ],
    overview: [
      "Professional teeth cleaning removes plaque and tartar that brushing cannot fully clear, especially around the gumline and between teeth.",
      "Scaling and polishing can reduce gum inflammation, freshen breath, and help catch gum disease early before it becomes more complex.",
    ],
    signsTitle: "When to book a cleaning",
    signs: [
      "Bleeding while brushing",
      "Tartar buildup near the gumline",
      "Bad breath that keeps returning",
      "Staining from tea, coffee, or smoking",
      "You have not had a cleaning in six months or more",
    ],
    process: [
      {
        title: "Gum and tooth assessment",
        text: "We check gum health, tartar buildup, staining, and areas that need attention.",
      },
      {
        title: "Ultrasonic scaling",
        text: "Tartar is removed using ultrasonic instruments and hand tools where needed.",
      },
      {
        title: "Polishing",
        text: "Surface stains are polished away for a smoother, cleaner feel.",
      },
      {
        title: "Aftercare advice",
        text: "You receive practical brushing, flossing, and recall guidance.",
      },
    ],
    why: [
      {
        title: "MDS periodontist-led clinic",
        text: "Cleaning is backed by gum-health expertise, not treated as a quick cosmetic service.",
      },
      {
        title: "Early gum disease detection",
        text: "We watch for inflammation, pocketing, and bleeding during your visit.",
      },
      {
        title: "Appointment-based visits",
        text: "Your cleaning slot is planned so care does not feel rushed.",
      },
      {
        title: "Transparent pricing",
        text: "Regular and deep-cleaning needs are explained before treatment.",
      },
    ],
    faqs: [
      {
        question: "How often should I get teeth cleaned?",
        answer:
          "Many patients benefit from cleaning every six months. Gum disease patients may need more frequent maintenance.",
      },
      {
        question: "Is scaling bad for teeth?",
        answer:
          "No. Professional scaling removes harmful tartar; it does not damage healthy tooth enamel when done properly.",
      },
      {
        question: "Will cleaning whiten my teeth?",
        answer:
          "Cleaning removes stains and tartar, so teeth look fresher. Whitening is a separate treatment for changing tooth shade.",
      },
    ],
    ctaTitle: "Due for a cleaning?",
    ctaText:
      "Book a professional scaling and gum check at our Kathmandu clinic.",
  },
  {
    slug: "wisdom-tooth-removal",
    aliases: ["wisdom-tooth-extraction"],
    title: "Wisdom Tooth Extraction in Kathmandu",
    shortTitle: "Wisdom Tooth Removal",
    navTitle: "Wisdom Tooth",
    eyebrow: "Simple and surgical extractions",
    summary:
      "Safe, gentle removal of painful, impacted, or infected wisdom teeth under local anaesthesia.",
    price: "Simple extraction NPR 500-2,500; surgical NPR 8,000-16,000",
    heroImage: "/images/wisdom-tooth/wisdom-tooth-anatomy.png",
    imageAlt: "Wisdom tooth anatomy illustration",
    highlights: [
      "X-ray based planning",
      "Simple and surgical extraction options",
      "Clear recovery and aftercare guidance",
    ],
    overview: [
      "Wisdom teeth are the last molars to erupt, often between the late teens and twenties. Many do not have enough room to come through correctly.",
      "A wisdom tooth may need removal if it causes pain, infection, swelling, decay, gum problems, or pressure on the tooth in front.",
    ],
    optionsTitle: "Types of wisdom tooth impaction",
    options: [
      {
        title: "Soft tissue impaction",
        text: "The tooth is partly covered by gum tissue, creating a pocket where food and bacteria can collect.",
      },
      {
        title: "Partial bony impaction",
        text: "Part of the tooth is trapped under bone, often causing repeated pain or infection.",
      },
      {
        title: "Full bony impaction",
        text: "The tooth is buried in the jawbone and may lie sideways against the adjacent molar.",
      },
    ],
    process: [
      {
        title: "Consultation and X-ray",
        text: "We check the tooth position and plan the safest extraction approach.",
      },
      {
        title: "Anaesthesia",
        text: "Local anaesthesia numbs the area before we begin.",
      },
      {
        title: "Extraction",
        text: "Depending on the case, we perform a simple or surgical extraction.",
      },
      {
        title: "Recovery and follow-up",
        text: "You go home with aftercare instructions, medications if needed, and review guidance.",
      },
    ],
    why: [
      {
        title: "Specialist doctor",
        text: "Dr. Niyukty Arjal brings specialist surgical and gum-care expertise.",
      },
      {
        title: "Modern surgical equipment",
        text: "X-ray planning and current instruments support smoother treatment.",
      },
      {
        title: "Comfortable environment",
        text: "We explain each step so oral surgery feels more controlled.",
      },
      {
        title: "Transparent pricing",
        text: "You receive a cost estimate after examination and X-ray.",
      },
    ],
    careTitle: "Recovery essentials",
    care: [
      {
        title: "First 24 hours",
        text: "Bite on gauze as advised, rest, keep your head elevated, and use cold packs.",
      },
      {
        title: "Avoid suction",
        text: "Do not use a straw, rinse forcefully, smoke, or poke the socket.",
      },
      {
        title: "Eat soft foods",
        text: "Start with yogurt, soft khichdi, soup, and mashed foods before returning to normal eating.",
      },
    ],
    extraImages: [
      {
        src: "/images/wisdom-tooth/recovery-timeline.png",
        alt: "Wisdom tooth recovery timeline",
        caption: "Most patients recover comfortably within 7 to 10 days.",
      },
      {
        src: "/images/wisdom-tooth/aftercare-dos-donts.png",
        alt: "Wisdom tooth aftercare dos and donts",
        caption: "The first 24 to 48 hours are important for proper healing.",
      },
    ],
    faqs: [
      {
        question: "Does every wisdom tooth need to come out?",
        answer:
          "No. Removal is recommended when the tooth is painful, infected, damaging nearby teeth, or likely to cause problems.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Most patients feel much better within a few days and recover comfortably within 7 to 10 days.",
      },
      {
        question: "What is dry socket?",
        answer:
          "Dry socket happens when the blood clot is lost too early. Avoiding straws, forceful rinsing, and smoking lowers the risk.",
      },
    ],
    ctaTitle: "Ready to sort out your wisdom teeth?",
    ctaText:
      "Book a consultation, get an X-ray, and receive a clear extraction plan before anything is decided.",
  },
];

export const featuredServices = services.slice(0, 6);

export function getServiceBySlug(slug: string) {
  return services.find(
    (service) => service.slug === slug || service.aliases?.includes(slug),
  );
}

