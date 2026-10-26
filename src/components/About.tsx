import Image from "next/image";
import { site } from "@/content/site";
import { pillarIcons } from "./Icons";
import styles from "./About.module.css";

export function About() {
  const { about } = site;

  return (
    <section id="quem-somos" className={`section ${styles.about}`} aria-labelledby="quem-somos-titulo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <Image
            src="/images/logo-gn-640.webp"
            alt="Monograma GN gravado em relevo"
            width={640}
            height={640}
            className={styles.logo}
          />
          <div>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 id="quem-somos-titulo" className="section-title">
              {about.title}
            </h2>
            <div className={styles.text}>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <ul className={styles.pillars}>
          {about.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon];
            return (
              <li key={pillar.title} className={styles.pillar}>
                <Icon className={styles.icon} />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </li>
            );
          })}
        </ul>

        <p className={styles.signature}>{site.signature}</p>
      </div>
    </section>
  );
}
