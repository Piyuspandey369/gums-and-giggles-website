# Gums & Giggles: SEO Architecture & Migration Plan

Domain: https://www.gumsandgiggles.com.np
Stack: Next.js 16.2.6 (App Router) + Tailwind 4, deployed on Vercel
Business type: Local Service (dental clinic, single location, Kathmandu)
Primary differentiator: MDS specialist periodontist (Dr. Niyukty Arjal), gum care led
Plan date: 2026-09-28

---

## 0. Current state (audited live, 2026-09-28)

### Live URL inventory (11 canonical)

| # | URL | Status |
|---|-----|--------|
| 1 | `/` | live |
| 2 | `/about-us` | live |
| 3 | `/appointment` | live |
| 4 | `/services` | live |
| 5 | `/services/dental-implants-kathmandu` | live |
| 6 | `/services/dental-braces-kathmandu` | live |
| 7 | `/services/root-canal-treatment` | live |
| 8 | `/services/gum-care-and-periodontics` | live |
| 9 | `/services/zirconia-crowns-and-bridges` | live |
| 10 | `/services/teeth-cleaning` | live |
| 11 | `/services/wisdom-tooth-removal` | live |

### Alias URLs currently serving duplicate 200s (bug)

`generateStaticParams()` in `app/services/[slug]/page.tsx` emits every alias as a
real prerendered page with identical content and no canonical tag. That is 7
duplicate pages competing with their own originals.

| Alias URL (200 today) | Should 301 to |
|---|---|
| `/services/dental-implants` | `/services/dental-implants-kathmandu` |
| `/services/dental-braces-and-orthodontics` | `/services/dental-braces-kathmandu` |
| `/services/root_canal_treatment` | `/services/root-canal-treatment` |
| `/services/periodontics` | `/gum-care` |
| `/services/zirconia_crowns_bridges` | `/services/zirconia-crowns-and-bridges` |
| `/services/teeth-cleaning-and-scaling` | `/services/teeth-cleaning` |
| `/services/wisdom-tooth-extraction` | `/services/wisdom-tooth-removal` |

### Technical gaps found

| Gap | Severity | Evidence |
|---|---|---|
| No `robots.txt` | Critical | `/robots.txt` returns 404 |
| No `sitemap.xml` | Critical | `/sitemap.xml` returns 404 (renders the Next 404 page) |
| No `metadataBase`, no canonical tags | Critical | `app/layout.tsx` has no `metadataBase`; no `alternates.canonical` anywhere |
| Alias pages duplicate content | High | 7 URLs, 200 status, no canonical |
| No structured data at all | High | No JSON-LD on any page: no `Dentist`, `LocalBusiness`, `Person`, `BreadcrumbList` |
| No OG / Twitter image metadata | High | Social shares render bare |
| Favicon is `/logo_.png` (wide logo) | Medium | Needs a square 512x512 icon plus `apple-touch-icon` |
| NAP inconsistency | Medium | `components/constants.ts` email is `mail@gumsandgiggles.com`, domain is `.com.np` |
| No `/contact` page | Medium | Address, map, hours live only in the footer and a section |
| No blog, no price page | High (opportunity) | Zero informational-intent surface |

Positive: apex to www already 301s, HSTS is set, pages are statically prerendered
and served from Vercel edge cache.

---

## 1. Target information architecture

Approved tree, mapped to URLs. Two rules applied: **no existing live URL 404s**,
and a new page is created only where a genuinely unique 900+ word page exists.
Thin subsections become anchored sections, not separate URLs (see section 6).

