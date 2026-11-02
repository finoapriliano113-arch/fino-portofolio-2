import profileImg from "@/assets/img/profile.jpg";
import aboutImg from "@/assets/img/about.svg";
import designImg from "@/assets/img/discipline-design.svg";
import motionImg from "@/assets/img/discipline-motion.svg";
import videoImg from "@/assets/img/discipline-video.svg";
import workFilm from "@/assets/img/work-film.svg";
import workPosters from "@/assets/img/work-posters.svg";
import workMotion from "@/assets/img/work-motion.svg";
import workEvent from "@/assets/img/work-event.svg";

/* ------------------------------------------------------------------ */
/*  Centralized content — edit everything about the site from here.    */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const PROFILE = {
  name: "Fino Apriliano",
  logo: "fino.",
  title: "Visual Creative | Graphic Designer | Video Editor | Motion Graphics Enthusiast",
  signature: "Designed with intention. Created with curiosity.",
  photo: profileImg,
  photoAlt: "Portrait of Fino Apriliano — Visual Creative",
};

export const HERO = {
  label: "Independent Visual Creative",
  line1: "Turning ideas",
  line2Prefix: "into",
  line2Accent: "visual stories.",
  description:
    "Graphic Design, Motion Graphics, and Video Editing — crafted with detail, driven by creativity.",
  primaryCta: { label: "Explore My Works", href: "#works" },
  secondaryCta: { label: "About Me", href: "#about" },
  signature: PROFILE.signature,
  meta: ["Graphic Design", "Motion Graphics", "Video Editing"],
};

export const ABOUT = {
  label: "01 / About Me",
  headingA: "Creativity lives in the",
  headingAccent: "details.",
  intro:
    "Saya Fino Apriliano, seorang visual creative yang memiliki ketertarikan pada desain grafis, motion graphics, dan video editing. Bagi saya, sebuah karya bukan hanya tentang tampilan yang menarik, tetapi juga tentang bagaimana ide dapat disampaikan melalui visual yang tepat. Saya selalu berusaha memperhatikan detail, mengeksplorasi estetika, dan mengikuti perkembangan tren untuk menghasilkan karya yang kreatif dan layak ditampilkan kepada publik.",
  statement:
    "Saya adalah visual creative yang berfokus pada desain grafis, motion graphics, dan video editing. Dengan mengutamakan detail, estetika, dan relevansi tren, saya mengubah ide menjadi karya visual yang kreatif, inovatif, dan layak ditampilkan kepada publik.",
  photo: profileImg,
  photoAlt: "Formal portrait of Fino Apriliano on red studio background, wearing white shirt",
  workspaceImage: aboutImg,
  workspaceAlt: "Dimly lit creative workspace with a computer on a wooden desk",
  facts: [
    { label: "Name", value: "Fino Apriliano" },
    { label: "Field", value: "Desain Komunikasi Visual" },
    {
      label: "Education",
      value: "Visual Communication Design (DKV) · Latest: Junior High School (SMP)",
    },
    {
      label: "Creative Focus",
      value: "Graphic Design, Motion Graphics, Video Editing",
    },
    { label: "Tools", value: "Canva, Alight Motion, CapCut" },
  ],
  experience: [
    "Creating short films",
    "Designing posters for events",
    "Working on event documentation",
    "Creating visual content for educational purposes",
  ],
  achievement: "Created an educational short film about cleanliness",
  imageCaption: "Currently pursuing a creative path in visual communication & digital content creation.",
};

export interface Discipline {
  index: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
  imageAlt: string;
}

export const DISCIPLINES: Discipline[] = [
  {
    index: "01",
    title: "Graphic Design",
    description:
      "Mengolah ide menjadi komunikasi visual melalui komposisi, tipografi, warna, dan tata letak yang memiliki karakter.",
    skills: ["Poster Design", "Visual Composition", "Typography", "Layout Design", "Creative Visuals"],
    image: designImg,
    imageAlt: "Poster illuminated by a spotlight in a dark room",
  },
  {
    index: "02",
    title: "Motion Graphics",
    description:
      "Menghidupkan elemen visual melalui gerakan, ritme, transisi, dan eksplorasi animasi.",
    skills: ["Motion Design", "Animation", "Kinetic Typography", "Visual Effects", "Motion Storytelling"],
    image: motionImg,
    imageAlt: "Abstract green 3D fluid shapes on a dark background",
  },
  {
    index: "03",
    title: "Video Editing",
    description:
      "Menyusun footage menjadi cerita visual yang menarik dengan memperhatikan ritme, transisi, dan penyampaian pesan.",
    skills: ["Video Editing", "Transitions", "Visual Storytelling", "Short-form Content", "Cinematic Editing"],
    image: videoImg,
    imageAlt: "Curved monitor displaying video editing software in a moody workspace",
  },
];

