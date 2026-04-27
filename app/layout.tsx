import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const title = "CESCA | Preparatoria en Tijuana | Escuela en Tijuana";
const description =
  "Preparatoria en Tijuana en CESCA Universidad: prepa en 6 meses o 2 anos, fines de semana y certificado SEP. Escribenos por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL("https://soycesca.com"),
  title,
  description,
  keywords: [
    "preparatoria en Tijuana",
    "escuela en Tijuana",
    "CESCA",
    "CESCA Universidad",
    "Soy CESCA",
    "prepa en Tijuana",
    "prepa en 6 meses Tijuana",
    "prepa semiescolarizada Tijuana",
    "preparatoria para adultos Tijuana",
    "preparatoria fines de semana Tijuana",
  ],
  alternates: {
    canonical: "https://soycesca.com/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://soycesca.com/",
    locale: "es_MX",
    images: [
      {
        url: "https://soycesca.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alumnos de preparatoria en Tijuana estudiando en CESCA Universidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://soycesca.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <meta
          name="keywords"
          content="preparatoria Tijuana, prepa Tijuana, CESCA, CESCA Universidad, Soy CESCA, prepa 6 meses, prepa semiescolarizada, escuela Tijuana, preparatoria para adultos Tijuana, prepa fines de semana Tijuana"
        />
        <meta name="google-site-verification" content="GSC_VERIFICATION_PLACEHOLDER" />
        <meta name="facebook-domain-verification" content="META_DOMAIN_VERIFICATION_PLACEHOLDER" />
        <link rel="preload" as="image" href="/logo-soy-cesca.png" />
      </head>
      <body>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,
'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1511357127443879');
fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=1511357127443879&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}
        </Script>
      </body>
    </html>
  );
}
