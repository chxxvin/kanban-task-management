import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="./logo.svg" alt="logo kanban" />
      <h3>kanban</h3>
    </div>
  );
}

export default Logo;
