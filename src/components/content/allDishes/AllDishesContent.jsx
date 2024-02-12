/* eslint-disable react/prop-types */
import styles from "./styles.module.scss"
import { Row, Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { useState } from "react"

import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"

const AllDishesContent = ({ data }) => {
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
          loop={true}
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
