import { NavLink } from "react-router";
import Logo from '../../assets/Logo.png'
import style from './Navigation.module.scss';
import BurgerMenu from "../burgerMenu/burgerMenu";

export function Navigation() {
  return (
    <nav className={style.navStyle}>
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
       

      <ul>
        <li>
          <NavLink to={"/"}>Forside</NavLink>
        </li>
        <li>
          <NavLink to={"Nyheder"}>Nyheder</NavLink>
        </li>
        <li>
          <NavLink to={"/Kontakt"}>Kontakt</NavLink>
        </li> 
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      <li>
        <input type="search" placeholder="søg" />
        <button>Søg</button>
      </li>
      </ul>
      <button
        className={styles.burgerBtn}
        onClick={() => setIsMenuOpen(true)}
        aria-label="Åbn menu"
      >
        <span className={styles.burgerIcon} />
        <span className={styles.burgerIcon} />
        <span className={styles.burgerIcon} />
      </button>

      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isLoggedIn={isLoggedIn}/>
    </nav>
  );
}