```
/                                        Home
|
+-- /about-us                            About (hub)
|   +-- /about-us/dr-niyukty-arjal       Dr. Niyukty Arjal   [NEW, E-E-A-T anchor]
|   +-- /about-us/clinic                 The Clinic (tour, tech, sterilisation)  [NEW]
|   +-- /about-us#team                   Team            (section, not a URL)
|   +-- /about-us#qualifications         Qualifications  (folded into the doctor page)
|   +-- /about-us#why-choose-us          Why Choose Us   (section, not a URL)
|
+-- /gum-care                            Gum Care & Periodontics (silo hub)  [NEW]
|   +-- /gum-care/gum-disease-treatment                    [NEW]
|   +-- /gum-care/bleeding-gums-gingivitis                 [NEW]
|   +-- /gum-care/gum-recession-treatment                  [NEW]
|   +-- /gum-care/deep-cleaning-scaling-root-planing       [NEW]
|   +-- /gum-care/gum-surgery                              [NEW]
|
+-- /services                            Dental Services (hub)   [KEEP]
|   +-- /services/teeth-cleaning                           [KEEP]
|   +-- /services/dental-implants-kathmandu                [KEEP]
|   +-- /services/root-canal-treatment                     [KEEP]
|   +-- /services/dental-braces-kathmandu                  [KEEP]
|   +-- /services/zirconia-crowns-and-bridges              [KEEP]
|   +-- /services/wisdom-tooth-removal                     [KEEP]
|
+-- /treatment-prices                    Treatment Prices  [NEW, highest commercial intent]
+-- /patient-results                     Patient Results   [NEW, consent required]
+-- /blog                                Blog index        [NEW]
|   +-- /blog/<slug>                     Articles
+-- /appointment                         Book Appointment  [KEEP]
+-- /contact                             Contact           [NEW]
```

### Why `/gum-care` rather than nesting under `/services`

The periodontics silo is the commercial moat: an MDS periodontist is rare in
Kathmandu, and general dentists cannot credibly compete for gum queries. A
top-level path signals topical authority and keeps child URLs short
(`/gum-care/gum-surgery` beats `/services/gum-care-and-periodontics/gum-surgery`).
The cost is exactly one 301 on a roughly one month old URL, which is negligible.

### Braces and clear aligners

Keep one page at `/services/dental-braces-kathmandu` covering both, with a
dedicated `#clear-aligners` section. Split out `/services/clear-aligners-kathmandu`
only once Search Console shows real aligner demand (say 300+ impressions a month
on aligner queries). Splitting early produces two thin pages that cannibalise
each other.

---

## 2. Redirect map (301 permanent)

Every old URL resolves. No 404s, no redirect chains.

| Old URL | New URL |
|---|---|
| `/services/gum-care-and-periodontics` | `/gum-care` |
| `/services/periodontics` | `/gum-care` |
| `/services/dental-implants` | `/services/dental-implants-kathmandu` |
| `/services/dental-braces-and-orthodontics` | `/services/dental-braces-kathmandu` |
| `/services/root_canal_treatment` | `/services/root-canal-treatment` |
| `/services/zirconia_crowns_bridges` | `/services/zirconia-crowns-and-bridges` |
| `/services/teeth-cleaning-and-scaling` | `/services/teeth-cleaning` |
| `/services/wisdom-tooth-extraction` | `/services/wisdom-tooth-removal` |
| `/about` | `/about-us` (defensive) |
| `/book`, `/book-appointment` | `/appointment` (defensive) |
| `/prices`, `/pricing` | `/treatment-prices` (defensive) |

### Implementation

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      // Gum silo move
      { source: "/services/gum-care-and-periodontics", destination: "/gum-care", permanent: true },
      { source: "/services/periodontics", destination: "/gum-care", permanent: true },
      // Legacy slug aliases (previously served as duplicate 200s)
      { source: "/services/dental-implants", destination: "/services/dental-implants-kathmandu", permanent: true },
      { source: "/services/dental-braces-and-orthodontics", destination: "/services/dental-braces-kathmandu", permanent: true },
      { source: "/services/root_canal_treatment", destination: "/services/root-canal-treatment", permanent: true },
      { source: "/services/zirconia_crowns_bridges", destination: "/services/zirconia-crowns-and-bridges", permanent: true },
      { source: "/services/teeth-cleaning-and-scaling", destination: "/services/teeth-cleaning", permanent: true },
      { source: "/services/wisdom-tooth-extraction", destination: "/services/wisdom-tooth-removal", permanent: true },
      // Defensive
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/book", destination: "/appointment", permanent: true },
      { source: "/book-appointment", destination: "/appointment", permanent: true },
      { source: "/prices", destination: "/treatment-prices", permanent: true },
      { source: "/pricing", destination: "/treatment-prices", permanent: true },
    ];
  },
};