export type ProjectCategory =
  | "Graphic Design"
  | "Motion Graphics"
  | "Video Editing"
  | "Short Film"
  | "Event Documentation";

export const PROJECT_FILTERS = [
  "All",
  "Graphic Design",
  "Motion Graphics",
  "Video Editing",
  "Short Film",
  "Event Documentation",
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export interface Project {
  id: string;
  title: string;
  categories: ProjectCategory[];
  description: string;
  tools: string[];
  platform: string;
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
  year?: string;
  youtubeId?: string;
  featured?: boolean;
}

export const SOCIALS = [
  {
    platform: "YouTube",
    icon: "youtube" as const,
    purpose: "Long-form videos and video projects.",
    url: "https://youtube.com/@finnooaprll?si=NCEyL6O8y1KCTiLX",
  },
  {
    platform: "Instagram",
    icon: "instagram" as const,
    purpose: "Graphic design and creative visual content.",
    url: "https://www.instagram.com/dearpinn__?igsi=NGkader",
  },
  {
    platform: "TikTok",
    icon: "tiktok" as const,
    purpose: "Short-form videos.",
    url: "https://vm.tiktok.com/ZS9B3dve1TVrK-RnVPH/",
  },
  {
    platform: "Behance",
    icon: "behance" as const,
    purpose: "Professional design portfolio.",
    url: "https://www.behance.net/09_finolucy",
  },
];

const socialUrl = (platform: string) =>
  SOCIALS.find((s) => s.platform === platform)?.url ?? "#";

export const YOUTUBE_FEATURED = {
  id: "pjsOTVMFkI0",
  url: "https://youtu.be/pjsOTVMFkI0?si=GdumPkShwwEe4G8S",
  watchUrl: "https://www.youtube.com/watch?v=pjsOTVMFkI0",
  embedUrl: "https://www.youtube.com/embed/pjsOTVMFkI0?autoplay=1&rel=0&modestbranding=1&playsinline=1",
  thumbnail: "https://i.ytimg.com/vi/pjsOTVMFkI0/hqdefault.jpg",
  thumbnailMax: "https://i.ytimg.com/vi/pjsOTVMFkI0/maxresdefault.jpg",
  title: "My Video Portofolio",
  author: "finnapple @finnooaprll",
};

export const PROJECTS: Project[] = [
  {
    id: "my-video-portofolio-featured",
    title: YOUTUBE_FEATURED.title,
    categories: ["Video Editing", "Short Film"],
    description:
      "Karya portofolio video terbaru — eksplorasi visual storytelling, ritme sinematik, dan transisi yang dirangkai dengan detail. Sebuah rangkuman perjalanan kreatif dalam format video.",
    tools: ["CapCut", "Alight Motion"],
    platform: "YouTube",
    link: YOUTUBE_FEATURED.url,
    linkLabel: "Watch on YouTube",
    image: new URL("../assets/img/featured-video.svg", import.meta.url).href,
    imageAlt: "Thumbnail video portofolio Fino Apriliano di YouTube",
    youtubeId: YOUTUBE_FEATURED.id,
    featured: true,
  },
  {
    id: "educational-cleanliness-short-film",
    title: "Educational Cleanliness Short Film",
    categories: ["Short Film", "Video Editing"],
    description:
      "Film pendek bertema edukasi kebersihan yang menggabungkan visual storytelling dan penyampaian pesan edukatif.",
    tools: ["CapCut"],
    platform: "YouTube",
    link: socialUrl("YouTube"),
    linkLabel: "Watch on YouTube",
    image: workFilm,
    imageAlt: "Dramatically lit film set with a cinematographer at work",
  },
  {
    id: "creative-poster-collection",
    title: "Creative Poster Collection",
    categories: ["Graphic Design"],
    description:
      "Kumpulan eksplorasi desain poster dengan perhatian pada komposisi, tipografi, warna, dan penyampaian pesan visual.",
    tools: ["Canva"],
    platform: "Instagram",
    link: socialUrl("Instagram"),
    linkLabel: "View on Instagram",
    image: workPosters,
    imageAlt: "A dark wall covered with a colorful collection of posters",
  },
  {
    id: "motion-graphics-experiments",
    title: "Motion Graphics Experiments",
    categories: ["Motion Graphics"],
    description:
      "Eksplorasi gerakan, transisi, dan elemen visual untuk menciptakan konten digital yang dinamis.",
    tools: ["Alight Motion"],
    platform: "TikTok",
    link: socialUrl("TikTok"),
    linkLabel: "Watch on TikTok",
    image: workMotion,
    imageAlt: "Vibrant abstract light trails against a black background",
  },
  {
    id: "event-documentation",
    title: "Event Documentation",
    categories: ["Video Editing", "Event Documentation"],
    description:
      "Dokumentasi kegiatan melalui pengambilan dan penyusunan visual untuk merekam momen serta menyampaikan suasana acara.",
    tools: ["CapCut"],
    platform: "Instagram",
    link: socialUrl("Instagram"),
    linkLabel: "View on Instagram",
    image: workEvent,
    imageAlt: "Concert crowd under vibrant green stage lights",
  },
];

export const WORKS = {
  label: "03 / Selected Works",
  headingA: "A collection of ideas",
  headingAccent: "brought to life.",
  description: "Setiap karya memiliki proses, eksplorasi, dan cerita di baliknya.",
  placeholderNote:
    "Beberapa cover menggunakan ilustrasi visual tematik sebagai pengisi sementara. Ganti dengan dokumentasi karya asli saat tersedia.",
};

export const PROCESS = {
  label: "04 / My Process",
  headingA: "From an idea to a",
  headingAccent: "finished visual.",
  steps: [
    {
      index: "01",
      title: "Discover",
      description: "Memahami ide, tujuan, pesan, dan kebutuhan visual sebuah proyek.",
    },
    {
      index: "02",
      title: "Explore",
      description: "Mencari referensi, mengeksplorasi konsep, dan menentukan arah visual yang sesuai.",
    },
    {
      index: "03",
      title: "Create",
      description:
        "Mengembangkan ide menjadi desain, motion graphics, atau video dengan memperhatikan detail.",
    },
    {
      index: "04",
      title: "Refine",
      description: "Melakukan evaluasi dan penyempurnaan agar hasil akhir siap ditampilkan kepada publik.",
    },
  ],
};

export interface Tool {
  name: string;
  icon: "pen" | "orbit" | "scissors";
  purpose: string;
  uses: string[];
}

export const TOOLS = {
  label: "05 / Tools",
  headingA: "Tools behind",
  headingAccent: "the visuals.",
  items: [
    {
      name: "Canva",
      icon: "pen" as const,
      purpose: "Graphic Design, Poster Design, Layout Design.",
      uses: ["Graphic Design", "Poster Design", "Layout Design"],
    },
    {
      name: "Alight Motion",
      icon: "orbit" as const,
      purpose: "Motion Graphics, Animation, Visual Effects.",
      uses: ["Motion Graphics", "Animation", "Visual Effects"],
    },
    {
      name: "CapCut",
      icon: "scissors" as const,
      purpose: "Video Editing, Transitions, Short-form Content.",
      uses: ["Video Editing", "Transitions", "Short-form Content"],
    },
  ] as Tool[],
};

export const SOCIALS_SECTION = {
  label: "06 / Find My Work",
  headingA: "Explore more of my",
  headingAccent: "creative world.",
};

export const VIDEO_INTRO = {
  label: "Featured Video",
  badge: "Latest Work • YouTube",
  headingA: "My Video",
  headingAccent: "Portofolio",
  description:
    "Karya video terbaru — rangkuman eksplorasi visual storytelling, editing sinematik, dan motion. Tonton langsung di sini.",
  duration: "YouTube",
  src: "",
  youtubeId: YOUTUBE_FEATURED.id,
  youtubeUrl: YOUTUBE_FEATURED.url,
  embedUrl: YOUTUBE_FEATURED.embedUrl,
  title: YOUTUBE_FEATURED.title,
  author: YOUTUBE_FEATURED.author,
  thumbnail: new URL("../assets/img/featured-video.svg", import.meta.url).href,
  thumbnailFallback: YOUTUBE_FEATURED.thumbnail,
  thumbnailAlt: "Thumbnail My Video Portofolio — Fino Apriliano di YouTube",
  ctaLabel: "Buka di YouTube",
};

export const CONTACT = {
  label: "Let's Connect",
  headingA: "Have an idea?",
  headingB: "Let's bring it to life.",
  description:
    "Terbuka untuk kolaborasi kreatif, proyek desain, video editing, motion graphics, dan kesempatan belajar bersama.",
  whatsapp: {
    label: "Contact via WhatsApp",
    number: "08985951155",
    url: "https://wa.me/628985951155",
  },
  email: {
    label: "Send an Email",
    address: "finoapriliano113@gmail.com",
    url: "mailto:finoapriliano113@gmail.com",
  },
  instagram: {
    label: "Instagram",
    handle: "@dearpinn__",
    url: "https://www.instagram.com/dearpinn__/",
  },
};

export const FOOTER = {
  description: "Visual Creative exploring design, motion, and storytelling.",
  socialHeading: "Find Me Online",
  emailUrl: CONTACT.email.url,
  emailAddress: CONTACT.email.address,
};
