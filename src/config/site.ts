// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// Change anything here without touching component files.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Identity ────────────────────────────────────────────────────────────────
  title: "Woven",
  eyebrow: "Thesis · Design & Visual Communication · 2026",
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
      "This project is a 3D character animation that highlights the cultural diversity of Pakistan through traditional clothing and music. It features four characters inspired by close friends, each representing a different ethnicity: Kashmiri, Pashtoon, Sindhi, and Punjabi. Every character is designed with culturally authentic attire and musical elements that reflect their identity and heritage.",
      "The animation begins by introducing each character individually, allowing their distinct cultures to be understood on their own. As the story progresses, the characters gradually come together in a shared space, symbolizing unity, connection, and mutual respect. This transition from individuality to togetherness forms the core message of the project.",
      "Rooted in personal experience and real friendships across different cultural backgrounds, the project reflects how diversity can exist alongside strong emotional bonds. It presents Pakistan as a country made up of varied identities that come together to form a shared sense of belonging and unity.",
    ],
  },

  // ── Characters ───────────────────────────────────────────────────────────────
  characters: [
    {
      name: "Hamza",
      region: "Kashmir",
      ethnicity: "Kashmiri",
      outfit: "Pheran - traditional Kashmiri wool robe",
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
      bio: [
        "Anushe is a design and visual communication student based in Islamabad, Pakistan. Her practice spans branding, editorial design, AR illustration, and documentary film - united by a focus on visual storytelling rooted in real human experience.",
        "She has worked with Channel 7 Communications, Tabadlab, Mobilink Microfinance Bank, and the Public Private Partnership Authority.",
      ],
      email: "anushehammad5@gmail.com",
      linkedin: "https://www.linkedin.com/in/anushe-hammad-b112722bb/",
    },
  },
} as const;
