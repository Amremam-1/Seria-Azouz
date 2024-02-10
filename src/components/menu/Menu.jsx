import { Row, Col } from "react-bootstrap"
import styles from "./styles.module.scss"
import Pagination from "../pagination/Pagination"


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

const AllDishesContent = () => {
  return <div>All Dishes Content</div>
}

const MeatContent = () => {
  return <div>Meat Content</div>
}

const ChickenContent = () => {
  return <div>Chicken Content</div>
}

const FishContent = () => {
  return <div>Fish Content</div>
}

const ShrimpContent = () => {
  return <div>Shrimp Content</div>
}

const XieContent = () => {
  return <div>Xie Content</div>
}

const DrinksContent = () => {
  return <div>Drinks Content</div>
}

const ExtrasContent = () => {
  return <div>Extras Content</div>
}

export default Menu