export default nextConfig;
```

Required companion change in `app/services/[slug]/page.tsx`, so aliases stop
prerendering as pages and fall through to the redirect rules:

```ts
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
```

Keep the alias matching inside `getServiceBySlug` for internal lookups, but it
must no longer produce routes.

---

## 3. Technical foundations (Phase 1, these gate everything else)

### 3.1 `app/robots.ts`

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.gumsandgiggles.com.np/sitemap.xml",
    host: "https://www.gumsandgiggles.com.np",
  };
}
```

Do not block `GPTBot`, `PerplexityBot`, `ClaudeBot`, `OAI-SearchBot` or
`Google-Extended`. AI assistants are a real referral channel for questions like
"best periodontist in Kathmandu".

### 3.2 `app/sitemap.ts`

Generate from one route registry so the sitemap can never drift from the router:
static routes, plus `services`, plus a new `gumTopics` dataset, plus blog posts.
Set `lastModified` from content data, not `new Date()`, so it stays truthful.

### 3.3 `metadataBase` and canonicals

```ts
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.gumsandgiggles.com.np"),
  alternates: { canonical: "/" },
  title: {
    default: "Gums & Giggles Dental Clinic Kathmandu",
    template: "%s | Gums & Giggles",
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    siteName: "Gums & Giggles Dental Clinic",
    images: ["/og/default.jpg"],
  },
  twitter: { card: "summary_large_image" },
};
```

Every page and every dynamic route sets its own
`alternates: { canonical: "<its path>" }`.

### 3.4 Structured data

| Page | Schema |
|---|---|
| All pages (from layout) | `Dentist` (a `MedicalBusiness` and `LocalBusiness` subtype) with a stable `@id`, NAP, `geo`, `openingHoursSpecification`, `areaServed`, `hasMap`, `sameAs` |
| All pages except home | `BreadcrumbList` |
| `/services/*` and `/gum-care/*` | `MedicalProcedure` or `Service`, with `provider` referencing the `Dentist` `@id` |
| `/about-us/dr-niyukty-arjal` | `Physician` / `Person`, `medicalSpecialty: Periodontic`, `alumniOf`, `hasCredential` |
| `/blog/*` | `Article`, `author` referencing the Person `@id`, `datePublished`, `dateModified` |

Explicit do-nots:

- No hand-written `AggregateRating` for self-hosted testimonials. Self-serving review markup on a `LocalBusiness` is ignored at best. Let Google Business Profile carry ratings.
- No `FAQPage`. Google retired FAQ rich results for all sites on 2026-05-07, so there is no SERP upside. Keep the FAQ content as plain structured HTML: it still feeds AI answers and on-page relevance.
- Never `HowTo` schema (deprecated 2023).

### 3.5 Remaining technical items

- Square 512x512 favicon plus `apple-touch-icon` (currently reuses the wide logo).
- OG images: one for home, one generic service, one for the doctor page.
- Fix the clinic email so it lives on `.com.np`, then mirror it everywhere.
- Keep `lang="en"`. Hreflang is not needed: one language, one market.
- `/llms.txt` is optional and only worth adding after the content build.

---

## 4. Keyword and intent map

Nepali dental search behaviour skews to price intent, "in Kathmandu" and "near
me" modifiers, and heavy Google Maps usage. Treat the targets below as planning
hypotheses and validate them in Search Console once verified (section 8).

### Gum silo (the moat)

| Page | Primary query | Secondary |
|---|---|---|
| `/gum-care` | periodontist in Kathmandu | gum specialist Nepal, gum doctor Kathmandu |
| `/gum-care/gum-disease-treatment` | gum disease treatment Kathmandu | periodontitis treatment Nepal, cost |
| `/gum-care/bleeding-gums-gingivitis` | bleeding gums treatment | gingivitis treatment Kathmandu, why gums bleed |
| `/gum-care/gum-recession-treatment` | gum recession treatment Nepal | receding gums, gum graft cost |
| `/gum-care/deep-cleaning-scaling-root-planing` | deep cleaning teeth Kathmandu | scaling and root planing cost Nepal |
| `/gum-care/gum-surgery` | gum surgery in Nepal | flap surgery cost Kathmandu, gingivectomy |

### Dental services

