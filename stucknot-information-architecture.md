# Stucknot — Information Architecture
### Repositioning: From "Company" to "Community"

---

## 1. The Core Shift

**Old frame:** *Stucknot is a company that builds software and trains students.*
**New frame:** *Stucknot is a community of builders. Businesses hire from it. Developers grow inside it.*

This single reframe changes the job of every page on the site:

| Old job | New job |
|---|---|
| Prove Stucknot is a credible vendor | Prove Stucknot is a credible **place to belong** |
| List services and stats | Show **who's in the room** and what happens to them |
| "Hire us" / "Apply here" | "Come see what this looks like from the inside" |

The psychological principle doing the heavy lifting is **Unity** (Cialdini's 7th principle of influence) — people are persuaded fastest not by *what* you offer but by whether they feel *"these are my people."* Businesses trust community-vetted talent more than agency-assigned talent. Students join communities they see themselves in — they don't "enroll in programs."

Multi-page (vs. single-page) is the right call for this reason: **a single page can only inform. A page sequence can persuade in stages** — each page earns the right to ask for a slightly bigger commitment than the last (the "foot-in-the-door" / commitment-consistency principle). A single scrolling page hands the visitor every ask at once; a multi-page path lets you sequence trust before conversion.

---

## 2. Full Sitemap

```
Home (/)
│
├── /community
│   ├── /community/about          — what the community is, how it works, values
│   ├── /community/members        — member spotlights / builder profiles
│   ├── /community/events         — meetups, hackathons, demo days
│   └── /community/join           — how to join, tiers, application
│
├── /work                          (For Businesses)
│   ├── /work/case-studies         — index of projects
│   │   └── /work/case-studies/[slug]   — individual deep-dive case study
│   ├── /work/services             — what you can hire Stucknot to build
│   ├── /work/process               — how projects run, mentor-reviewed delivery
│   └── /work/hire                  — "hire from the community" — talent-facing page
│
├── /programs                      (For Aspiring Members / Students)
│   ├── /programs/overview          — tracks, structure, how progression works
│   ├── /programs/curriculum        — levels, skills, what you actually build
│   ├── /programs/outcomes          — alumni destinations, placement, real numbers
│   └── /programs/apply             — application flow
│
├── /learn                         (Content Hub)
│   ├── /learn/blog                 — technical writing, index + posts
│   ├── /learn/open-source          — repos, contribution guide
│   └── /learn/resources            — guides, templates, cheat sheets
│
├── /about
│   ├── /about/story                 — origin narrative
│   ├── /about/people                — founders, mentors, core team
│   └── /about/values                — the "why" behind the community model
│
├── /contact
│   ├── /contact/start-a-project     — business intake form
│   └── /contact/general             — general inquiries, press, partnerships
│
└── /legal
    ├── /privacy-policy
    └── /terms-of-service
```

**Design rule:** every top-level section (`/community`, `/work`, `/programs`, `/learn`) is a *hub page*, not a content dump. Hub pages orient and route; they don't try to convert on their own. Conversion happens at the end of a path, never at the entry.

---

## 3. Navigation Structure

### Primary Header Nav (persistent across all pages)
```
[Stucknot Logo]     Community   Work   Programs   Learn   About        [Join the Community] [Hire Talent]
```

Two CTAs in the header, not one — but **both are secondary to the nav itself**. Neither should read as "the main action." This resists the instinct to force one funnel; let the visitor self-select the door, then commit them once inside.

### Footer Nav
```
Community          Work                 Programs           Learn              Company
- About            - Case Studies       - Overview          - Blog             - Story
- Members          - Services           - Curriculum        - Open Source      - People
- Events           - Process            - Outcomes          - Resources        - Values
- Join             - Hire Talent        - Apply                                - Contact

Legal: Privacy · Terms          © 2026 Stucknot — A community of builders.
```

---

## 4. Page-by-Page Breakdown

### `/` — Home
**Job:** Route the visitor, establish identity in 5 seconds, prove the community is real (not aspirational).
**Psychological trigger:** Unity + Social Proof (immediate, visual — real faces/handles, not stock stats)
**Key blocks:**
- Hero: identity-first headline (e.g., *"A community of builders — some of them are building your next product."*)
- Live/recent activity strip (latest shipped project, latest member milestone, latest blog post) — signals the community is *active*, not archived
- Two entry paths, presented as invitations not menu items: *"Looking to build something?"* / *"Looking to become someone who builds?"*
- Social proof band: real member count, real client logos, real testimonial (named, titled)
**Primary CTA:** none hard-sold — soft routing into `/community` or `/work`

### `/community/about`
**Job:** Make "community" concrete — how it actually works day to day.
**Psychological trigger:** Reciprocity + Liking (show what members get before asking anything)
**Key blocks:** how mentorship pairing works, how real projects get assigned to members, community rituals (weekly demos, code review culture, open critique), values statement
**Primary CTA:** "Meet the members" → `/community/members`

### `/community/members`
**Job:** Let the visitor see themselves in the community.
**Psychological trigger:** Social proof + aspirational identity
**Key blocks:** member profile grid (not "students" — "builders," with what they shipped, their trajectory), filter by track/skill, individual spotlight stories
**Primary CTA:** "Start your path" → `/programs/overview`

### `/community/events`
**Job:** Prove ongoing activity and lower the barrier to a first, low-commitment touchpoint.
**Psychological trigger:** Commitment escalation — attending an event is a much smaller ask than applying
**Key blocks:** upcoming events calendar, past event recaps/photos, "come to one before you apply" framing
**Primary CTA:** RSVP

### `/community/join`
**Job:** Convert. This is the terminal page for the student/builder journey.
**Psychological trigger:** Scarcity (cohort sizes, application windows) + Commitment
**Key blocks:** tiers/levels explained, what's expected of members, application form
**Primary CTA:** Apply

### `/work/case-studies` (+ individual pages)
**Job:** Replace vague stats with deep, checkable proof.
**Psychological trigger:** Authority — specificity is what reads as credible, not big round numbers
**Key blocks per case study:** client context, problem, the actual builders/mentors on it (link back to `/community/members` — this is the connective tissue), outcome metrics, client quote (named + titled)
**Primary CTA:** "Start a similar project" → `/contact/start-a-project`

### `/work/hire`
**Job:** Reframe hiring Stucknot as hiring *into* the community, not renting a vendor.
**Psychological trigger:** Unity again — "you're not hiring a faceless team, you're hiring people the community already vetted"
**Key blocks:** how community-vetted delivery works, mentor-oversight explained, links to relevant member profiles
**Primary CTA:** → `/contact/start-a-project`

### `/programs/overview` → `/curriculum` → `/outcomes` → `/apply`
**Job:** This four-page sequence is deliberately a funnel, not a single info page. Each step earns more detail and asks for a bit more attention before the final ask.
**Psychological trigger:** Progressive commitment — by the time someone reaches `/apply` they've already invested three page-visits of attention
**Key blocks:** overview (what it feels like) → curriculum (what you'll actually do) → outcomes (named alumni, real placement data, real numbers — this replaces "98% retention") → apply (form)

### `/learn/blog`, `/learn/open-source`
**Job:** Long-game trust and SEO; proves competence ambiently rather than by claim.
**Psychological trigger:** Authority (earned, not asserted)

### `/about/story`
**Job:** Carry the origin narrative — this is where the "one team, two things" story lives now, rewritten through a community lens (started as mentorship, real work followed naturally, never split the two).

### `/contact/start-a-project`
**Job:** Single-purpose business conversion page. No distractions, no student-facing content.
**Key blocks:** short qualifying form, expected timeline/response time, what happens after submission

---

## 5. Two End-to-End Journeys

### Journey A — Business Buyer
```
Home → /work (hub) → /work/case-studies/[relevant one] → /work/hire
   → /contact/start-a-project
```
Trust sequence: proof (case study) → mechanism (how hiring works) → low-friction ask (contact).

### Journey B — Aspiring Member
```
Home → /community/about → /community/members → /community/events (optional touch)
   → /programs/overview → /programs/curriculum → /programs/outcomes → /programs/apply
```
Trust sequence: belonging (about, members) → proof of activity (events) → commitment ladder (programs, 4 steps) → application.

**Cross-linking rule:** every case study links to the members who built it; every member profile links to the case study they shipped. This is what makes "community" feel structurally true rather than just stated — the two halves of the site physically point at each other.

---

## 6. What This Fixes From the Current Site

- Stats become checkable (named case studies, named members) instead of asserted numbers.
- Two audiences get dedicated paths instead of competing on one scroll.
- CTAs are sequenced by page instead of four competing asks on one screen.
- "Community" is proven through cross-linked, real content — not a tagline.
- Each page has exactly one job and one primary CTA, which is what makes a controlled psychological sequence possible in the first place.
