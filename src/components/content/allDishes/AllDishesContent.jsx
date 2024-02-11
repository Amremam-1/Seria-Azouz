import styles from "./styles.module.scss"
import { Row, Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import meat from "../../../public/images/1.jpg"
import chicken from "../../../public/images/2.jpg"
import fish from "../../../public/images/3.jpg"
import shrimp from "../../../public/images/4.jpg"
import xie from "../../../public/images/5.jpg"
import drinks from "../../../public/images/6.jpg"
import extras from "../../../public/images/1.jpg"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { useState } from "react"
// import { Pagination } from "swiper/modules"
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"

const data = [
  {
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

const AllDishesContent = () => {
  const [openMenu, setOpenMenu] = useState(-1)

  const handleMenu = (index) => {
    setOpenMenu(openMenu === index ? -1 : index)
  }

  return (
    <section className={styles.section}>
      <Row>
        <Col lg="12">
          <div className={styles.text_center}>
            <div className={styles.sub_title}>
              <span> our menu </span>
            </div>

            <h3 className={styles.title}>
              <span> All Dishes </span>
            </h3>

            <p>
              <span>
                Porro eveniet, autem ipsam corrupti consectetur cum.
                <br />
                Repudiandae dignissimos fugiat sit nam.
              </span>
            </p>
          </div>
        </Col>

        <Swiper
          // slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            2560: {
              slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            1440: {
              slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            1024: {
              slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            1023: {
              slidesPerView: 2, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            991: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            480: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            320: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
          }}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <>
              <div className={styles.huge} key={index}>
                <SwiperSlide>
                  <div
                    className={`${styles.box_content} ${
                      openMenu === index ? styles.active : ""
                    }`}
                  >
                    <div className={styles.image}>
                      <img src={item.img} alt="" />
                    </div>

                    {openMenu === index ? (
                      <div className={styles.menu}>
                        <table>
                          <thead>
                            <tr>
                              <th>اسم الطبق</th>
                              <th>السعر</th>
                              <th>العملة</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.salary.map((menuItem, idx) => (
                              <tr key={idx}>
                                <td>{menuItem.name}</td>
                                <td>{menuItem.price}</td>
                                <td>{menuItem.currency}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className={styles.box_title}>
                        <h2>{item.title}</h2>
                        <span>{item.subtitle}</span>
                        <div className={styles.dot}></div>
                      </div>
                    )}

                    <div className={styles.meat_contnet}>
                      <div
                        className={`${styles.menu_meat} ${
                          openMenu === index ? styles.active : ""
                        }`}
                        onClick={() => handleMenu(index)}
                      >
                        Menu
                        {openMenu === index ? (
                          <IoIosArrowDown className={styles.icon} /> // عندما يكون openMenu مفتوحًا
                        ) : (
                          <IoIosArrowUp className={styles.icon} /> // عندما يكون openMenu مغلقًا
                        )}
                      </div>

                      <button
                        className={`${styles.order} ${
                          openMenu === index ? styles.active : ""
                        }`}
                      >
                        إطلب الان
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </>
          ))}
        </Swiper>
      </Row>
    </section>
  )
}

export default AllDishesContent
