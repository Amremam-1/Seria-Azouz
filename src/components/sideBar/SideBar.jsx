import styles from "./styles.module.scss"
import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
const SideBar = ({ selectedMenu, handleMenuClick }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    const index = menus.indexOf(selectedMenu)
    if (index !== -1) {
      setActiveMenu(index)
    }
  }, [selectedMenu, menus])
  
  const toggle = (index) => {
    setActiveMenu(index)
  }

  return (
    <div className={`${styles.sideBar} ${selectedMenu && styles.active}`}>
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
