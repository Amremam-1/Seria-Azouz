import Banner from "./components/banner/Banner"
import Footer from "./components/footer/Footer"
import Menu from "./components/menu/Menu"
import NavBar from "./components/navbar/NavBar"
import { useState } from "react"

const App = () => {
  const [activeDropMenu, setActiveDropMenu] = useState(false)
  const toggleDropMenu = () => {
    setActiveDropMenu(!activeDropMenu)
  }

  //  خاصه بعرض المحتوى الخاص ب buttons

  const [selectedMenu, setSelectedMenu] = useState("All Dishes")

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu)
  }

  return (
    <>
      <NavBar
        toggleDropMenu={toggleDropMenu}
        activeDropMenu={activeDropMenu}
        selectedMenu={selectedMenu}
        handleMenuClick={handleMenuClick}
      />
      <Banner toggleDropMenu={toggleDropMenu} activeDropMenu={activeDropMenu} />
      <Menu selectedMenu={selectedMenu} handleMenuClick={handleMenuClick} />
      <Footer />
    </>
  )
}

export default App
