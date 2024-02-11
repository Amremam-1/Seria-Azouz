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

import meat from "../../public/images/1.jpg"
import chicken from "../../public/images/2.jpg"
import fish from "../../public/images/3.jpg"
import shrimp from "../../public/images/4.jpg"
import xie from "../../public/images/5.jpg"
import drinks from "../../public/images/6.jpg"
import extras from "../../public/images/1.jpg"

const data = [
  {
    id: 1,
    img: meat,
    title: "لحم",
    subtitle: "Consectetur adipisicing elit. Soluta, impedit, saepe.",
    salary: [
      { name: "سيريه لحم", price: 16, currency: "Sr", cal: 188 },
      { name: "سيريه لحم حراق", price: 17, currency: "Sr", cal: 192 },
      { name: "نص سيريه لحم", price: 8, currency: "Sr", cal: 94 },
      { name: "ساندوتش سيريه لحم", price: 8, currency: "Sr", cal: 200 },
      { name: "مدفون لحم", price: 20, currency: "Sr", cal: 265 },
      { name: "مدفون لحم حراق", price: 21, currency: "Sr", cal: 270 },
      { name: "مدفون لحم جبن", price: 22, currency: "Sr", cal: 304 },
      { name: "مدفون لحم جبن حراق", price: 23, currency: "Sr", cal: 308 },
    ],
  },
  {
    id: 2,
    img: chicken,
    title: "دجاج",
    subtitle: "Consectetur adipisicing elit. Soluta, impedit, saepe.",
    salary: [
      { name: "سيريه دجاج", price: 16, currency: "Sr", cal: 145 },
      { name: "سيريه دجاج حراق", price: 17, currency: "Sr", cal: 150 },
      { name: "ساندوتش سيريه دجاج", price: 8, currency: "Sr", cal: 150 },
      { name: "نص سيريه دجاج", price: 20, currency: "Sr", cal: 73 },
      { name: "مدفون دجاج", price: 21, currency: "Sr", cal: 282 },
      { name: "مدفون دجاج حراق", price: 22, currency: "Sr", cal: 287 },
      { name: "مدفون دجاج جبن", price: 23, currency: "Sr", cal: 304 },
      { name: "مدفون دجاج جبن حراق", price: 23, currency: "Sr", cal: 309 },
    ],
  },
  {
    id: 3,
    img: fish,
    title: "سمك",
    subtitle: "Consectetur adipisicing elit. Soluta, impedit, saepe.",
    salary: [
      { name: "سيريه سمك", price: 16, currency: "Sr", cal: 136 },
      { name: "سيريه سمك حراق", price: 17, currency: "Sr", cal: 140 },
      { name: "ساندوتش سيريه سمك", price: 8, currency: "Sr", cal: 140 },
      { name: "نص سيريه سمك", price: 8, currency: "Sr", cal: 86 },
      { name: "مدفون سمك", price: 20, currency: "Sr", cal: 190 },
      { name: "مدفون سمك حراق", price: 21, currency: "Sr", cal: 195 },
      { name: "مدفون سمك جبن", price: 22, currency: "Sr", cal: 230 },
      { name: "مدفون سمك جبن حراق", price: 23, currency: "Sr", cal: 235 },
    ],
  },
  {
    id: 4,
    img: shrimp,
    title: "جمبرى",
    subtitle: "Consectetur adipisicing elit. Soluta, impedit, saepe.",
    salary: [
      { name: "سيريه جمبرى", price: 20, currency: "Sr", cal: 110 },
      { name: "سيريه لحم جمبرى", price: 21, currency: "Sr", cal: 117 },
      { name: "ساندوتش  جمبرى", price: 10, currency: "Sr", cal: 130 },
      { name: "نص سيريه جمبرى", price: 10, currency: "Sr", cal: 55 },
      { name: "مدفون جمبرى", price: 22, currency: "Sr", cal: 140 },
      { name: "مدفون جمبرى حراق", price: 25, currency: "Sr", cal: 145 },
      { name: "مدفون جمبرى جبن", price: 26, currency: "Sr", cal: 150 },
      { name: "مدفون جمبرى جبن حراق", price: 27, currency: "Sr", cal: 180 },
    ],
  },
  {
    id: 5,
    img: xie,
    title: "شيه",
    subtitle: "Consectetur adipisicing elit. Soluta, impedit, saepe.",
    salary: [
      { name: "شيه", price: 20, currency: "Sr", cal: 262 },
      { name: "شيه حراق", price: 22, currency: "Sr", cal: 270 },
      { name: "ساندوتش سيريه شيه", price: 8, currency: "Sr", cal: 270 },

      { name: "شيه مدفون", price: 23, currency: "Sr", cal: 290 },
      { name: "شيه مدفون جبن", price: 25, currency: "Sr", cal: 320 },
      { name: "شيه مدفون جبن حراق", price: 26, currency: "Sr", cal: 380 },
      { name: "فول مصلح", price: 8, currency: "Sr", cal: 100 },
      { name: "عدس", price: 7, currency: "Sr", cal: 677 },
    ],
  },
  {
    id: 6,
    img: drinks,
    title: "المشروبات",
    subtitle: "Consectetur adipisicing elit. Soluta, impedit, saepe.",
    salary: [
      { name: "عصير جي", price: 5, currency: "Sr", cal: 150 },
      { name: "عصير جي لتر", price: 15, currency: "Sr", cal: null },
      { name: "عصير جي لتر ونص", price: 20, currency: "Sr", cal: null },
      { name: "عصير كركديه", price: 3, currency: "Sr", cal: 200 },
      { name: "عصير كركديه لتر", price: 10, currency: "Sr", cal: 75 },
      { name: "عصير كركديه لتر ونص", price: 15, currency: "Sr", cal: null },
      { name: "عصير فور فور", price: 5, currency: "Sr", cal: null },
      { name: "عصير فور فور لتر", price: 15, currency: "Sr", cal: null },
      { name: "عصير فور فور لتر ونص", price: 20, currency: "Sr", cal: null },
      { name: "مشروبات غازي", price: 3, currency: "Sr", cal: 300 },
      { name: "ماء", price: 1, currency: "Sr", cal: null },
    ],
  },
  {
    id: 7,
    img: extras,
    title: "الاضافات",
    subtitle: "Consectetur adipisicing elit. Soluta, impedit, saepe.",
    salary: [
      { name: "إضافة جبن", price: 2, currency: "Sr" },
      { name: "خلطة زبادي", price: 3, currency: "Sr" },
      { name: "زبادي", price: 2, currency: "Sr" },
      { name: "طحينه", price: 3, currency: "Sr" },
    ],
  },
]

// eslint-disable-next-line react/prop-types
const Menu = ({ selectedMenu, handleMenuClick }) => {
  // const filteredData = data.filter((item) => item.title === selectedMenu)

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
                {selectedMenu === "All Dishes" && (
                  <AllDishesContent data={data} />
                )}

                {selectedMenu === "Meat" && <MeatContent data={data} />}
                {selectedMenu === "Chicken" && <ChickenContent data={data} />}
                {selectedMenu === "Fish" && <FishContent data={data} />}
                {selectedMenu === "Shrimp" && <ShrimpContent data={data} />}
                {selectedMenu === "Xie" && <XieContent data={data} />}
                {selectedMenu === "Drinks" && <DrinksContent data={data} />}
                {selectedMenu === "Extras" && <ExtrasContent data={data} />}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Menu
