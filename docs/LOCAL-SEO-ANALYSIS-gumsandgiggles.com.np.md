# Local SEO Analysis: Gums & Giggles Dental Clinic

Business: Gums & Giggles Dental Clinic
Website: https://www.gumsandgiggles.com.np
Google Business Profile: https://share.google/l07IYqyJHFNL7wfsZ
Maps CID: `0x39eb19f184587513:0x2906ce17aa1ffb54` &middot; Feature ID `/g/11fmgz2j_2`
Coordinates: 27.7089484, 85.3244438
Analysis date: 2026-09-28

---

## Local SEO Score: 47/100

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| GBP signals | 25% | 13/25 | Profile exists and is findable. Internals unverifiable externally. |
| Reviews and reputation | 20% | 10/20 | Rating claimed on site, no schema, no review engine running |
| Local on-page SEO | 20% | 15/20 | Strongest area: real service pages, visible NAP, map, tel links |
| NAP consistency and citations | 15% | 7/15 | Address string differs across three sources, email domain wrong |
| Local schema markup | 10% | 0/10 | No structured data of any kind on the site |
| Local links and authority | 10% | 2/10 | No press, chamber, association or "best of" placements found |

**Business type:** Brick-and-mortar, single location
**Industry vertical:** Healthcare (dental), specialist-led periodontics
**Correct schema subtype:** `Dentist` (not generic `LocalBusiness`, not `MedicalBusiness`)

---

## What was verified, and what was not

Google blocks automated reading of Business Profile internals, so this audit
separates confirmed findings from things only the profile owner can check.

**Verified externally:**

- The profile exists, resolves from the share link, and carries a Maps CID
- Five third-party citations found and read
- Phone number consistency across those citations
- Address string inconsistency across those citations
- The website's own NAP, schema, map embed and service page structure
- Bing indexation status of the website

**Not verifiable without profile access (check these in the GBP dashboard):**

- Primary and secondary categories
- Photo and video count, and upload recency
- Post activity
- Actual review count, current star rating, review recency, owner response rate
- Q&A content
- Services and products sections
- GBP Insights: calls, direction requests, website clicks
- Geo-grid ranking position across the Kathmandu valley

---

## 1. Google Business Profile

The profile is live and findable, which is the baseline. Everything past that
needs a login to confirm, so this section is a checklist to run rather than a
set of findings.

**Category setup (highest-impact single factor in the local pack):**

Primary category is the strongest individual local ranking signal, and a wrong
primary category is the single most damaging one. For this clinic:

- Primary: `Dental clinic`
- Secondary: `Periodontist`, `Dentist`, `Dental implants periodontist`, `Orthodontist`

The `Periodontist` secondary category matters more than usual here. It is the
clinic's actual differentiator, and very few Kathmandu listings will carry it,
so the competitive field for it is thin.

**Checklist to run in the dashboard:**

| Item | Target |
|---|---|
| Primary category | Dental clinic |
| Secondary categories | 4, including Periodontist |
| Photos | 20+, covering exterior, signage, reception, operatory, sterilisation, team |
| Photo recency | Something new monthly. Listings with photos get materially more direction requests |
| Business description | 750 characters, leading with periodontist and Dhobidhara Marg |
| Services section | Mirror the site structure exactly, including the five gum treatments |
| Opening hours | Sunday to Friday, 10 AM to 7 PM. Holiday hours set in advance |
| Appointment link | https://www.gumsandgiggles.com.np/appointment |
| Q&A | Seed 5 to 8 real patient questions and answer them as the owner |
| Posts | One a week. No direct ranking effect, but they surface in the profile |

One deliberate exception: do not point the GBP website link at the homepage if
the homepage is the site's strongest organic page. Pointing it at
`/appointment` is both better for conversion and avoids the suppression risk.

---

## 2. Reviews

Review signals now carry roughly 20% of local pack weight, and velocity matters
more than lifetime total. Rankings measurably soften when a listing goes about
three weeks without a new review.

**What the site claims:** a 4.5+ Google rating, displayed on the homepage with
patient testimonials.

**What is verifiable:** nothing. The rating is not marked up in schema, and the
count is not shown anywhere. On `kaha6.com` the listing shows zero reviews.

**Actions:**

1. Record today's exact review count and rating as a baseline.
2. Start asking in the chair. Target 30 Google reviews in 90 days, then 4 to 8 a month, which keeps the 18-day gap from ever opening.
3. Use a short link or QR code at reception. Handing a patient a link while they are still in the clinic converts far better than a follow-up message.
4. Reply to every review inside 48 hours, positive ones included.
5. Healthcare constraint: **never confirm in a public reply that the reviewer was a patient.** Thank them for the feedback and move the specifics to a private channel. This is standard medical privacy practice and applies even in an unhappy exchange.
6. Do not pre-screen. Asking how satisfied someone is before deciding whether to send them to Google is review gating, and it violates Google's policy outright.

