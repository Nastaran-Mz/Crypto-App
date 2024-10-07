import styles from "./Layout.module.css";
export function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://react.dev/">ReactJs </a>| Library
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Nastaran_Mz</p>
      </footer>
    </>
  );
}
