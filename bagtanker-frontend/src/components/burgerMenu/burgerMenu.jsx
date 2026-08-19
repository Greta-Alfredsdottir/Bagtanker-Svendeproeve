import { NavLink } from "react-router";
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
        onClick={(e) => e.stopPropagation()}>
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
          <NavLink to="/" onClick={onClose}>
            Forside
          </NavLink>

          <NavLink to="/Produkter" onClick={onClose}>
            Produkter
          </NavLink>

          <NavLink to="/Login" onClick={onClose}>
              Login
          </NavLink>
          
        </nav>
      </div>
    </div>
  );
}