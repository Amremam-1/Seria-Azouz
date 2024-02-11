import styles from "./styles.module.scss"
import logo from "../../public/images/logo-01.png"
import { TiSocialFacebook } from "react-icons/ti"
import { FaInstagram } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io5"
import { FaYoutube } from "react-icons/fa6"
import { IoLogoTiktok } from "react-icons/io5"
import { Container } from "react-bootstrap"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional - adds smooth scrolling effect
    })
  }
  return (
    <section className={styles.footer}>
      <Container>
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

        <div className={styles.footer_content}></div>

        <div className={styles.line_dot}></div>
        <div className={styles.footer_bottom}>
          <p> © Tastyc 2023 . All rights reserved. Design by </p>
          <button className={styles.go_top} onClick={scrollToTop}>
            Back To Top
          </button>
        </div>
      </Container>
    </section>
  )
}

export default Footer
