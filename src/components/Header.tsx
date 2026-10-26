import Image from "next/image";
import { site, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} aria-label={`${site.name}, voltar ao início`}>
          <Image src="/images/logo-gn-160.webp" alt="" width={40} height={40} priority />
          <span className={styles.wordmark}>{site.name}</span>
        </a>

        <nav className={styles.nav} aria-label="Seções">
          <a href="#tonico">Tônico</a>
          <a href="#microagulhamento">Microagulhamento</a>
          <a href="#quem-somos">Quem somos</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <a
          href={whatsappLink()}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