| Page | Primary query |
|---|---|
| `/services/dental-implants-kathmandu` | dental implant cost in Nepal |
| `/services/root-canal-treatment` | root canal treatment cost Kathmandu |
| `/services/dental-braces-kathmandu` | braces price in Nepal |
| `/services/teeth-cleaning` | teeth cleaning price Kathmandu |
| `/services/zirconia-crowns-and-bridges` | zirconia crown price Nepal |
| `/services/wisdom-tooth-removal` | wisdom tooth removal cost Kathmandu |

### Money pages

| Page | Primary query | Note |
|---|---|---|
| `/treatment-prices` | dental treatment price list Nepal | Highest commercial intent page on the site. Publish real numbers or ranges with an "updated on" date. Clinics that publish beat clinics that say "contact us". |
| `/patient-results` | before after dental Kathmandu | Written patient consent per case. No identifiable faces without a release, no outcome guarantees (YMYL). |
| `/contact` | Gums and Giggles Kathmandu location | Embedded map, directions from nearby landmarks, Dhobidhara Marg, hours, parking. |

### Blog: first 10 posts

Each post links up to its silo hub and across to one service page, and carries a
credentialed byline.

1. Gum disease stages explained, and what each stage costs to treat
2. Why gums bleed when you brush: 7 causes a periodontist sees weekly
3. Dental implant cost in Nepal 2026: a full breakdown by component
4. Does scaling damage teeth? The most common myth in Nepali dental care
5. Braces vs clear aligners in Nepal: cost, duration, who each suits
6. Root canal vs extraction: how to decide
7. What to expect at your first dental visit in Kathmandu
8. Bad breath: the dental causes and what actually fixes them
9. Pregnancy gingivitis: safe dental care during pregnancy
10. Wisdom tooth pain: when to wait, when to remove

---

## 5. Local SEO (highest ROI channel for this business)

For a Kathmandu clinic the map pack beats organic on both volume and conversion.
Organic work without this is half a strategy.

1. **Google Business Profile**: claim and complete. Primary category `Dental clinic`, secondary `Periodontist` and `Orthodontist`. Services list mirrors the site IA exactly. 20+ real photos (exterior, signage, reception, operatory, sterilisation, team). Accurate hours. Booking link to `/appointment`.
2. **NAP lock**: one canonical name, address, phone, email string. Apply it to `components/constants.ts`, GBP, Facebook, Instagram, and every citation. Fix the `.com` vs `.com.np` email first.
3. **Reviews**: target 30+ Google reviews in 90 days, then 4 to 8 a month steady. Ask at the end of the appointment with a short link. Reply to every review inside 48 hours. Velocity and recency are local ranking factors.
4. **Citations**: Google Business Profile, Bing Places, Apple Business Connect, Facebook, Instagram business, Nepal Yellow Pages, Hamro Patro business listings, Foursquare, and a Nepal Medical Council / dental association listing for Dr. Arjal.
5. **On-site location signals**: `/contact` with embedded map and landmark directions, and the sitewide `Dentist` schema `@id` reused on it.

Do not build location pages for cities the clinic does not operate in. One
clinic, one location.

---

## 6. Content quality gates

| Page type | Minimum words | Rules |
|---|---|---|
| Service or gum topic page | 900 to 1400 | Unique intro, symptoms, procedure steps, recovery, price range, FAQs, internal links. 60%+ unique text versus every sibling. |
| Silo hub | 600 to 900 | Must add value beyond a link list: when to see a specialist, how the conditions relate. |
| Doctor page | 700+ | Education, MDS institution, years practising, registration number, specialisms, memberships, photo. |
| Blog post | 1200+ | Authored, dated, reviewed-by line. |
| About, Contact | 400+ | Contact may run shorter if map and NAP carry it. |

YMYL constraints (health content gets the strictest scrutiny):

- Every clinical page names an author or medical reviewer with credentials.
- No outcome guarantees, no "painless", no unsubstantiated "best in Nepal".
- Cite sources for clinical claims where practical.
- Show registration number and qualifications prominently.

Anti-pattern to avoid: generating the five gum pages from one template with
swapped nouns. That is thin content at scale and the most common way dental
sites get flattened in a core update.

