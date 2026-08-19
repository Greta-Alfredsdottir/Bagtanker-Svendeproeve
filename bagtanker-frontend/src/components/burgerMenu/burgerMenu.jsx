import style from "./burger.module.scss"; 

export default function BurgerMenu({
  isOpen,
  onClose,
  isLoggedIn = false,
}) {
  if (!isOpen) return null;

  return (
    <div className={style.drawerOverlay} onClick={onClose}>
      <div
        className={style.drawer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.drawerHeader}>
          <h2>Menu</h2>

          <button
            className={style.closeBtn}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className={style.drawerNav}>
          <Link href="/" onClick={onClose}>
            Forside
          </Link>

          <Link href="/Produkter" onClick={onClose}>
            Produkter
          </Link>

           (
            <Link href="/Login" onClick={onClose}>
              Login
            </Link>
          )
        </nav>
      </div>
    </div>
  );
}
