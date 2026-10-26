import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./WhatsAppFloat.module.css";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      className={styles.float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
