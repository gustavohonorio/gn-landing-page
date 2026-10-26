import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Product } from "@/components/Product";
import { Service } from "@/components/Service";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { instagramLink, site } from "@/content/site";

const instagram = instagramLink();

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      name: site.name,
      description: site.description,
      url: site.url,
      logo: `${site.url}/images/logo-gn-640.webp`,
      telephone: `+${site.contact.whatsapp}`,
      ...(site.contact.location ? { address: site.contact.location } : {}),
      ...(instagram ? { sameAs: [instagram] } : {}),
    },
    {
      "@type": "Product",
      name: site.product.name,
      description: site.product.description,
      image: `${site.url}/images/tonico-capilar.webp`,
      brand: { "@type": "Brand", name: site.name },
      offers: {
        "@type": "Offer",
        price: site.product.price.toFixed(2),
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Product />
        <Service />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
