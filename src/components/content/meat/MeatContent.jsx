import styles from "./styles.module.scss"
import { Row, Col } from "react-bootstrap"

const MeatContent = () => {
  return (
    <section className={styles.section}>
      <Row>
        <Col lg="12">
          <div className={styles.text_center}>
            <div className={styles.sub_title}>
              <span> 01 Menu </span>
            </div>

            <h3 className={styles.title}>
              <span> Meat </span>
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
      </Row>
    </section>
  )
}

export default MeatContent
