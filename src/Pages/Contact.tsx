import { useState, ChangeEventHandler } from 'react'
import { LiaFacebook } from 'react-icons/lia'
import { SiInstagram } from 'react-icons/si'
import { PiTiktokLogo } from 'react-icons/pi'

import SocialMedia from '../components/SocialMedia'
import styles from './contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add logic to handle form submission, e.g., sending data to a server
    console.log('Form submitted:', formData)
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.leftside}>
        <h1 className={`${styles.location} ${styles.header}`}>Location</h1>
        <h3 className={styles.address}>123 Code Lane, Devtown, REACT 54321</h3>
        <h2 className={styles.follow}>Follow Us</h2>
        <div className={styles.socialContainer}>
          <SocialMedia
            icon={<LiaFacebook />}
            url="https://www.facebook.com"
            className="facebook"
          />
          <SocialMedia
            icon={<SiInstagram />}
            url="https://www.instagram.com"
            className="instagram"
          />
          <SocialMedia
            icon={<PiTiktokLogo />}
            url="https://www.tiktok.com"
            className="tiktok"
          />
        </div>
      </div>

      <div className={styles.rightside}>
        <h1 className={`${styles.contact} ${styles.header}`}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.inputCommon}
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
          />

          <input
            className={styles.inputCommon}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            pattern=".+@example\.com"
          />

          <textarea
            className={`${styles.inputCommon} ${styles.message}`}
            name="message"
            value={formData.message}
            placeholder="Enter Your Message"
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