---

## 7. Build phases

### Phase 1: technical foundation (SHIPPED 2026-09-28, pending deploy)

- [x] `next.config.ts` redirects (section 2), 14 rules, all returning 308
- [x] Alias emission removed from `generateStaticParams`
- [x] `app/robots.ts`
- [x] `app/sitemap.ts`, 25 URLs from one registry
- [x] `metadataBase` plus per-page canonicals on all 14 routes
- [x] `Dentist` JSON-LD in layout, `BreadcrumbList` on every inner page
- [x] `MedicalProcedure` on treatment pages, `Physician` on the doctor page, `Article` on posts
- [x] Canonical NAP in `components/constants.ts`, email moved to the `.com.np` domain
- [x] Favicon already square (1254x1254 `app/icon.png`)
- [ ] OG image: still using the clinic exterior photo, needs a purpose-built 1200x630
- [ ] Verify Search Console, submit sitemap (needs client access)
- [ ] Claim Bing Webmaster Tools and Bing Places (needs client access)

Also done in this phase: the old `/services/gum-care-and-periodontics` entry was
removed from `data/services.ts` and its URL now 301s to `/gum-care`, so the two
gum pages no longer compete. `/services` lists exactly the six treatments in the
approved structure.

Fails if: any old URL returns 404, or an alias still returns a duplicate 200,
after deploy. Verify by crawling all 18 known URLs and asserting 301 or 200 per
the map.

### Phase 2: IA and routes (week 1 to 2)

- [ ] `app/gum-care/` route group: hub plus 5 topic pages
- [ ] `data/gum-topics.ts`, same shape as `data/services.ts`
- [ ] `/contact`
- [ ] `/about-us/dr-niyukty-arjal`
- [ ] Header and Footer rebuilt to the new tree (dropdowns for Gum Care and Services)
- [ ] Internal linking: each page links to its hub plus two siblings

Fails if: a new page ships under 900 words, or shares more than 40% of its text
with a sibling.

### Phase 3: money pages (week 2 to 3)

- [ ] `/treatment-prices` with real dated ranges
- [ ] `/patient-results`, consented cases only
- [ ] `/about-us/clinic`

Fails if: prices ship as "contact us" placeholders, which defeats the page.

### Phase 4: local and content engine (week 3 onward)

- [ ] GBP optimised, review flow running
- [ ] Citations submitted
- [ ] `/blog` index plus first 4 posts
- [ ] 2 posts a month thereafter

---

## 8. Measurement

Set up before Phase 1 ships so there is a pre-migration baseline:

- Search Console, domain property. Submit the sitemap.
- Bing Webmaster Tools (feeds Copilot citations). Import from Search Console.
- GA4 with `/appointment` submit and `tel:` click as conversions.
- SEO drift baseline before the restructure: `/seo drift baseline https://www.gumsandgiggles.com.np`

Leading indicators, checkable without rerunning a full audit:

| Indicator | Source | Healthy by week 6 |
|---|---|---|
| Indexed pages | GSC Pages report | 20+ indexed, zero "Duplicate without canonical" |
| Redirect errors | GSC Pages report | zero "Page with redirect" among canonical URLs |
| Gum query impressions | GSC, query contains "gum" | rising week over week |
| Map pack calls | GBP Insights | rising month over month |
| Review count | GBP | +30 within 90 days |
| LCP / INP | CrUX, once traffic qualifies | LCP under 2.5s, INP under 200ms |

Kill criterion: if gum silo impressions are flat eight weeks after Phase 2 ships
while indexation is clean, the constraint is content depth or authority, not
architecture. Escalate to a content audit, not another restructure.

---

## 9. Blocked on the client

1. Real price ranges per treatment (blocks `/treatment-prices`)
2. Dr. Arjal's credentials: MDS institution, year, NMC registration number, memberships (blocks the doctor page and all E-E-A-T work)
3. Team names and roles, if any beyond the doctor
4. Consented before and after cases (blocks `/patient-results`)
5. A working clinic email on the `.com.np` domain
6. Google Business Profile access, or authorisation to claim it
7. Social profile URLs for `sameAs`
8. Clinic photos: exterior, signage, reception, operatory, sterilisation area
