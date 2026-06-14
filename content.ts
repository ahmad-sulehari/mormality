// =============================================================================
// WEBSITE CONTENT — Edit this file to update text on the website
// =============================================================================
// HOW TO EDIT:
//   1. Open this file in any text editor (Notepad, TextEdit, VS Code, etc.)
//   2. Find the section you want to change (e.g. "TESTIMONIALS")
//   3. Change the text between the quote marks " "
//   4. Save the file
//   5. Ask your developer to deploy the update (or it will auto-deploy if CI is set up)
//
// RULES:
//   - Only change text inside " " or ` ` quote marks
//   - Do not delete commas, brackets, or braces
//   - To add a new item (e.g. a new project), copy an existing block and paste it
// =============================================================================


// -----------------------------------------------------------------------------
// SITE META — Shown in browser tab and search engine results
// -----------------------------------------------------------------------------
export const meta = {
  title: "Mormality — Digital Agency",
  description:
    "Website development, Google Ads management, and social media management that drives real results.",
};


// -----------------------------------------------------------------------------
// HERO — The first section visitors see
// -----------------------------------------------------------------------------
export const hero = {
  badge: "Digital Agency",
  headline: "We Build",
  headlineAccent: "Brands That",
  headlineSuffix: "Convert.",
  tagline:
    "From stunning websites to high-ROI Google Ads and scroll-stopping social media — Mormality turns your digital presence into a growth engine.",
  ctaPrimary: "Start a Project",
  ctaSecondary: "See Our Work",
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "3×", label: "Avg. ROI on Ads" },
  ],
};


// -----------------------------------------------------------------------------
// MARQUEE — The scrolling ticker strip of services
// -----------------------------------------------------------------------------
export const marqueeItems = [
  "Website Development",
  "Google Ads",
  "Social Media",
  "Brand Strategy",
  "UI/UX Design",
  "SEO",
  "Content Creation",
  "Paid Media",
];


// -----------------------------------------------------------------------------
// SERVICES — The three service cards
// -----------------------------------------------------------------------------
export const services = [
  {
    iconName: "Globe" as const,
    title: "Website Development",
    tagline: "Built to impress. Designed to convert.",
    description:
      "We craft fast, modern, mobile-first websites that reflect your brand and turn visitors into customers. From landing pages to full business sites.",
    features: [
      "Custom design, no templates",
      "Mobile-first & SEO-ready",
      "Fast load times",
      "CMS integration",
    ],
    gradient: "from-[#FF2D78] to-[#E91E8C]",
  },
  {
    iconName: "BarChart2" as const,
    title: "Google Ads Management",
    tagline: "Every dollar working harder.",
    description:
      "We build and manage Google Ad campaigns that put your business in front of the right people at the right time — maximising ROI, minimising waste.",
    features: [
      "Keyword research & targeting",
      "Ad copy that drives clicks",
      "Ongoing optimisation",
      "Transparent reporting",
    ],
    gradient: "from-[#E91E8C] to-[#C2185B]",
  },
  {
    iconName: "Share2" as const,
    title: "Social Media Management",
    tagline: "Content that stops the scroll.",
    description:
      "We manage your social presence end-to-end — strategy, content creation, scheduling, and community engagement — so you can focus on running your business.",
    features: [
      "Platform strategy",
      "Content creation & design",
      "Daily scheduling",
      "Analytics & growth",
    ],
    gradient: "from-[#FF6B9D] to-[#FF2D78]",
  },
];


// -----------------------------------------------------------------------------
// WORK / PORTFOLIO — Project case study cards
// -----------------------------------------------------------------------------
export const projects = [
  {
    category: "Website Development",
    title: "Luxe Interiors Studio",
    description:
      "A premium interior design agency site with immersive gallery and lead capture.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    bg: "from-[#FF2D78]/20 to-[#0d0d0d]",
  },
  {
    category: "Google Ads",
    title: "FastFix Plumbing",
    description:
      "Local plumbing business — 3.8× ROAS within 60 days of campaign launch.",
    tags: ["Search Ads", "Local Campaigns", "Conversion Tracking"],
    bg: "from-[#E91E8C]/20 to-[#0d0d0d]",
  },
  {
    category: "Social Media",
    title: "Bloom Skincare",
    description:
      "Grew Instagram following from 800 to 12,000 in 4 months with organic content strategy.",
    tags: ["Instagram", "TikTok", "Content Strategy"],
    bg: "from-[#C2185B]/20 to-[#0d0d0d]",
  },
  {
    category: "Website Development",
    title: "Alpha Fitness Co.",
    description:
      "Membership website with booking system, trainer profiles, and class scheduling.",
    tags: ["React", "Stripe", "Calendly"],
    bg: "from-[#FF6B9D]/20 to-[#0d0d0d]",
  },
];


// -----------------------------------------------------------------------------
// ABOUT — Company description and values
// -----------------------------------------------------------------------------
export const about = {
  heading: "A small team with a",
  headingAccent: "big impact",
  paragraphs: [
    "Mormality is a digital agency built for businesses that want to grow online — fast. We combine sharp design, smart ad strategy, and consistent social content to create a digital presence that actually works.",
    "We don't do bloated retainers or vague deliverables. We're direct, transparent, and obsessed with getting you results.",
  ],
  values: [
    {
      iconName: "Zap" as const,
      title: "Speed Without Compromise",
      desc: "We move fast and deliver results — without cutting corners on quality.",
    },
    {
      iconName: "Target" as const,
      title: "Results-Driven",
      desc: "Every strategy is built around your business goals, not vanity metrics.",
    },
    {
      iconName: "Users" as const,
      title: "Real Partnership",
      desc: "We work as an extension of your team, not just another vendor.",
    },
  ],
};


// -----------------------------------------------------------------------------
// TESTIMONIALS — Client quotes
// -----------------------------------------------------------------------------
export const testimonials = [
  {
    name: "Sarah K.",
    role: "Owner, Bloom Skincare",
    quote:
      "Mormality completely transformed our Instagram. We went from barely posting to having a real content strategy — and our sales reflect it.",
    stars: 5,
  },
  {
    name: "James R.",
    role: "Director, FastFix Plumbing",
    quote:
      "Their Google Ads setup paid for itself within the first month. We're getting more calls than ever and the leads are actually qualified.",
    stars: 5,
  },
  {
    name: "Priya M.",
    role: "Founder, Luxe Interiors",
    quote:
      "The website they built us gets compliments from every client. It's fast, beautiful, and we're ranking on Google now too.",
    stars: 5,
  },
];


// -----------------------------------------------------------------------------
// CONTACT — Email, WhatsApp, and form service options
// -----------------------------------------------------------------------------
export const contact = {
  heading: "Ready to",
  headingAccent: "grow?",
  subheading:
    "Tell us about your project and we'll get back to you within 24 hours with a plan.",
  email: "hello@mormality.com",
  whatsappNumber: "60123456789", // digits only, no spaces or + sign
  whatsappLabel: "WhatsApp Us",
  serviceOptions: [
    { value: "website", label: "Website Development" },
    { value: "ads", label: "Google Ads Management" },
    { value: "social", label: "Social Media Management" },
    { value: "all", label: "All of the above" },
  ],
};
