import styles from "./styles.module.scss"
import logo from "../../public/images/logo-01.png"
import SideBar from "../sideBar/SideBar"

// eslint-disable-next-line react/prop-types
const NavBar = ({ toggleDropMenu, activeDropMenu , selectedMenu, handleMenuClick}) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>

          <div
            onClick={toggleDropMenu}
            className={`${styles.humburgar} ${
              activeDropMenu ? styles.active : ""
            }`}
          >
            <span className={styles.line1}></span>
            <span className={styles.line1}></span>
            <span className={styles.line1}></span>
          </div>
          {activeDropMenu && <SideBar  selectedMenu={selectedMenu}  handleMenuClick={handleMenuClick}/>}
        </div>
      </header>
    </>
  )
}

export default NavBar
