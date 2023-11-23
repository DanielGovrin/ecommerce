import { useState } from "react"
import styles from "./pages.module.css"

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleMessageChange = (e: any) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.contactContainer}>

      <div className={styles.leftside}>
        <h2 className={styles.location}>Location</h2>
        <p className={styles.address}>address</p>
        <h2 className={styles.folloe}>Follow Us</h2>
        <div>Social Media</div>
      </div>

      <div className={styles.rightside}>
        <h2>Contact Us</h2>
        <form>
          <div className={`${styles.input} ${styles.nameText}`}>
            <input type="text"
              value={name}
              placeholder="Enter Your Name"
              onChange={handleNameChange} />
          </div>

          <div className={`${styles.input} ${styles.emailText}`}>
            <input
              type="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
              pattern=".+@example\.com" />
          </div>

          <div className={`${styles.input} ${styles.messageText}`} >
            <input
              type="message"
              value={message}
              placeholder="Enter Your Message"
              onChange={handleMessageChange} />
          </div>

          <button>Submit</button>

        </form>
      </div>

    </div>
  )
}

export default Contact