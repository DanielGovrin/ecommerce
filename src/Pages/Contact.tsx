import { useState } from "react"
import styles from "./pages.module.css"
import { BiLogoFacebookCircle } from "react-icons/bi";
import SocialMedia from "../components/SocialMedia";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e:any) => {
    setEmail(e.target.value)
  }
  const handleMessageChange = (e: any) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.contactContainer}>

      <div className={styles.leftside}>
        <h2 className={`${styles.location} ${styles.text}`}>Location</h2>
        <p className={`${styles.address} ${styles.text}`}>address</p>
        <h2 className={`${styles.follow} ${styles.text}`}>Follow Us</h2>
        <div className={styles.socialContainer}>
          <SocialMedia  icon="<BiLogoFacebookCircle>" url="https://www.facebook.com"/>
        </div>
      </div>

      <div className={styles.rightside}>
        <h2 className={`${styles.text} ${styles.contact}`}>Contact Us</h2>
        <form>
          <div className={`${styles.input} ${styles.nameText} ${styles.text}`}>
            <input type="text"
              value={name}
              placeholder="Enter Your Name"
              onChange={handleNameChange} />
          </div>

          <div className={`${styles.input} ${styles.emailText} ${styles.text}`}>
            <input
              type="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
              pattern=".+@example\.com" />
          </div>

          <div className={`${styles.input} ${styles.messageText} ${styles.text}`} >
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