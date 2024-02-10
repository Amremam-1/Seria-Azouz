import { useState } from "react"
import styles from "./styles.module.scss"

// eslint-disable-next-line react/prop-types
const Pagination = ({ handleMenuClick }) => {
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
    <>
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
    </>
  )
}

export default Pagination
