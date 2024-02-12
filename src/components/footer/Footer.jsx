import styles from "./styles.module.scss"
import logo from "../../public/images/logo-01.png"
import { TiSocialFacebook } from "react-icons/ti"
import { FaInstagram } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io5"
import { FaYoutube } from "react-icons/fa6"
import { IoLogoTiktok } from "react-icons/io5"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

import meat from "../../public/images/1.jpg"
import chicken from "../../public/images/2.jpg"
import fish from "../../public/images/3.jpg"
import shrimp from "../../public/images/4.jpg"
import xie from "../../public/images/5.jpg"
import drinks from "../../public/images/gallery-i-3.jpg"

const images = [
  { imagesrc: meat },
  { imagesrc: chicken },
  { imagesrc: fish },
  { imagesrc: shrimp },
  { imagesrc: xie },
  { imagesrc: drinks },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_top}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.socails}>
            <TiSocialFacebook className={`${styles.icon} ${styles.facebook}`} />
            <FaInstagram className={`${styles.icon} ${styles.instagram}`} />
            <IoLogoTwitter className={`${styles.icon} ${styles.twitter}`} />
            <FaYoutube className={`${styles.icon} ${styles.youtube}`} />
            <IoLogoTiktok className={`${styles.icon} ${styles.tiktok}`} />
          </div>
        </div>

        <div className={styles.line_dot}></div>

        <div className={styles.footer_content}>
          <div className={styles.about}>
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              repudiandae neque illum aspernatur fugiat maiores id magni, modi,
              quaerat vitae. Consectetur adipisicing elit.
            </p>

            <button className={styles.go_top}>READ MORE</button>
          </div>

          <div className={styles.contact}>
            <h1>Contact info</h1>
            <div className={styles.wrapper}>
              <div className={styles.info}>
                <span>Call :</span>
                <span className={styles.details}>+76 (094) 754 43 7I</span>
              </div>
              <div className={styles.info}>
                <span>WRITE :</span>
                <span className={styles.details}>
                  your.email.inbox@here.com
                </span>
              </div>
              <div className={styles.info}>
                <span>FIND US :</span>
                <span className={styles.details}>
                  Canada, Toronto, Avenue 31B
                </span>
              </div>
            </div>
            <button className={styles.go_top}>READ MORE</button>
          </div>

          <div className={styles.Gallery}>
            <h1>Gallery</h1>

            <div className={styles.images}>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                loop={true}
              >
                {images.map((item, index) => (
                  <>
                    <div className={styles.pagination} key={index}>
                      <SwiperSlide className={styles.image}>
                        <img src={item.imagesrc} alt="" />
                      </SwiperSlide>
                    </div>
                  </>
                ))}
              </Swiper>
            </div>
            <button className={styles.go_top}>READ MORE</button>
          </div>
        </div>

        <div className={styles.line_dot}></div>
        <div className={styles.footer_bottom}>
          <p> © Tastyc 2023 . All rights reserved. Design by </p>
          <button className={styles.go_top} onClick={scrollToTop}>
            Back To Top
          </button>
        </div>
      </div>
    </section>
  )
}

export default Footer
