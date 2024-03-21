import styles from "./page.module.css";
import { LoginScreen } from "./component/loginScreen";

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginScreen />
    </main>
  );
}
