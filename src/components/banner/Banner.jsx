import styles from "./styles.module.scss"
import frame from "../../public/images/intro.webp"

// eslint-disable-next-line react/prop-types
const Banner = ({ toggleDropMenu, activeDropMenu }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.frame}>
        <img src={frame} alt="" />

        <div className={styles.overlay}></div>
      </div>

      <div className={styles.frame_content}>
        <div className={styles.container}>
          <div className={styles.main_title}>
            <div className={styles.subTitle}>
              <span> Menu </span>
            </div>

            <h1 className={styles.title}>
              <span>Discover Our menu</span>
            </h1>

            <div className={styles.text}>
              <span>
                Quaerat debitis, vel, sapiente dicta sequi
                <br />
                labore porro pariatur harum expedita.
              </span>
            </div>

            <button
              onClick={toggleDropMenu}
              className={`${styles.button} ${
                activeDropMenu ? styles.active : ""
              }`}
            >
              <span>menu tabs</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
