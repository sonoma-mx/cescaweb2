"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const WHATSAPP_UNIFICADO = "526634064398";
const CTA_HERO =
  "https://wa.me/526634064398?text=Hola%2C+quiero+informaci%C3%B3n+sobre+la+preparatoria+en+CESCA";
const CTA_PREPA_6 =
  "https://wa.me/526634064398?text=Hola%2C+me+interesa+la+prepa+de+6+meses+en+CESCA.+%C2%BFMe+dan+informaci%C3%B3n%3F";
const CTA_PREPA_2 =
  "https://wa.me/526634064398?text=Hola%2C+me+interesa+la+prepa+de+2+a%C3%B1os+en+CESCA.+%C2%BFMe+dan+informaci%C3%B3n%3F";
const CTA_GENERAL =
  "https://wa.me/526634064398?text=Hola%2C+quiero+informaci%C3%B3n+sobre+CESCA+Universidad";

const faqItems = [
  {
    q: "¿Cuánto tiempo dura la preparatoria en CESCA?",
    a: "CESCA ofrece dos modalidades: prepa acelerada en 6 meses y prepa semiescolarizada en 2 años. Ambas con clases solo los fines de semana.",
  },
  {
    q: "¿La prepa de CESCA tiene validez oficial?",
    a: "Sí. El certificado de CESCA tiene validez oficial de la SEP y es reconocido en todo México para continuar estudios universitarios o trámites laborales.",
  },
  {
    q: "¿Puedo estudiar la prepa en CESCA si trabajo?",
    a: "Sí, exactamente para eso está diseñada. Las clases son únicamente los sábados y domingos, por lo que puedes trabajar de lunes a viernes sin interrupciones.",
  },
  {
    q: "¿Dónde están los planteles de CESCA en Tijuana?",
    a: "CESCA tiene planteles en Mariano, Centro, Villa Fontana, Otay, Las Brisas (PLB), Plaza Sendero, Paseo Dos Mil y Florido.",
  },
  {
    q: "¿Cuánto cuesta la prepa en CESCA?",
    a: "La colegiatura es accesible y existen becas disponibles. Escríbenos por WhatsApp para conocer los costos actuales y las opciones de pago.",
  },
  {
    q: "¿Qué requisitos necesito para entrar a CESCA?",
    a: "Necesitas secundaria concluida y una identificación oficial. No hay examen de admisión. El proceso de inscripción es sencillo y lo guiamos paso a paso.",
  },
  {
    q: "¿CESCA tiene licenciaturas además de preparatoria?",
    a: "Sí. CESCA ofrece licenciaturas en Derecho, Ciencias de la Educación, Administración, Mercadotecnia, Ingeniería Industrial, Logística de Comercio Exterior e Idioma Inglés en modalidad semiescolarizada.",
  },
  {
    q: "¿Cuándo son las próximas fechas de inicio en CESCA?",
    a: "CESCA tiene múltiples fechas de inicio durante el año. Contáctanos por WhatsApp para conocer el próximo inicio disponible en el plantel más cercano a ti.",
  },
];

