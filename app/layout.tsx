import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import { Cairo } from 'next/font/google'
import dynamic from 'next/dynamic';

const siteUrl = process.env.NEXT_PUBLIC_APP_SITE!;

// Dynamically import the components
const SocialIcons = dynamic(() => import("@/components/layouts/SocialIcons"));
const ThemeProv = dynamic(() => import("@/context/ThemeProv"));

const cairo = Cairo({ weight: ["600", "700", "800"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص`,
  description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية في جميع مناطق الكويت.",
  robots: "index,follow",
  keywords: "صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار",
  openGraph: {
    type: "article",
    authors: ["صباغ الكويت", `${siteUrl}`],
    locale: "ar_AR",
    url: `${siteUrl}`,
    title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص`,
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية.",
    images: [
      {
        url: `${siteUrl}/صباغ-الكويت.webp`,
        width: 1200,
        height: 630,
        alt: "صباغ الكويت",
      },
      {
        url: `${siteUrl}/logo.webp`,
        width: 1200,
        height: 630,
        alt: "صباغ الكويت",
      },
    ],
    siteName: "صباغ الكويت",
    section: "خدمات صباغة",
    publishedTime: "2024-10-1T12:00:00Z", // Publication date of the article
    modifiedTime: "2024-10-10T14:00:00Z", // Last modified time (optional)
    alternateLocale: "ar"
  },
  twitter: {
    card: "summary_large_image",
    title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص`,
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية في جميع مناطق الكويت.",
    images: `${siteUrl}/صباغ-الكويت.webp`,
  },
  manifest: "/manifest.json",
  authors: {
    name: "صباغ الكويت",
    url: `${siteUrl}`,
  },
  bookmarks: ["صباغ الكويت", "صباغ شاطر", "صباغ رخيص", "الكويت"],
  alternates: {
    canonical: `${siteUrl}`, // Canonical URL for SEO purposes
    languages: {
      "ar": `${siteUrl}`, // If you have an Arabic language version
    },
  },
  applicationName: "صباغ الكويت",
  creator: "mamdouh mohammed",
  category: "خدمات صباغة",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"ar"} dir={"rtl"}>
      <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="f/dwVs440mjOEffzvSuM4A" async></script>
        <meta name="google-site-verification" content="Lu0G3lQr4L0zyx6SMtomb38CxSEVBjS_mLvLzP9MLB4" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="ar" />
        {/* <GoogleAnalytics gaId="G-YYCCSJQ60Q" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebPage",
                    "@id": `${siteUrl}/`,
                    "url": `${siteUrl}/`,
                    "name": `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص`,
                    "isPartOf": { "@id": `${siteUrl}#website` },
                    "primaryImageOfPage": { "@id": `${siteUrl}/#primaryimage` },
                    "image": { "@id": `${siteUrl}/#primaryimage` },
                    "thumbnailUrl": `${siteUrl}/logo.webp`,
                    "datePublished": "2020-12-29T13:47:49+00:00", "dateModified": "2024-10-01T07:59:36+00:00",
                    "description": "صباغ الكويت , هل تريد رقم صباغ شاطر ورخيص بالكويت ؟ نوفر لك افضل تصميمات وديكورات منزليه احترافيه فني تركيب ورق جدران ممتاز اتصل الان",
                    "breadcrumb": { "@id": `${siteUrl}/#breadcrumb` },
                    "inLanguage": "ar",
                    "potentialAction": [{ "@type": "ReadAction", "target": [`${siteUrl}/`] }]
                  },
                  {
                    "@type": "ImageObject",
                    "inLanguage": "ar",
                    "@id": `${siteUrl}/#primaryimage`,
                    "url": `${siteUrl}/logo.webp`,
                    "contentUrl": `${siteUrl}/logo.webp`,
                    "width": 600,
                    "height": 450,
                    "caption": "صباغ الكويت"
                  },
                  {
                    "@type": "BreadcrumbList",
                    "@id": `${siteUrl}/#breadcrumb`,
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "الرئيسية",
                        "item": `${siteUrl}/`
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "اصباغ",
                        "item": `${siteUrl}/aspagh`
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "صباغ رخيص",
                        "item": `${siteUrl}/sabaagh-rakhis`
                      },
                      {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "صباغ شاطر",
                        "item": `${siteUrl}/sabaagh-shatir`
                      },
                      {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "معلم صباغ",
                        "item": `${siteUrl}/muealim-sabagh`
                      },
                      {
                        "@type": "ListItem",
                        "position": 6,
                        "name": "صباغ الكويت",
                        "item": `${siteUrl}/sabaagh-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 7,
                        "name": "اصباغ الكويت",
                        "item": `${siteUrl}/aisbgh-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 8,
                        "name": "صباغ شاطر بالكويت",
                        "item": `${siteUrl}/sabaagh-shatir-bi-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 9,
                        "name": "معلم صباغ في الكويت",
                        "item": `${siteUrl}/muealim-sabaagh-bi-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 10,
                        "name": "فني صباغ الكويت",
                        "item": `${siteUrl}/faniy-sabagh`
                      },
                      {
                        "@type": "ListItem",
                        "position": 11,
                        "name": "صباغ ممتاز بالكويت",
                        "item": `${siteUrl}/sabaagh-mumtaz-bi-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 12,
                        "name": "صباغ ديكورات بالكويت",
                        "item": `${siteUrl}/dikurat-sabagh-lilkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 13,
                        "name": "صباغ منازل بالكويت",
                        "item": `${siteUrl}/manazil-sabaagh-bi-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 14,
                        "name": "صباغ شقق بالكويت",
                        "item": `${siteUrl}/shaqaq-sabaagh-bi-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 15,
                        "name": "صباغ غرف اطفال",
                        "item": `${siteUrl}/sabaagh-buyut-aitfal`
                      },
                      {
                        "@type": "ListItem",
                        "position": 16,
                        "name": "صباغ رسومات اطفال",
                        "item": `${siteUrl}/sabaagh-rusumat-aitfal`
                      },
                      {
                        "@type": "ListItem",
                        "position": 17,
                        "name": "صباغ رخيص بالكويت",
                        "item": `${siteUrl}/sabaagh-rakhisat-bi-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 18,
                        "name": "دهانات الكويت",
                        "item": `${siteUrl}/dihanat-alkuayt`
                      },
                      {
                        "@type": "ListItem",
                        "position": 19,
                        "name": "تركيب ورق جدران",
                        "item": `${siteUrl}/tarkib-waraq-judran`
                      },
                      {
                        "@type": "ListItem",
                        "position": 20,
                        "name": "اصباغ ابواب خشب",
                        "item": `${siteUrl}/asbagh-abwab-khashabia`
                      },
                      {
                        "@type": "ListItem",
                        "position": 21,
                        "name": "معلم جبس بورد",
                        "item": `${siteUrl}/muealim-jabs-burd`
                      },
                      {
                        "@type": "ListItem",
                        "position": 22,
                        "name": "صباغ السالمية",
                        "item": `${siteUrl}/sabaagh-alsaalimia`
                      },
                      {
                        "@type": "ListItem",
                        "position": 23,
                        "name": "صباغ صباح السالم",
                        "item": `${siteUrl}/sabaagh-sabah-alsaalim`
                      },
                      {
                        "@type": "ListItem",
                        "position": 24,
                        "name": "صباغ حولي",
                        "item": `${siteUrl}/sabaagh-hawalli`
                      },
                      {
                        "@type": "ListItem",
                        "position": 25,
                        "name": "صباغ جابر الاحمد",
                        "item": `${siteUrl}/sabaagh-jaber-alahmad`
                      },
                      {
                        "@type": "ListItem",
                        "position": 26,
                        "name": "صباغ خيطان",
                        "item": `${siteUrl}/sabaagh-khaitan`
                      },
                      {
                        "@type": "ListItem",
                        "position": 27,
                        "name": "صباغ الفروانية",
                        "item": `${siteUrl}/sabaagh-alfarwaniyah`
                      },
                      {
                        "@type": "ListItem",
                        "position": 28,
                        "name": "صباغ الجابرية",
                        "item": `${siteUrl}/sabaagh-aljabriya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 29,
                        "name": "صباغ الشعب",
                        "item": `${siteUrl}/sabaagh-alshaab`
                      },
                      {
                        "@type": "ListItem",
                        "position": 30,
                        "name": "صباغ بيان",
                        "item": `${siteUrl}/sabaagh-bayan`
                      },
                      {
                        "@type": "ListItem",
                        "position": 31,
                        "name": "صباغ جنوب السرة",
                        "item": `${siteUrl}/sabaagh-janoub-alsura`
                      },
                      {
                        "@type": "ListItem",
                        "position": 32,
                        "name": "صباغ مبارك",
                        "item": `${siteUrl}/sabaagh-mubarak`
                      },
                      {
                        "@type": "ListItem",
                        "position": 33,
                        "name": "صباغ مشرف",
                        "item": `${siteUrl}/sabaagh-mishref`
                      },
                      {
                        "@type": "ListItem",
                        "position": 34,
                        "name": "صباغ الزهراء",
                        "item": `${siteUrl}/sabaagh-alzahraa`
                      },
                      {
                        "@type": "ListItem",
                        "position": 35,
                        "name": "صباغ الصديق",
                        "item": `${siteUrl}/sabaagh-alsiddiq`
                      },
                      {
                        "@type": "ListItem",
                        "position": 36,
                        "name": "صباغ حطين",
                        "item": `${siteUrl}/sabaagh-hateen`
                      },
                      {
                        "@type": "ListItem",
                        "position": 37,
                        "name": "صباغ سلوي",
                        "item": `${siteUrl}/sabaagh-salwa`
                      },
                      {
                        "@type": "ListItem",
                        "position": 38,
                        "name": "صباغ الشهداء",
                        "item": `${siteUrl}/sabaagh-alshuhadaa`
                      },
                      {
                        "@type": "ListItem",
                        "position": 39,
                        "name": "صباغ السلام",
                        "item": `${siteUrl}/sabaagh-al-salam`
                      },
                      {
                        "@type": "ListItem",
                        "position": 40,
                        "name": "صباغ المسلية",
                        "item": `${siteUrl}/sabaagh-al-masila`
                      },
                      {
                        "@type": "ListItem",
                        "position": 41,
                        "name": "صباغ المسايل",
                        "item": `${siteUrl}/sabaagh-almasayel`
                      },
                      {
                        "@type": "ListItem",
                        "position": 42,
                        "name": "صباغ ابو الحصاني",
                        "item": `${siteUrl}/sabaagh-abu-alhasania`
                      },
                      {
                        "@type": "ListItem",
                        "position": 43,
                        "name": "صباغ صبحان",
                        "item": `${siteUrl}/sabaagh-subhan`
                      },
                      {
                        "@type": "ListItem",
                        "position": 44,
                        "name": "صباغ ابو فطيرة",
                        "item": `${siteUrl}/sabaagh-abu-ftaira`
                      },
                      {
                        "@type": "ListItem",
                        "position": 45,
                        "name": "صباغ الفينطيس",
                        "item": `${siteUrl}/sabaagh-al-fintas`
                      },
                      {
                        "@type": "ListItem",
                        "position": 46,
                        "name": "صباغ مبارك الكبير",
                        "item": `${siteUrl}/sabaagh-mubarak-al-kabeer`
                      },
                      {
                        "@type": "ListItem",
                        "position": 47,
                        "name": "صباغ العقيلة",
                        "item": `${siteUrl}/sabaagh-alaqeela`
                      },
                      {
                        "@type": "ListItem",
                        "position": 48,
                        "name": "صباغ الفنطاس",
                        "item": `${siteUrl}/sabaagh-alfntas`
                      },
                      {
                        "@type": "ListItem",
                        "position": 49,
                        "name": "صباغ الرقة",
                        "item": `${siteUrl}/sabaagh-alraqa`
                      },
                      {
                        "@type": "ListItem",
                        "position": 50,
                        "name": "صباغ ابو حليفة",
                        "item": `${siteUrl}/sabaagh-abu-halifa`
                      },
                      {
                        "@type": "ListItem",
                        "position": 51,
                        "name": "صباغ الصباحية",
                        "item": `${siteUrl}/sabaagh-alsabahiya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 52,
                        "name": "صباغ المنقف",
                        "item": `${siteUrl}/sabaagh-almanqaf`
                      },
                      {
                        "@type": "ListItem",
                        "position": 53,
                        "name": "صباغ المهبولة",
                        "item": `${siteUrl}/sabaagh-almahboula`
                      },
                      {
                        "@type": "ListItem",
                        "position": 54,
                        "name": "صباغ الاحمدي",
                        "item": `${siteUrl}/sabaagh-al-ahmadi`
                      },
                      {
                        "@type": "ListItem",
                        "position": 55,
                        "name": "صباغ الخيران",
                        "item": `${siteUrl}/sabaagh-al-khiran`
                      },
                      {
                        "@type": "ListItem",
                        "position": 56,
                        "name": "صباغ الفحيحيل",
                        "item": `${siteUrl}/sabaagh-alfhahil`
                      },
                      {
                        "@type": "ListItem",
                        "position": 57,
                        "name": "صباغ الوفرة",
                        "item": `${siteUrl}/sabaagh-alwafra`
                      },
                      {
                        "@type": "ListItem",
                        "position": 58,
                        "name": "صباغ جابر العلي",
                        "item": `${siteUrl}/sabaagh-jaber-alali`
                      },
                      {
                        "@type": "ListItem",
                        "position": 59,
                        "name": "صباغ فهد الاحمد",
                        "item": `${siteUrl}/sabaagh-fahad-alahmad`
                      },
                      {
                        "@type": "ListItem",
                        "position": 60,
                        "name": "صباغ الدعية",
                        "item": `${siteUrl}/sabaagh-aldaiya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 61,
                        "name": "صباغ الدسمة",
                        "item": `${siteUrl}/sabaagh-aldasma`
                      },
                      {
                        "@type": "ListItem",
                        "position": 62,
                        "name": "صباغ الدوحة",
                        "item": `${siteUrl}/sabaagh-aldohah`
                      },
                      {
                        "@type": "ListItem",
                        "position": 63,
                        "name": "صباغ الخالدية",
                        "item": `${siteUrl}/sabaagh-alkhaldiya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 64,
                        "name": "صباغ الروضة",
                        "item": `${siteUrl}/sabaagh-alrawdah`
                      },
                      {
                        "@type": "ListItem",
                        "position": 65,
                        "name": "صباغ الري",
                        "item": `${siteUrl}/sabaagh-alrai`
                      },
                      {
                        "@type": "ListItem",
                        "position": 66,
                        "name": "صباغ الشويخ",
                        "item": `${siteUrl}/sabaagh-alshuwaykh`
                      },
                      {
                        "@type": "ListItem",
                        "position": 67,
                        "name": "صباغ الشرق",
                        "item": `${siteUrl}/sabaagh-asharq`
                      },
                      {
                        "@type": "ListItem",
                        "position": 68,
                        "name": "صباغ الشامية",
                        "item": `${siteUrl}/sabaagh-alshamiya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 69,
                        "name": "صباغ السرة",
                        "item": `${siteUrl}/sabaagh-alsurra`
                      },
                      {
                        "@type": "ListItem",
                        "position": 70,
                        "name": "صباغ القادسية",
                        "item": `${siteUrl}/sabaagh-alqadesiya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 71,
                        "name": "صباغ القروان",
                        "item": `${siteUrl}/sabaagh-alqurawan`
                      },
                      {
                        "@type": "ListItem",
                        "position": 72,
                        "name": "صباغ الفيحاء",
                        "item": `${siteUrl}/sabaagh-alfaihaa`
                      },
                      {
                        "@type": "ListItem",
                        "position": 73,
                        "name": "صباغ العديلية",
                        "item": `${siteUrl}/sabaagh-aladiliya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 74,
                        "name": "صباغ الصليبخات",
                        "item": `${siteUrl}/sabaagh-alsulaybikhat`
                      },
                      {
                        "@type": "ListItem",
                        "position": 75,
                        "name": "صباغ كيفان",
                        "item": `${siteUrl}/sabaagh-kaifan`
                      },
                      {
                        "@type": "ListItem",
                        "position": 76,
                        "name": "صباغ قرطبة",
                        "item": `${siteUrl}/sabaagh-qurtoba`
                      },
                      {
                        "@type": "ListItem",
                        "position": 77,
                        "name": "صباغ غرناطة",
                        "item": `${siteUrl}/sabaagh-ghranata`
                      },
                      {
                        "@type": "ListItem",
                        "position": 78,
                        "name": "صباغ ضاحية عبدالله السالم",
                        "item": `${siteUrl}/sabaagh-abdullah-al-salim`
                      },
                      {
                        "@type": "ListItem",
                        "position": 79,
                        "name": "صباغ دسمان",
                        "item": `${siteUrl}/sabaagh-dasman`
                      },
                      {
                        "@type": "ListItem",
                        "position": 80,
                        "name": "صباغ بنيد القار",
                        "item": `${siteUrl}/sabaagh-bneid-alqar`
                      },
                      {
                        "@type": "ListItem",
                        "position": 81,
                        "name": "صباغ النهضة",
                        "item": `${siteUrl}/sabaagh-alnahda`
                      },
                      {
                        "@type": "ListItem",
                        "position": 82,
                        "name": "صباغ النزهة",
                        "item": `${siteUrl}/sabaagh-alnuzha`
                      },
                      {
                        "@type": "ListItem",
                        "position": 83,
                        "name": "صباغ المنصورية",
                        "item": `${siteUrl}/sabaagh-almansouriya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 84,
                        "name": "صباغ المنطقة العاشرة",
                        "item": `${siteUrl}/sabaagh-mantiqa-al-ashira`
                      },
                      {
                        "@type": "ListItem",
                        "position": 85,
                        "name": "صباغ الاندلس",
                        "item": `${siteUrl}/sabaagh-alandalus`
                      },
                      {
                        "@type": "ListItem",
                        "position": 86,
                        "name": "صباغ القرين",
                        "item": `${siteUrl}/sabaagh-alqrean`
                      },
                      {
                        "@type": "ListItem",
                        "position": 87,
                        "name": "صباغ القصور",
                        "item": `${siteUrl}/sabaagh-alkswor`
                      },
                      {
                        "@type": "ListItem",
                        "position": 88,
                        "name": "صباغ العدان",
                        "item": `${siteUrl}/sabaagh-aladaan`
                      },
                      {
                        "@type": "ListItem",
                        "position": 88,
                        "name": "صباع سعد العبدالله",
                        "item": `${siteUrl}/sabaagh-saad-alabdullah`
                      },
                      {
                        "@type": "ListItem",
                        "position": 89,
                        "name": "صباغ الجهراء",
                        "item": `${siteUrl}/sabaagh-aljahraa`
                      },
                      {
                        "@type": "ListItem",
                        "position": 90,
                        "name": "صباغ عبدالله مبارك",
                        "item": `${siteUrl}/sabaagh-abdullah-mubarak`
                      },
                      {
                        "@type": "ListItem",
                        "position": 91,
                        "name": "صباغ غرب عبدالله",
                        "item": `${siteUrl}/sabaagh-gharb-abdullah`
                      },
                      {
                        "@type": "ListItem",
                        "position": 92,
                        "name": "صباغ جنوب عبدالله",
                        "item": `${siteUrl}/sabaagh-janoub-abdullah`
                      },
                      {
                        "@type": "ListItem",
                        "position": 93,
                        "name": "صباغ العارضية",
                        "item": `${siteUrl}/sabaagh-alaardiya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 94,
                        "name": "صباغ الفردوس",
                        "item": `${siteUrl}/sabaagh-alfardus`
                      },
                      {
                        "@type": "ListItem",
                        "position": 95,
                        "name": "صباغ صباح الناصر",
                        "item": `${siteUrl}/sabaagh-subah-alanasir`
                      },
                      {
                        "@type": "ListItem",
                        "position": 96,
                        "name": "صباغ الرميثية",
                        "item": `${siteUrl}/sabaagh-alrumaithiya`
                      },
                      {
                        "@type": "ListItem",
                        "position": 63,
                        "name": "صباغ اليرموك",
                        "item": `${siteUrl}/sabaagh-alyarmouk`
                      },
                    ]
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${siteUrl}/#website`,
                    "url": `${siteUrl}/`,
                    "name": "صباغ الكويت",
                    "description": `صباغ الكويت ${process.env.NEXT_PUBLIC_PHONE} تركيب ورق جدران اصباغ الكوت صباغ شاطر ورخيص`,
                    "potentialAction": [
                      {
                        "@type": "SearchAction",
                        "target": {
                          "@type": "EntryPoint",
                          "urlTemplate": `${siteUrl}/{search_term_string}`
                        },
                        "query-input": "required name=search_term_string"
                      }
                    ]
                    , "inLanguage": "ar"
                  }
                ]
                // "@type": "WebPage",
                // "@id": "",
                // "name": "صباغ الكويت",
                // "description": "صباغ الكويت ,افضل صباغ في الكويت لجميع لجميع انواع الاصباغ زيتي- مطفي- صبغ بدون رائحة مع افضل الاسعار ",
                // "url": `${siteUrl}`,
                // "address": {
                //   "@type": "PostalAddress",
                //   "streetAddress": "الكويت",
                //   "addressLocality": "مدينة الكويت",
                //   "addressRegion": "الكويت",
                //   "postalCode": "00000",
                //   "addressCountry": "kuwait"
                // },

                // "geo": {
                //   "@type": "GeoCoordinates",
                //   "latitude": 29.3759,
                //   "longitude": 47.9774
                // },

                // "sameAs": [
                //   "https://www.instagram.com/sameh6051/"
                // ],
                // "image": `${siteUrl}/image.png`,
                // "telephone": `${process.env.NEXT_PUBLIC_PHONE}`
              },
            )
          }}
        />


      </head>
      <body
        className={cairo.className}
        style={{
          "--primary-color": process.env.APP_COLOR,
          "--secondary-color": process.env.APP_COLOR_SECONDARY,
        } as React.CSSProperties}
      >
        <ThemeProv>
          <SocialIcons />
          {children}
        </ThemeProv>
      </body>
    </html>
  );
}