---

## 3. Local on-page SEO

This is the site's strongest dimension and does not need much work.

**Working already:**

- Titles carry the city: "Dental Services in Kathmandu", "Gums & Giggles Dental Clinic Kathmandu"
- NAP visible in the header bar and the footer on every page
- Phone numbers use `tel:` links, so mobile click-to-call works
- Google Maps embed with the correct pin on the location section
- Six dedicated service pages, one per treatment, which is the top local organic factor
- Opening hours visible sitewide

**Gaps:**

| Gap | Fix |
|---|---|
| No `/contact` page live | Built locally this session, needs deploying |
| Gum silo not live | Five gum topic pages plus the `/gum-care` hub are built locally, not yet deployed. They are the pages that would rank for periodontist queries |
| Seven duplicate alias pages | `generateStaticParams` emits aliases as real pages with identical content |
| Address appears without a locality | The footer says "Dhobidhara Marg, Kathmandu 44600, Nepal" while directories place it in Kamalpokhari near Kumari Hall. Add the landmark and locality, since that is how Nepali patients and taxi drivers actually navigate |

---

## 4. NAP consistency

Phone is consistent everywhere, which is the most important one. The address is
not, and the email is wrong.

| Source | Name | Address | Phone |
|---|---|---|---|
| Website | Gums & Giggles Dental Clinic | Dhobidhara Marg, Kathmandu 44600, Nepal | +977 984-1243430 |
| Google Maps | Gums & Giggles Dental Clinic | (verify in dashboard) | (verify) |
| dentists10.com | Gums **and** Giggles Dental Clinic | Dhobidhara Marg, **Near Kumari Hall, Kamalpokhari**, Kathmandu | +9779841243430 |
| kaha6.com | Gums & Giggles Dental Clinic | Dhobidhara, Kathmandu | listed |
| Facebook | facebook.com/gumsandgigglesdentalclinic | (verify) | (verify) |
| Instagram | @gumsandgigglesdentalclinic_ | n/a | n/a |

**Two issues to fix:**

1. **Address string.** Three different versions are in circulation. Pick one canonical string, ideally the one that matches the GBP entry exactly, including the landmark: `Dhobidhara Marg, Near Kumari Hall, Kamalpokhari, Kathmandu 44600, Nepal`. Then push it to every listing.

2. **Email domain.** The site publishes `mail@gumsandgiggles.com` while the site itself is `gumsandgiggles.com.np`. A contact address on a domain the business does not appear to own reads as a trust problem to both patients and verification systems. Create `info@gumsandgiggles.com.np` and replace it in `components/constants.ts`.

Also worth standardising: "Gums & Giggles" versus "Gums and Giggles". Ampersand
is the form on the GBP, so make everything match it.

---

## 5. Citations

Five found. That is a thin profile for a clinic in a capital city.

**Live now:** Google Business Profile, Facebook, Instagram, dentists10.com,
kaha6.com, nepal.worldplaces.me

**Missing, in priority order:**

| Platform | Why it matters |
|---|---|
| **Bing Places** | Feeds ChatGPT, Copilot and Alexa. See the AI section below |
| **Apple Business Connect** | Apple Maps is the default on every iPhone, and the listing is free |
| Nepal Yellow Pages | The largest general Nepali business directory |
| Hamro Patro business listings | Very high local mobile usage in Nepal |
| Foursquare | Feeds a long tail of apps and data aggregators |
| Nepal Dental Association / NMC directory | Professional verification, the strongest trust citation available to a clinic |
| Justdial Nepal, Merolagani, Nepal Business Directory | Secondary volume |

Rule for all of them: the NAP string must be identical, character for
character, to the canonical version chosen above.

---

## 6. Local schema markup

**Status: none.** No JSON-LD of any kind on any page.

Schema is not a direct ranking factor, but it is how AI systems and rich
results read a business. For a clinic it is also the cleanest way to publish
credentials. Minimum implementation, in the site layout:

