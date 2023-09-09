const CONFIG = {
  // 블로그 셋팅 (필수)
  blog: {
    title: "HI Flutter",
    description: "어서오세요!",
  },

  // 프로필 셋팅 (필수)
  profile: {
    name: "HI Flutter",
    image: "/avatar.svg", // 이 사이트로 아바타 생성할 수 있음 => https://notion-avatar.vercel.app
    role: "Flutter, Autocad Macro Developer",
    bio: "어서오세요!",
    email: "hiflutters@gmail.com",
    linkedin: "",
    github: "",
    instagram: "",
  },


  // Service
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/g9191hc/morethan-log",
    },
  ],


  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
