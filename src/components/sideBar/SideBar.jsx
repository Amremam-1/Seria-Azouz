import styles from "./styles.module.scss"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const SideBar = ({ activeDropMenu, handleMenuClick }) => {
  const menus = [
    "All Dishes",
    "Meat",
    "Chicken",
    "Fish",
    "Shrimp",
    "Xie",
    "Drinks",
    "Extras",
  ]

  const [activeMenu, setActiveMenu] = useState(0)

  const toggle = (index) => {
    setActiveMenu(index)
  }

  return (
    <div className={`${styles.sideBar} ${activeDropMenu && styles.active}`}>
      <div className={styles.container}>
        <div className={styles.pagination}>
          {menus.map((menu, index) => (
            <button
              key={index}
              className={`${styles.swiper_pagination} ${
                activeMenu === index ? styles.active : ""
              }`}
              onClick={() => {
                handleMenuClick(menu)
                toggle(index)
              }}
            >
              {menu}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