```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://www.gumsandgiggles.com.np/#clinic",
  "name": "Gums & Giggles Dental Clinic",
  "url": "https://www.gumsandgiggles.com.np",
  "telephone": "+977-984-1243430",
  "email": "info@gumsandgiggles.com.np",
  "image": "https://www.gumsandgiggles.com.np/clinic_photos/clinics_building_image_from_outside.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dhobidhara Marg, Near Kumari Hall, Kamalpokhari",
    "addressLocality": "Kathmandu",
    "postalCode": "44600",
    "addressRegion": "Bagmati",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.70895,
    "longitude": 85.32444
  },
  "hasMap": "https://maps.app.goo.gl/ff5JWHjBLUdsBLij8",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "10:00",
    "closes": "19:00"
  }],
  "areaServed": ["Kathmandu","Lalitpur","Bhaktapur"],
  "medicalSpecialty": "Periodontic",
  "sameAs": [
    "https://www.facebook.com/gumsandgigglesdentalclinic/",
    "https://www.instagram.com/gumsandgigglesdentalclinic_/"
  ]
}
```

Plus a `Physician` block on the doctor page, referencing the clinic `@id`, and
`MedicalProcedure` on treatment pages.

**Do not** hand-write `aggregateRating` for the testimonials shown on the
homepage. Self-reported review markup on a business's own listing is discounted
and carries penalty risk. Let the Business Profile carry the rating.

---

## 7. AI search visibility

This is the largest untapped channel and the easiest to fix.

ChatGPT does not read Google Business Profiles. It sources local answers from
the Bing index and from third-party platforms. A search for indexed pages on
`gumsandgiggles.com.np` in Bing returned no results, which means the site is
effectively invisible to ChatGPT, Copilot and Alexa for local dental queries.
Confirm this in Bing Webmaster Tools rather than trusting a single query.

Roughly 45% of consumers now use AI assistants for local recommendations, and
those referrals convert several times better than ordinary organic traffic.
Three of the top five AI visibility factors are citation-related, which is the
same fix as section 5.

**Actions:**

1. Claim Bing Webmaster Tools, import from Search Console, submit the sitemap once it exists.
2. Claim Bing Places for Business.
3. Build out the third-party listings above, since those are what AI systems quote.
4. Run `/seo geo https://www.gumsandgiggles.com.np` for the full AI visibility pass.

---

## 8. Local authority signals

Nothing found: no press coverage, no professional association listing, no
sponsorships, no "best dentist in Kathmandu" list placements. "Best of" list
inclusion is currently the single strongest AI citation factor.

Realistic first moves for a Kathmandu clinic:

- Get listed in Nepal Dental Association and NMC practitioner directories
- Offer commentary to Nepali health media on gum health, which is an underserved topic locally
- Free dental camps at nearby schools or offices, then a page about each on the site
- Sponsor a local event and get the link, not just the banner
- Pitch the "gum specialist" angle to Nepali lifestyle and health publications, since an MDS Periodontist leading a general clinic is genuinely unusual

---

## Top 10 prioritised actions

| # | Action | Priority | Effort | Blocks |
|---|---|---|---|---|
| 1 | Set GBP primary category to Dental clinic, add Periodontist as secondary | Critical | 10 min | Nothing |
| 2 | Fix the email to `info@gumsandgiggles.com.np`, everywhere | Critical | 30 min | NAP work |
| 3 | Pick one canonical address string, push it to every listing | Critical | 1 hr | Citations |
| 4 | Add `Dentist` JSON-LD with geo, hours and sameAs | High | 1 hr | Rich results, AI parsing |
| 5 | Claim Bing Places and Bing Webmaster Tools | High | 45 min | ChatGPT visibility |
| 6 | Start the review engine: 30 reviews in 90 days, reply within 48 hours | High | Ongoing | Local pack position |
| 7 | Upload 20+ GBP photos, then one a month | High | 2 hrs | Direction requests |
| 8 | Deploy the gum silo and `/contact` page | High | 1 hr | Periodontist queries |
| 9 | Claim Apple Business Connect | Medium | 30 min | iPhone users |
| 10 | Submit to Nepal Yellow Pages, Hamro Patro, Foursquare, dental association | Medium | 2 hrs | Citation depth, AI citations |

Items 1, 2 and 3 are the ones to do this week. They cost almost nothing and
they gate everything downstream.

---

## Limitations

This analysis could not assess:

- GBP internals: categories, photo count, posts, Q&A, Insights data
- Actual review count, rating and velocity
- Geo-grid ranking position across the valley, which needs a paid tool such as DataForSEO or Local Falcon
- Domain authority and backlink profile, which needs Moz, Ahrefs or DataForSEO
- Real-time local pack position for target queries
- Competitor profiles within the Kamalpokhari and Dillibazar radius

To close those gaps: `/seo maps` with a DataForSEO key for geo-grid and
competitor radius work, `/seo google` once Search Console is verified, and
`/seo geo` for the full AI visibility pass.
