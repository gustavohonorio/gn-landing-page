import Image from "next/image";
import { formatPrice, site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./Service.module.css";

export function Service() {
  const { service, combined } = site;

  return (
    <section
      id="microagulhamento"
      className={`section ${styles.service}`}
      aria-labelledby="microagulhamento-titulo"
    >
      <div className="container">
        <div className={styles.top}>
          <div>
            <span className="eyebrow">Serviço</span>
            <h2 id="microagulhamento-titulo" className="section-title">
              {service.name}
            </h2>
            <p className={styles.subtitle}>{service.subtitle}</p>
            <div className={styles.description}>
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Image
            src="/images/microagulhamento.webp"
            alt="Rolo de microagulhamento capilar"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>

        <ol className={styles.steps}>
          {service.steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.pricing}>
          <h3 className={styles.pricingTitle}>Valores</h3>
          <ul className={styles.prices}>
            {service.prices.map((item) => (
              <li
                key={item.label}
                className={"highlight" in item && item.highlight ? styles.highlight : undefined}
              >
                <span>{item.label}</span>
                <strong>{formatPrice(item.price)}</strong>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(site.messages.service)}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Agendar sessão
          </a>
        </div>

        <aside className={styles.combined} aria-labelledby="combinado-titulo">
          <h3 id="combinado-titulo">{combined.title}</h3>
          <p>{combined.text}</p>
        </aside>
      </div>
    </section>
  );
}
