import { Row, Col } from "react-bootstrap"
import styles from "./styles.module.scss"
import Pagination from "../pagination/Pagination"
import AllDishesContent from "../content/allDishes/AllDishesContent"
import ChickenContent from "../content/chicken/ChickenContent"
import DrinksContent from "../content/drinks/DrinksContent"
import MeatContent from "../content/meat/MeatContent"
import FishContent from "../content/fish/FishContent"
import ShrimpContent from "../content/shrimp/ShrimpContent"
import XieContent from "../content/xie/XieContent"
import ExtrasContent from "../content/extrasContent/ExtrasContent"

// eslint-disable-next-line react/prop-types
const Menu = ({ selectedMenu, handleMenuClick }) => {
  // const [selectedMenu, setSelectedMenu] = useState("All Dishes")

  // const handleMenuClick = (menu) => {
  //   setSelectedMenu(menu)
  // }

  return (
    <section className={styles.content_frame}>
      <div className={styles.content_box}>
        <div className={styles.content_frama_start}></div>

        <div className={styles.swiper_menu}>
          <Row>
            <Col lg="12">
              <div className={styles.swiper_nav}>
                <Pagination handleMenuClick={handleMenuClick} />
              </div>
            </Col>

            <Col lg="12">
              <div className={styles.selected_content}>
                {selectedMenu === "All Dishes" && <AllDishesContent />}
                {selectedMenu === "Meat" && <MeatContent />}
                {selectedMenu === "Chicken" && <ChickenContent />}
                {selectedMenu === "Fish" && <FishContent />}
                {selectedMenu === "Shrimp" && <ShrimpContent />}
                {selectedMenu === "Xie" && <XieContent />}
                {selectedMenu === "Drinks" && <DrinksContent />}
                {selectedMenu === "Extras" && <ExtrasContent />}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Menu