const planteles = [
  {
    name: "CESCA Mariano",
    address: "Zona Mariano, Tijuana, B.C., C.P. 22000",
    programs: "Prepa 6 meses, Prepa 2 años, Licenciaturas",
    maps: "https://maps.google.com/?q=CESCA+Mariano+Tijuana",
    whatsapp:
      "https://wa.me/526649064134?text=Hola%2C+quiero+informaci%C3%B3n+del+plantel+CESCA+Mariano",
  },
  {
    name: "CESCA Centro",
    address: "Calle Tercera, frente a la DAX, Tijuana Centro",
    programs: "Prepa 6 meses, Prepa 2 años, Licenciaturas",
    maps: "https://maps.google.com/?q=Calle+Tercera+frente+a+la+DAX+Tijuana+Centro",
    whatsapp: "",
  },
  {
    name: "CESCA Villa Fontana",
    address: "Zona Villa Fontana, Tijuana, B.C.",
    programs: "Derecho, Ciencias de la Educación",
    maps: "https://maps.google.com/?q=CESCA+Villa+Fontana+Tijuana",
    whatsapp:
      "https://wa.me/526646306746?text=Hola%2C+quiero+informaci%C3%B3n+del+plantel+CESCA+Villa+Fontana",
  },
  {
    name: "CESCA Otay",
    address: "Zona Industrial Otay, Tijuana, B.C.",
    programs: "Licenciatura en Idioma Inglés",
    maps: "https://maps.google.com/?q=CESCA+Otay+Tijuana",
    whatsapp:
      "https://wa.me/526646144698?text=Hola%2C+quiero+informaci%C3%B3n+del+plantel+CESCA+Otay",
  },
  {
    name: "CESCA PLB (Las Brisas)",
    address: "Plaza Las Brisas, Tijuana, B.C.",
    programs: "Ingeniería en Logística y Aduanas",
    maps: "https://maps.google.com/?q=CESCA+Las+Brisas+PLB+Tijuana",
    whatsapp: "",
  },
  {
    name: "CESCA Plaza Sendero",
    address: "Zona Sendero, Tijuana, B.C.",
    programs: "Prepa semiescolarizada y licenciaturas",
    maps: "https://maps.google.com/?q=CESCA+Plaza+Sendero+Tijuana",
    whatsapp: "",
  },
  {
    name: "CESCA Paseo Dos Mil",
    address: "Paseo 2000, Tijuana, B.C.",
    programs: "Prepa semiescolarizada y licenciaturas",
    maps: "https://maps.google.com/?q=CESCA+Paseo+2000+Tijuana",
    whatsapp: "",
  },
  {
    name: "CESCA Florido",
    address: "Zona Florido, Tijuana, B.C.",
    programs: "Prepa semiescolarizada y licenciaturas",
    maps: "https://maps.google.com/?q=CESCA+Florido+Tijuana",
    whatsapp: "",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "CESCA Universidad",
  alternateName: "Soy CESCA",
  description:
    "Preparatoria y Universidad en Tijuana. Prepa en 6 meses o 2 años, solo fines de semana. Certificado oficial SEP.",
  url: "https://soycesca.com",
  logo: "https://soycesca.com/logo.png",
  image: "https://soycesca.com/og-image.jpg",
  telephone: "+52-664-306-4398",
  email: "informes@soycesca.com",
  foundingDate: "1994",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Tercera, frente a la DAX",
    addressLocality: "Tijuana",
    addressRegion: "Baja California",
    postalCode: "22000",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.5149",
    longitude: "-117.0382",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
  },
  sameAs: ["https://www.facebook.com/soycesca", "https://www.instagram.com/soycesca"],
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://soycesca.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Preparatoria en Tijuana",
      item: "https://soycesca.com/preparatoria-tijuana",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Programas",
      item: "https://soycesca.com/prepa-6-meses",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Planteles",
      item: "https://soycesca.com/planteles",
    },
  ],
};

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <main id="inicio" className="relative">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-md focus:bg-white focus:px-4 focus:py-2"
      >
        Saltar al contenido principal
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <header className="sticky top-0 z-50 border-b border-cesca-lightgray bg-white/95 shadow-navbar backdrop-blur">
        <div className="container-pad flex min-h-[78px] items-center justify-between gap-4">
          <Link href="#inicio" className="rounded-lg bg-white p-2" aria-label="Ir al inicio Soy CESCA">
            <Image
              src="/logo-soy-cesca.png"
              alt="Logo SOY CESCA Universidad en Tijuana"
              width={230}
              height={80}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 text-[15px] font-semibold text-cesca-primary md:flex">
            <a href="#programas">Prepa</a>
            <a href="#licenciaturas">Licenciaturas</a>
            <a href="#planteles">Planteles</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href={CTA_HERO}
            className="hidden min-h-11 items-center rounded-full bg-cesca-cta px-6 py-3 text-sm font-bold text-white md:inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscribete por WhatsApp
          </a>

          <button
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-cesca-lightgray text-cesca-primary md:hidden"
            onClick={() => setMobileMenu((prev) => !prev)}
            aria-expanded={mobileMenu}
            aria-label="Abrir menu de navegacion"
          >
            ☰
          </button>
        </div>
      </header>

      {mobileMenu && (
        <div className="fixed inset-0 z-40 bg-cesca-dark/95 p-6 md:hidden">
          <div className="mb-10 mt-20 flex flex-col gap-5 text-lg font-semibold text-white">
            <a href="#programas" onClick={() => setMobileMenu(false)}>
              Prepa
            </a>
            <a href="#licenciaturas" onClick={() => setMobileMenu(false)}>
              Licenciaturas
            </a>
            <a href="#planteles" onClick={() => setMobileMenu(false)}>
              Planteles
            </a>
            <a href="#contacto" onClick={() => setMobileMenu(false)}>
              Contacto
            </a>
          </div>
          <a
            href={CTA_HERO}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-cesca-cta px-5 py-3 font-bold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscribete por WhatsApp
          </a>
        </div>
      )}

      <section
        id="contenido-principal"
        className="relative isolate min-h-[calc(100vh-78px)] overflow-hidden bg-gradient-to-br from-cesca-dark via-cesca-primary to-cesca-mid"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,160,225,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-cesca-dark/45" />
        <div className="container-pad relative z-10 grid min-h-[calc(100vh-78px)] items-center gap-10 py-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="accent-label mb-5 text-cesca-cta">Preparatoria en Tijuana · 30 años de experiencia</p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Preparatoria en Tijuana | CESCA Universidad
            </h1>
            <p className="mt-4 text-2xl font-bold text-white">Termina tu prepa en Tijuana sin pausar tu vida.</p>
            <p className="mt-5 max-w-2xl text-lg text-cesca-light md:text-xl">
              En CESCA puedes cursar la preparatoria semiescolarizada Tijuana en modalidad de prepa en 6 meses
              Tijuana o prepa en 2 años Tijuana, estudiando solo fines de semana y con certificado oficial SEP.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CTA_HERO}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-cta px-6 py-3 text-base font-bold text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscribete por WhatsApp
              </a>
              <a
                href="#programas"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white px-6 py-3 text-base font-semibold text-white"
              >
                Ver programas
              </a>
            </div>
            <p className="mt-7 text-sm text-white/90">
              ✓ Certificado SEP oficial · ✓ 8 planteles en Tijuana · ✓ 30+ años de experiencia · ✓ Solo fines de
              semana
            </p>
          </div>
          <aside className="hidden rounded-2xl border border-white/20 bg-cesca-dark/55 p-7 text-white md:col-span-2 md:block">
            <ul className="space-y-5">
              <li>
                <p className="text-4xl font-black text-cesca-yellow">30+</p>
                <p>Años formando profesionistas en Tijuana.</p>
              </li>
              <li>
                <p className="text-4xl font-black text-cesca-yellow">8</p>
                <p>Planteles en zonas clave de la ciudad.</p>
              </li>
              <li>
                <p className="text-4xl font-black text-cesca-yellow">6</p>
                <p>Meses para terminar la prepa acelerada.</p>
              </li>
              <li>
                <p className="text-4xl font-black text-cesca-yellow">2</p>
                <p>Años en modalidad modular semiescolarizada.</p>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-cesca-dark py-5">
        <div className="container-pad grid gap-4 text-center text-sm font-semibold text-white sm:grid-cols-4 sm:gap-2">
          <p>30 Años en Tijuana</p>
          <p className="sm:border-l sm:border-r sm:border-cesca-cta">Miles de egresados</p>
          <p>8 Planteles</p>
          <p className="sm:border-l sm:border-cesca-cta">Cert. Oficial SEP</p>
        </div>
      </section>

      <section id="programas" className="section-space bg-white">
        <div className="container-pad">
          <h2 className="text-3xl font-black text-cesca-dark md:text-4xl">
            Prepa en 6 meses o 2 años — Solo fines de semana
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-cesca-lightgray">
              <div className="h-2 rounded-t-2xl bg-cesca-cta" />
              <div className="p-8">
                <p className="mb-4 inline-block rounded-full bg-cesca-cta/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cesca-cta">
                  Mas rapida
                </p>
                <h3 className="text-2xl font-black text-cesca-dark">Prepa acelerada: certificado SEP en 6 meses</h3>
                <p className="mt-4 text-cesca-textgray">
                  La opcion ideal para prepa para adultos Tijuana o para quien busca una escuela preparatoria Tijuana
                  Baja California con avance rapido, validez oficial y clases solo en sabado y domingo.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-cesca-dark">
                  <li>✓ Duracion: 6 meses</li>
                  <li>✓ Horario: sabados y domingos</li>
                  <li>✓ Certificado oficial SEP</li>
                  <li>✓ Sin examen de admision</li>
                  <li>✓ Beca disponible</li>
                </ul>
                <a
                  href={CTA_PREPA_6}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-cta px-5 py-3 text-sm font-bold text-white"
                >
                  Inscribirme en la prepa de 6 meses
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-cesca-lightgray">
              <div className="h-2 rounded-t-2xl bg-cesca-primary" />
              <div className="p-8">
                <p className="mb-4 inline-block rounded-full bg-cesca-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cesca-primary">
                  Mas flexible
                </p>
                <h3 className="text-2xl font-black text-cesca-dark">
                  Prepa semiescolarizada: termina en 2 años sin dejar de trabajar
                </h3>
                <p className="mt-4 text-cesca-textgray">
                  Plan estructurado para prepa sin dejar de trabajar Tijuana, con seguimiento docente, fechas reales
                  de graduacion y modalidad de preparatoria fines de semana Tijuana.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-cesca-dark">
                  <li>✓ Duracion: 2 años</li>
                  <li>✓ Horario: sabados y domingos</li>
                  <li>✓ Plan de estudios estructurado</li>
                  <li>✓ Certificado oficial SEP</li>
                  <li>✓ Beca disponible</li>
                </ul>
                <a
                  href={CTA_PREPA_2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-primary px-5 py-3 text-sm font-bold text-white"
                >
                  Inscribirme en la prepa de 2 años
                </a>
              </div>
            </article>
          </div>
          <div className="mt-8 rounded-2xl bg-cesca-dark p-6 text-center">
            <p className="text-lg font-semibold text-white">
              ¿No puedes fines de semana? Tambien hay horario de lunes a jueves.
            </p>
            <a
              href={CTA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-cta px-6 py-3 font-bold text-white"
            >
              Preguntar por horarios
            </a>
          </div>
        </div>
      </section>

      <section className="section-space bg-cesca-offwhite">
        <div className="container-pad">
          <h2 className="text-3xl font-black text-cesca-dark md:text-4xl">¿Como funciona? — Tres pasos para inscribirte</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["1", "Escribenos por WhatsApp", "Contactanos en segundos. Te respondemos en minutos con toda la informacion."],
              ["2", "Elige tu plantel y horario", "Tenemos 8 planteles en Tijuana para preparatoria en Tijuana y universidad sabados Tijuana."],
              ["3", "Empieza a estudiar", "Sin examen de admision. El proceso es sencillo y te acompañamos en cada paso."],
            ].map((step) => (
              <article key={step[0]} className="rounded-2xl border border-cesca-lightgray bg-white p-6">
                <p className="text-4xl font-black text-cesca-cta">{step[0]}</p>
                <h3 className="mt-3 text-xl font-black text-cesca-dark">{step[1]}</h3>
                <p className="mt-2 text-cesca-textgray">{step[2]}</p>
              </article>
            ))}
          </div>
          <a
            href={CTA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-cta px-6 py-3 font-bold text-white"
          >
            Empezar ahora por WhatsApp
          </a>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-pad">
          <h2 className="text-3xl font-black text-cesca-dark md:text-4xl">
            ¿Por qué elegir CESCA para tu preparatoria?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["30 años de experiencia en Tijuana", "Somos una escuela en Tijuana con trayectoria comprobada formando profesionistas para Baja California."],
              ["Horarios diseñados para quien trabaja", "Ideal para preparatoria para adultos Tijuana y para quienes buscan prepa fin de semana sin dejar su empleo."],
              ["Certificado con validez oficial SEP", "La preparatoria con certificado SEP Tijuana que te permite continuar estudios universitarios o crecer laboralmente."],
              ["8 planteles en toda Tijuana", "CESCA Centro Tijuana, Villa Fontana, Otay, PLB, Sendero, Paseo Dos Mil, Florido y Mariano."],
            ].map((item) => (
              <article key={item[0]} className="rounded-2xl border border-cesca-lightgray bg-cesca-offwhite p-6">
                <h3 className="text-xl font-black text-cesca-dark">{item[0]}</h3>
                <p className="mt-3 text-cesca-textgray">{item[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planteles" className="section-space bg-cesca-offwhite">
        <div className="container-pad">
          <h2 className="text-3xl font-black text-cesca-dark md:text-4xl">5 planteles en toda Tijuana</h2>
          <p className="mt-3 text-cesca-textgray">
            Cobertura ampliada con 8 sedes activas para preparatoria y licenciatura fines de semana Tijuana.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {planteles.map((campus) => (
              <article key={campus.name} className="rounded-2xl border border-cesca-lightgray bg-white p-6">
                <h3 className="text-xl font-black text-cesca-dark">{campus.name}</h3>
                <p className="mt-2 text-sm text-cesca-textgray">{campus.address}</p>
                <p className="mt-3 text-sm text-cesca-dark">{campus.programs}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={campus.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-cesca-primary px-4 py-2 text-sm font-semibold text-cesca-primary"
                  >
                    Como llegar
                  </a>
                  {campus.whatsapp ? (
                    <a
                      href={campus.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-cta px-4 py-2 text-sm font-bold text-white"
                    >
                      Inscribirme aqui
                    </a>
                  ) : (
                    <a
                      href={CTA_GENERAL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-dark px-4 py-2 text-sm font-bold text-white"
                    >
                      Contacto general (WhatsApp directo pendiente)
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-cesca-lightgray bg-white">
            <iframe
              title="Mapa de planteles CESCA en Tijuana"
              src="https://www.google.com/maps?q=CESCA+Universidad+Tijuana&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-pad">
          <h2 className="text-3xl font-black text-cesca-dark md:text-4xl">Lo que dicen nuestros alumnos</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "María G. · CESCA Centro",
                "Pense que era tarde para terminar mi prepa en Tijuana. En CESCA lo logre y ahora sigo con licenciatura.",
                "Prepa 6 meses",
              ],
              [
                "Kevin R. · CESCA Otay",
                "Trabajo toda la semana, por eso la prepa en fin de semana fue perfecta para mi ritmo y metas.",
                "Prepa 2 años",
              ],
              [
                "Diana L. · CESCA Mariano",
                "El proceso fue claro desde WhatsApp y me acompanaron hasta mi inscripcion. Recomiendo Soy CESCA.",
                "Preparatoria semiescolarizada",
              ],
            ].map((testimony) => (
              <article key={testimony[0]} className="rounded-2xl border border-cesca-lightgray bg-cesca-offwhite p-6">
                <p className="font-semibold text-cesca-dark">{testimony[0]}</p>
                <p className="mt-1 text-sm text-amber-600">★★★★★</p>
                <p className="mt-4 text-cesca-textgray">{testimony[1]}</p>
                <p className="mt-3 text-sm font-semibold text-cesca-primary">{testimony[2]}</p>
              </article>
            ))}
          </div>
          <a
            href="https://www.google.com/search?q=cesca+universidad+tijuana+rese%C3%B1as"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-cesca-primary px-6 py-3 font-semibold text-cesca-primary"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </section>

      <section id="licenciaturas" className="section-space bg-cesca-offwhite">
        <div className="container-pad">
          <h2 className="text-3xl font-black text-cesca-dark md:text-4xl">
            Licenciaturas y carreras en CESCA Universidad
          </h2>
          <p className="mt-3 text-cesca-textgray">
            Al terminar tu prepa en Tijuana puedes continuar en CESCA Universidad con carreras semiescolarizadas.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Licenciatura en Derecho",
              "Ciencias de la Educación",
              "Administración de Empresas",
              "Administración y Negocios Internacionales",
              "Medios de Comunicación y Mercadotecnia",
              "Ingeniería en Desarrollo Organizacional",
              "Licenciatura en Idioma Inglés",
              "Ingeniería Industrial y de Sistemas",
              "Ingeniería en Logística de Comercio Exterior y Aduanas",
            ].map((career) => (
              <article key={career} className="rounded-2xl border border-cesca-lightgray bg-white p-6">
                <h3 className="text-lg font-black text-cesca-dark">{career}</h3>
                <p className="mt-3 text-sm text-cesca-textgray">
                  Programa semiescolarizado con enfoque laboral para universidad sabados Tijuana.
                </p>
                <a
                  href={CTA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-primary px-4 py-2 text-sm font-bold text-white"
                >
                  Saber mas
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-pad max-w-4xl">
          <h2 className="text-3xl font-black text-cesca-dark md:text-4xl">
            Preguntas frecuentes sobre la prepa en CESCA
          </h2>
          <div className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="rounded-xl border border-cesca-lightgray bg-cesca-offwhite p-4">
                <summary className="cursor-pointer text-base font-bold text-cesca-dark">{item.q}</summary>
                <p className="mt-3 text-sm leading-6 text-cesca-textgray">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section-space bg-cesca-dark">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            ¿Listo para terminar tu preparatoria en Tijuana?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cesca-light">
            El siguiente inicio esta cerca. Escribenos hoy para recibir informacion de prepa en Tijuana y escuela en
            Tijuana con atencion inmediata.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CTA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-cesca-cta px-6 py-3 font-bold text-white"
            >
              Escribir por WhatsApp ahora
            </a>
            <a
              href="tel:+526643064398"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white"
            >
              Llamar al plantel mas cercano
            </a>
          </div>
          <p className="mt-5 text-sm text-white/90">
            Sin examen de admision · Certificado SEP oficial · Beca disponible · Respuesta inmediata
          </p>
        </div>
      </section>

      <footer className="bg-[#050b19] py-14 text-white">
        <div className="container-pad grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-block rounded-lg bg-white p-2">
              <Image src="/logo-soy-cesca.png" alt="Logo Soy CESCA en contenedor claro" width={210} height={70} />
            </div>
            <p className="mt-4 text-sm text-white/80">
              Preparatoria y Universidad en Tijuana. 30+ años formando profesionistas en Baja California, México.
            </p>
            <p className="mt-3 text-sm text-white/80">Facebook · Instagram · TikTok</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Programas</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Prepa 6 meses</li>
              <li>Prepa 2 años</li>
              <li>Licenciatura en Derecho</li>
              <li>Ciencias de la Educación</li>
              <li>Ingeniería Logística</li>
              <li>Idioma Inglés</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Planteles</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>CESCA Centro — Calle Tercera Tijuana Centro</li>
              <li>CESCA Villa Fontana</li>
              <li>CESCA Otay</li>
              <li>CESCA PLB</li>
              <li>CESCA Mariano</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>WhatsApp: +52 663 406 4398</li>
              <li>Email: informes@soycesca.com</li>
              <li>Horario Lunes–Viernes: 9am–6pm</li>
              <li>Sábados y Domingos: 8am–4pm</li>
              <li>escuela preparatoria Tijuana Baja California</li>
            </ul>
          </div>
        </div>
        <div className="container-pad mt-10 border-t border-white/20 pt-5 text-sm text-white/70">
          © {currentYear} CESCA Universidad · Tijuana, Baja California, México · Preparatoria y Universidad con
          validez SEP
        </div>
      </footer>

      <a
        href={`https://wa.me/${WHATSAPP_UNIFICADO}?text=Hola%2C+quiero+informaci%C3%B3n+sobre+la+preparatoria+en+CESCA`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        title="¡Escribenos por WhatsApp!"
        className="fixed bottom-6 right-6 z-[9999] inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-cesca-whatsapp text-white shadow-lg animate-pulseSoft"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.55 0 .24 5.32.24 11.86c0 2.1.55 4.14 1.6 5.94L0 24l6.37-1.67a11.8 11.8 0 0 0 5.7 1.45h.01c6.54 0 11.85-5.32 11.85-11.86 0-3.17-1.24-6.15-3.41-8.44Zm-8.44 18.3h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.78.99 1.01-3.68-.24-.38a9.88 9.88 0 0 1-1.52-5.25c0-5.45 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.46-4.44 9.9-9.89 9.9Zm5.44-7.42c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.08-.8.38-.27.3-1.03 1-1.03 2.44 0 1.43 1.05 2.82 1.2 3.02.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </main>
  );
}
