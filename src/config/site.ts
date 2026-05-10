// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION — change content here without touching components
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Identity ────────────────────────────────────────────────────────────────
  title: "Woven",
  // Set to "" to hide the eyebrow line in the hero
  eyebrow: "BDes Thesis · Visual Communication · 2026",
  subtitle:
    "A 3D character animation exploring cultural identity, heritage, and unity across Pakistan's four regions",

  // ── Film ────────────────────────────────────────────────────────────────────
  film: {
    src: "/images/animation.mp4",
    poster: "/images/ensemble.jpeg",
  },

  // ── Thesis download ─────────────────────────────────────────────────────────
  // TODO: Replace with actual PDF path once uploaded to /public/
  thesis: {
    downloadPath: "/thesis.pdf",
    label: "Download Thesis",
  },

  // ── Concept section ─────────────────────────────────────────────────────────
  concept: {
    pullQuote: ["Four friends. Four cultures.", "One story."],
    body: [
      "This 3D character animation explores cultural diversity in Pakistan through traditional clothing and music. It brings together four characters inspired by close friends, each representing a different ethnicity: Kashmiri, Pashtoon, Sindhi, and Punjabi. Every character is carefully designed with culturally rooted outfits and musical elements that reflect their identity and heritage.",
      "The concept unfolds by first introducing each character individually, allowing their unique cultural backgrounds to stand out and be understood on their own. As the animation progresses, these distinct identities gradually come together in a shared space, symbolising unity, connection, and harmony within diversity.",
      "Rooted in personal experience and real friendships across different cultures, this project reflects how differences can coexist with strong human bonds. It presents a visual narrative of Pakistan as a diverse yet united nation, where individuality contributes to a larger sense of togetherness.",
    ],
  },

  // ── Characters ───────────────────────────────────────────────────────────────
  characters: [
    {
      name: "Hamza",
      region: "Kashmir",
      ethnicity: "Kashmiri",
      outfit: "Pheran · traditional Kashmiri wool robe",
      instrument: "Santoor",
      image: "/images/hamza.png",
    },
    {
      name: "Vaina",
      region: "Pashtoon",
      ethnicity: "Pashtoon",
      outfit: "Pathani Frock · Partug · Parhuney",
      instrument: "Rabab",
      image: "/images/vaina.png",
    },
    {
      name: "Aimen",
      region: "Sindh",
      ethnicity: "Sindhi",
      outfit: "Cholo · Ghaghri · Ajrak patterns",
      instrument: "Bansuri",
      image: "/images/aimen.png",
    },
    {
      name: "Omar",
      region: "Punjab",
      ethnicity: "Punjabi",
      outfit: "Shalwar Kameez · Pagri",
      instrument: "Dhol",
      image: "/images/omar.png",
    },
  ],

  // ── About ────────────────────────────────────────────────────────────────────
  about: {
    project: {
      heading: "A thesis on identity through visual storytelling",
      paragraphs: [
        "Created as a final thesis for the Bachelor of Design in Visual Communication at The Millennial Universal College / University for Creative Arts, Islamabad (2023-2026).",
        "The research grounds itself in Stuart Hall's Cultural Representation Theory and the concept of Unity in Diversity - arguing that animation, when built on authentic cultural research, can communicate identity with more precision and empathy than words alone.",
      ],
    },
    creator: {
      name: "Anushe Hammad",
      degree: "Bachelor of Design in Visual Communication",
      institution: "University for Creative Arts, Islamabad",
      bio: "Anushe is a design and visual communication student based in Islamabad, Pakistan. Her practice spans branding, editorial design, AR illustration, and documentary film - united by a focus on visual storytelling rooted in real human experience.",
      experience: [
        "Channel 7 Communications",
        "Tabadlab",
        "Mobilink Microfinance Bank",
        "Public Private Partnership Authority",
      ],
      email: "anushehammad5@gmail.com",
      linkedin: "https://www.linkedin.com/in/anushe-hammad-b112722bb/",
    },
  },
} as const;
