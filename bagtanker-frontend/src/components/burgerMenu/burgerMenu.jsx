import styles from './burger.module.scss';

export default function BurgerMenu({
  isOpen,
  onClose,
  isLoggedIn = false,
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.drawerOverlay} onClick={onClose}>
      <div
        className={styles.drawer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.drawerHeader}>
          <h2>Menu</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className={styles.drawerNav}>
          <Link href="/" onClick={onClose}>
            Forside
          </Link>

          <Link href="/Produkter" onClick={onClose}>
            Produkter
          </Link>

          {isLoggedIn ? (
            <Link href="/min-side" onClick={onClose}>
              Min Side
            </Link>
          ) : (
            <Link href="/Login" onClick={onClose}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
