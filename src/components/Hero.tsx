import Image from "next/image";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./Hero.module.css";

export function Hero() {
  const { hero } = site;

  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <span className="eyebrow">{site.tagline}</span>
          <h1 className={styles.title}>
            {hero.title} <em>{hero.titleEmphasis}</em>
          </h1>
          <p className={styles.lead}>{hero.text}</p>
          <div className={styles.actions}>
            <a
              href={whatsappLink()}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Fale conosco
            </a>
            <a href="#tonico" className="button button-outline">
              Conheça
            </a>
          </div>
        </div>

        <div className={styles.media}>
          <Image
            src="/images/tonico-capilar.webp"
            alt="Frasco âmbar do Tônico Capilar GN com conta-gotas, sobre base de pedra"
            width={1200}
            height={1200}
            priority
          />
        </div>
      </div>
    </section>
  );
}
