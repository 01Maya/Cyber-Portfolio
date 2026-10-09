import { ShieldCheck } from "lucide-react";
import styles from "./opening-curtain.module.css";

export function OpeningCurtain() {
  return (
    <div aria-hidden="true" className={styles.curtain}>
      <div className={styles.panel} />
      <div className={styles.mark}>
        <span className={styles.logo}>
          <ShieldCheck aria-hidden="true" size={26} strokeWidth={1.8} />
        </span>
        <span>Aarav Mehta</span>
      </div>
    </div>
  );
}
