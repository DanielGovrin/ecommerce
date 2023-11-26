import { useState } from "react"
import styles from "./pages.module.css"
import { LiaFacebook } from "react-icons/lia";
import { SiInstagram } from "react-icons/si";
import { PiTiktokLogo } from "react-icons/pi";


import SocialMedia from "../components/SocialMedia";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }
  const handleMessageChange = (e: any) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.contactContainer}>

      <div className={styles.leftside}>
        <h1 className={`${styles.location} ${styles.text} ${styles.header}`}>Location</h1>
        <h3 className={`${styles.address} ${styles.text}`}>123 Code Lane, Devtown, REACT 54321</h3>
        <h2 className={`${styles.follow} ${styles.text}`}>Follow Us</h2>
        <div className={styles.socialContainer}>
          <SocialMedia icon={<LiaFacebook />} url="https://www.facebook.com" className="facebook" />
          <SocialMedia icon={<SiInstagram />} url="https://www.instagram.com" className="instagram" />
          <SocialMedia icon={<PiTiktokLogo />} url="https://www.tiktok.com" className="tiktok" />
        </div>
      </div>

      <div className={styles.rightside}>
        <h1 className={`${styles.text} ${styles.contact} ${styles.header}`}>Contact Us</h1>
        <form>
          <div className={`${styles.inputText} ${styles.nameText}`}>
            <input type="text"
              value={name}
              placeholder="Enter Your Name"
              onChange={handleNameChange} />

            <input
              className={styles.inputText}
              type="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
              pattern=".+@example\.com" />

            <input
              type="message"
              value={message}
              placeholder="Enter Your Message"
              onChange={handleMessageChange} />


            <button>Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact