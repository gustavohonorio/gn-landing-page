import Image from "next/image";
import { formatPrice, site, whatsappLink } from "@/content/site";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import styles from "./Product.module.css";

export function Product() {
  const { product } = site;

  return (
    <section id="tonico" className="section" aria-labelledby="tonico-titulo">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.media}>
            <Image
              src="/images/tonico-capilar.webp"
              alt={`${product.name}, frasco de ${product.volume} com conta-gotas`}
              width={1200}
              height={1200}
            />
          </div>

          <div className={styles.content}>
            <span className="eyebrow">Produto</span>
            <h2 id="tonico-titulo" className="section-title">
              {product.name}
            </h2>
            <p className={styles.subtitle}>{product.subtitle}</p>
            <p className={styles.description}>{product.description}</p>

            <ul className={styles.benefits}>
              {product.benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className={styles.howTo}>
              <h3>Modo de uso</h3>
              <p>{product.howToUse}</p>
            </div>

            <div className={styles.buy}>
              <p className={styles.price}>
                <span className={styles.priceLabel}>Frasco {product.volume}</span>
                <span className={styles.priceValue}>{formatPrice(product.price)}</span>
              </p>
              <a
                href={whatsappLink(site.messages.product)}
                className={`button ${styles.button}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Quero o tônico
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
