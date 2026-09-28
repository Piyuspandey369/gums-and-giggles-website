export type PostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  displayDate: string;
  readingTime: string;
  author: string;
  authorRole: string;
  heroImage: string;
  imageAlt: string;
  intro: string[];
  sections: PostSection[];
  takeaway: string;
  relatedHref: string;
  relatedLabel: string;
};

export const posts: Post[] = [
  {
    slug: "gum-disease-stages-explained",
    title: "The four stages of gum disease, and what each one costs to treat",
    excerpt:
      "Gum disease is painless for most of its course, which is why it is usually found late. Here is how it progresses, what treatment each stage needs, and where the cost rises steeply.",
    category: "Gum care",
    date: "2026-09-20",
    displayDate: "20 September 2026",
    readingTime: "7 min read",
    author: "Dr. Niyukty Arjal",
    authorRole: "MDS Periodontist, Gums & Giggles Dental Clinic",
    heroImage: "/clinic_photos/doctor_photo_with_a_adult_male_patient.webp",
    imageAlt: "Periodontal examination at Gums and Giggles Dental Clinic",
    intro: [
      "Most patients who come to us with loose teeth are surprised to hear they have had gum disease for years. It rarely hurts. It does not usually stop you eating. By the time it becomes obvious, a good deal of the damage is permanent.",
      "The useful thing about gum disease is that it follows a predictable path. If you know which stage you are at, you know what treatment you need and roughly what it will cost. Here is that path, stage by stage.",
    ],
    sections: [
      {
        heading: "Stage one: healthy gums",
        paragraphs: [
          "Worth describing first, because many people have never seen healthy gums and assume their own are normal. Healthy gums are pale pink, firm, and sit tightly against the tooth in a thin scalloped edge. They do not bleed when brushed or flossed, not even a little.",
          "On the chart, pocket depths measure 1 to 3mm at every point. There is no bleeding on probing and no bone loss visible on X-ray.",
        ],
        bullets: [
          "Treatment needed: a professional clean every six months",
          "Typical cost: from NPR 2,000 per visit",
        ],
      },
      {
        heading: "Stage two: gingivitis",
        paragraphs: [
          "Plaque sits along the gumline long enough to harden into calculus, and the gum responds with inflammation. It becomes red, slightly swollen, and bleeds when you brush. This is gingivitis and it is extremely common.",
          "The important detail is what has not happened yet: no bone has been lost. Nothing is permanent at this point. A thorough professional clean plus a corrected home routine resolves it, usually within two weeks.",
          "This is also the stage most people ignore, because bleeding gums do not hurt and it is easy to assume you are brushing too hard. The bleeding is the warning that arrives before the damage.",
        ],
        bullets: [
          "Treatment needed: scaling and polishing, plus technique correction",
          "Typical cost: from NPR 2,000, usually one visit",
          "Reversible: completely",
        ],
      },
      {
        heading: "Stage three: early to moderate periodontitis",
        paragraphs: [
          "If inflammation continues, it moves below the gumline. The fibres attaching gum to tooth break down, and pockets form between the two. Bacteria colonise those pockets, where no toothbrush reaches. The bone that holds the tooth starts to resorb.",
          "On the chart, pockets now measure 4 to 6mm and bleed when probed. X-rays show the first loss of bone height. Patients often notice nothing at all, or only bad breath that keeps coming back.",
          "Treatment moves from cleaning to deep cleaning: scaling and root planing under local anaesthetic, quadrant by quadrant, cleaning inside the pockets and smoothing the root surfaces so the gum can reattach. We re-measure six to eight weeks later and compare with the original chart.",
          "The bone lost at this stage does not come back. Treatment stops the process; it does not rewind it. That is the first point where waiting costs you something you cannot buy back.",
        ],
        bullets: [
          "Treatment needed: scaling and root planing, quoted per quadrant",
          "Usually one or two visits, plus a re-evaluation",
          "Reversible: the inflammation, yes. The lost bone, no.",
        ],
      },
      {
        heading: "Stage four: advanced periodontitis",
        paragraphs: [
          "Pockets exceed 6mm, substantial bone has been lost, and teeth begin to loosen, drift, or splay outward. Patients notice gaps opening between front teeth, a bite that feels different, or a tooth that moves when pushed with the tongue.",
          "Deep cleaning alone often cannot reach the base of pockets this deep. Surgical access is usually required, so the root surfaces and bone defects can be cleaned directly, and grafting may be considered in specific defects.",
          "Some teeth at this stage cannot be saved. Where a tooth is lost, replacement becomes the next conversation: an implant, a bridge, or a denture, all considerably more expensive than the treatment that would have prevented the loss.",
        ],
        bullets: [
          "Treatment needed: periodontal surgery, quoted per site",
          "Possible additional cost: extraction and replacement, from NPR 100,000 for an implant",
          "Reversible: no. The goal is keeping the remaining teeth.",
        ],
      },
      {
        heading: "Where the cost actually escalates",
        paragraphs: [
          "The jump is not gradual. Treating gingivitis costs about the same as a routine cleaning. Treating moderate periodontitis costs several times that. Treating advanced disease, including replacing teeth you lose, costs an order of magnitude more.",
          "This is the only real argument for early examination, and it is a financial one as much as a clinical one. A gum check costs a consultation fee. The alternative, discovered five years later, is measured in implants.",
        ],
      },
      {
        heading: "How to find out which stage you are at",
        paragraphs: [
          "Not by looking in the mirror. Pocket depth is measured with a graduated probe at six points around every tooth, and bone level is assessed on X-ray. That charting takes about twenty minutes and gives you a definite answer rather than an impression.",
          "If your gums bleed when you brush, if your breath is persistently bad, or if you have simply never had your gums charted, that examination is the thing worth booking.",
        ],
      },
    ],
    takeaway:
      "Gum disease is treatable at every stage, but only the first stage is reversible. The examination that tells you where you stand is cheap; the treatment gets expensive in a hurry.",
    relatedHref: "/gum-care/gum-disease-treatment",
    relatedLabel: "Read about gum disease treatment",
  },
  {
    slug: "why-gums-bleed-when-brushing",
    title: "Why your gums bleed when you brush, and what it actually means",
    excerpt:
      "Bleeding gums are the single most common thing patients mention and the single most common thing they ignore. Seven causes a periodontist sees weekly, and what to do about each.",
    category: "Gum care",
    date: "2026-09-12",
    displayDate: "12 September 2026",
    readingTime: "6 min read",
    author: "Dr. Niyukty Arjal",
    authorRole: "MDS Periodontist, Gums & Giggles Dental Clinic",
    heroImage: "/clinic_photos/clinics_counter_image.webp",
    imageAlt: "Gums and Giggles Dental Clinic reception, Kathmandu",
    intro: [
      "If your hand bled every time you washed it, you would see someone about it. Gums get a strange exemption from that logic. Patients tell me their gums have bled for years, in the same tone they would use to describe a habit.",
      "Healthy gums do not bleed. Not when you brush hard, not when you floss, not occasionally. Bleeding always means inflammation, and inflammation always has a cause. These are the causes I see most.",
    ],
    sections: [
      {
        heading: "1. Plaque along the gumline",
        paragraphs: [
          "The overwhelming majority of cases. Plaque that sits undisturbed at the gumline for a couple of days hardens into calculus, which is rough, porous, and impossible to remove with a toothbrush. The gum reacts to the bacteria living on it, and inflamed tissue bleeds when touched.",
          "What to do: a professional clean removes the calculus, and a corrected brushing routine stops it reforming. Bleeding usually stops within one to two weeks.",
        ],
      },
      {
        heading: "2. Brushing that misses the gumline",
        paragraphs: [
          "Plenty of people brush twice a day and still have bleeding gums, because they are cleaning the middle of the tooth and skating over the edge where it meets the gum. That junction is exactly where plaque accumulates.",
          "What to do: angle the bristles at about 45 degrees into the gumline and use small circles. It feels counterintuitive to brush the part that bleeds, but that is the part that needs it.",
        ],
      },
      {
        heading: "3. Never cleaning between the teeth",
        paragraphs: [
          "A toothbrush reaches roughly three of the five surfaces of each tooth. The two surfaces between teeth are where gum disease most often starts, and they are also the sites patients are most surprised to find bleeding.",
          "What to do: interdental brushes where the gaps allow, floss where they do not. Daily, not weekly. Expect bleeding for the first week if those sites have been inflamed for a while.",
        ],
      },
      {
        heading: "4. Pregnancy and hormonal change",
        paragraphs: [
          "Pregnancy gingivitis is common and not a sign of neglect. Hormonal changes exaggerate the gum response to the same amount of plaque, so gums that were fine before can become swollen and bleed easily.",
          "What to do: professional cleaning during pregnancy is safe and worth doing. The second trimester is usually the most comfortable time for a longer appointment. Tell the clinic you are pregnant when you book.",
        ],
      },
      {
        heading: "5. Diabetes and general health",
        paragraphs: [
          "The relationship runs in both directions. Poorly controlled blood sugar makes gum disease worse and slower to heal, and active gum inflammation makes blood sugar harder to control. Some medications also cause gum overgrowth, which traps plaque and bleeds.",
          "What to do: tell your dentist about your medical history and your full medication list. It changes what we look for and how we plan treatment.",
        ],
      },
      {
        heading: "6. Smoking, which hides the problem",
        paragraphs: [
          "Smoking is a peculiar case. It worsens gum disease substantially, but it also constricts the blood vessels in the gum, which suppresses the bleeding that would otherwise warn you. Smokers often present with advanced disease and gums that look deceptively calm.",
          "What to do: if you smoke, do not take the absence of bleeding as reassurance. Get charted. Quitting measurably improves how gums respond to treatment.",
        ],
      },
      {
        heading: "7. Periodontitis that has moved past gingivitis",
        paragraphs: [
          "Sometimes bleeding is not early-stage inflammation at all. If pockets have formed and bone has been lost, no amount of better brushing will fix it, because the bacteria now live several millimetres below where your brush can reach.",
          "What to do: this is the reason two weeks of good home care is a useful test. If bleeding persists past that, the problem is deeper than technique, and it needs charting rather than more advice.",
        ],
      },
      {
        heading: "The one mistake to avoid",
        paragraphs: [
          "Do not stop cleaning the area because it bleeds. It is the most natural reaction and it makes the problem worse: less cleaning means more plaque, which means more inflammation, which means more bleeding.",
          "Clean gently but completely, every day, and give it two weeks. If the bleeding has stopped, you have your answer. If it has not, book an examination and find out what is actually going on.",
        ],
      },
    ],
    takeaway:
      "Bleeding gums are a symptom, not a personality trait. Two weeks of proper cleaning resolves most cases. Anything that survives that test needs a periodontal examination.",
    relatedHref: "/gum-care/bleeding-gums-gingivitis",
    relatedLabel: "Read about bleeding gums and gingivitis",
  },
  {
    slug: "braces-vs-clear-aligners-nepal",
    title: "Braces or clear aligners in Nepal: cost, duration, and who each suits",
    excerpt:
      "Both straighten teeth. They differ in price, treatment time, visibility, and how much of the result depends on you remembering to wear them.",
    category: "Treatments",
    date: "2026-09-04",
    displayDate: "4 September 2026",
    readingTime: "6 min read",
    author: "Dr. Niyukty Arjal",
    authorRole: "MDS Periodontist, Gums & Giggles Dental Clinic",
    heroImage: "/images/braces/braces-hero.png",
    imageAlt: "Dental braces treatment illustration",
    intro: [
      "Patients usually arrive having already decided they want aligners, mostly because they are invisible. That is a reasonable preference, but it is only one of five factors worth weighing, and for some bites it is the wrong choice entirely.",
      "Here is the honest comparison, including the parts that rarely make it into an advertisement.",
    ],
    sections: [
      {
        heading: "Cost",
        paragraphs: [
          "Fixed braces at our clinic start from NPR 70,000, with the final figure depending on the bracket type and how long treatment runs. Metal brackets sit at the lower end, ceramic and self-ligating systems above them.",
          "Clear aligners are typically more expensive than metal braces for equivalent cases, because the cost includes digital planning and a full series of custom-made trays. Ask for the total treatment cost rather than a per-tray price, and confirm whether refinements and retainers are included.",
        ],
      },
      {
        heading: "Treatment time",
        paragraphs: [
          "For comparable crowding, treatment times are broadly similar: often 12 to 24 months, sometimes longer for complex bites. The difference is what controls that timeline.",
          "Braces work continuously, whether you think about them or not. Aligners work only while they are in your mouth, and they need 20 to 22 hours a day. A patient who takes them out for long lunches will add months to their own treatment, and that is the most common reason aligner cases run late.",
        ],
      },
      {
        heading: "What each handles well",
        paragraphs: [
          "Aligners are excellent for mild to moderate crowding, spacing, and relapse after previous orthodontic treatment. They are less predictable for large rotations, significant bite corrections, and cases that need teeth moved bodily rather than tipped.",
          "Fixed braces handle essentially the full range, including the complex bite corrections aligners struggle with. That versatility is why they remain the default for difficult cases.",
        ],
        bullets: [
          "Mild crowding or spacing: either works",
          "Rotated canines, significant bite correction: braces usually",
          "Relapse after old braces: aligners often ideal",
          "Teenagers who will not comply: braces, firmly",
        ],
      },
      {
        heading: "Daily life",
        paragraphs: [
          "With braces you avoid hard and sticky food for the duration, cleaning takes longer, and there are a few days of soreness after each adjustment. They are visible, though ceramic brackets are considerably less so.",
          "With aligners you remove them to eat, so there are no food restrictions, and cleaning your teeth is unchanged. You will need to take them out before every meal and every drink other than water, brush before putting them back in, and carry a case. Some people find this trivial and some find it exhausting.",
        ],
      },
      {
        heading: "Gum health, which decides whether you start at all",
        paragraphs: [
          "This is the part that matters most in a periodontal practice. Moving teeth through inflamed gums and reduced bone is a genuinely bad idea. Orthodontic force applied to a periodontally compromised tooth can accelerate the damage.",
          "Before either treatment, gums should be examined, charted, and treated if disease is present. Where bone support is already reduced, orthodontics may still be possible, but the plan has to account for it and the maintenance schedule tightens during treatment.",
          "Aligners have one small advantage here: being removable, they make cleaning easier during treatment, which matters for patients with a gum disease history. Braces make cleaning harder precisely when it needs to be better.",
        ],
      },
      {
        heading: "Retention: the part everyone underestimates",
        paragraphs: [
          "Teeth drift back. This is not a failure of treatment, it is simply how the tissues behave, and it applies equally to braces and aligners.",
          "Whichever you choose, budget for retainers and plan to wear them long-term, typically nightly after an initial full-time period. A treatment plan that does not include retention is not finished.",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "Book an assessment and ask three questions: is my case treatable with aligners, what is the total cost for each option including retainers, and how does my gum condition affect the plan.",
          "The answer often makes itself obvious. A straightforward crowding case in a disciplined adult is a good aligner case. A complex bite, or a teenager, or anyone honest enough to admit they will not wear trays for 22 hours a day, is better served by braces.",
        ],
      },
    ],
    takeaway:
      "Aligners are not a better treatment, they are a different one with a different compliance burden. Match the appliance to your bite and your habits, and get your gums checked before either starts.",
    relatedHref: "/services/dental-braces-kathmandu",
    relatedLabel: "Read about braces and orthodontics",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
