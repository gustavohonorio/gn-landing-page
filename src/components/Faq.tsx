import { site } from "@/content/site";
import { PlusIcon } from "./Icons";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section id="duvidas" className={`section ${styles.faq}`} aria-labelledby="duvidas-titulo">
      <div className={`container ${styles.inner}`}>
        <div>
          <span className="eyebrow">Dúvidas</span>
          <h2 id="duvidas-titulo" className="section-title">
            Perguntas frequentes
          </h2>
        </div>

        <div className={styles.list}>
          {site.faq.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary>
                {item.q}
                <PlusIcon className={styles.icon} />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
