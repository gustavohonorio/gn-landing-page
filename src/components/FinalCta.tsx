import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  const { contactSection } = site;

  return (
    <section id="contato" className={`section ${styles.cta}`} aria-labelledby="contato-titulo">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>{contactSection.eyebrow}</p>
        <h2 id="contato-titulo" className="section-title">
          {contactSection.title}
        </h2>
        <p className={styles.question}>{contactSection.question}</p>
        <p className={styles.text}>{contactSection.text}</p>
        <a
          href={whatsappLink()}
          className={`button ${styles.button}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
