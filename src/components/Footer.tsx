import { instagramLink, site, whatsappLink } from "@/content/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import styles from "./Footer.module.css";

export function Footer() {
  const instagram = instagramLink();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.wordmark}>{site.name}</p>
          <p className={styles.tagline}>{site.tagline}</p>
          {site.contact.location && <p className={styles.location}>{site.contact.location}</p>}
        </div>

        <ul className={styles.links}>
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              WhatsApp
            </a>
          </li>
          {instagram && (
            <li>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon />@{site.contact.instagram}
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>{site.disclaimer}</p>
        <p>
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
