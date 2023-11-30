import { useState, ChangeEventHandler } from 'react'
import { LiaFacebook } from 'react-icons/lia'
import { SiInstagram } from 'react-icons/si'
import { PiTiktokLogo } from 'react-icons/pi'
import { IoLocationOutline } from 'react-icons/io5'
import { TbHeart } from 'react-icons/tb'
import { IoPhonePortraitSharp } from "react-icons/io5";

import Icon from '../components/Icon'
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
      // e.preventDefault()

      console.log('Form submitted:', formData)
   }

   return (
      <>
         <h1 className={styles.mainTitle}>
            <span className={styles.mainTitleText}>We'd</span>
            <Icon icon={<TbHeart />} className="heart" />
            <span className={styles.mainTitleText}>to help!</span>
         </h1>
         <div className={styles.contactContainer}>
            <div className={styles.leftside}>
               <h2 className={styles.address}>
                  <Icon icon={<IoLocationOutline />} className="locationIcon" />
                  123 Code Lane, Devtown, REACT 54321
               </h2>
               <h2 className={styles.address}>
                  <Icon icon={<IoPhonePortraitSharp />} className="locationIcon" />
                  +972 4139917
               </h2>

               <div className={styles.socialContainer}>
                  <Icon
                     icon={<LiaFacebook />}
                     url="https://www.facebook.com"
                     className="socialMediaIcon"
                  />
                  <Icon
                     icon={<SiInstagram />}
                     url="https://www.instagram.com"
                     className="socialMediaIcon"
                  />
                  <Icon
                     icon={<PiTiktokLogo />}
                     url="https://www.tiktok.com"
                     className="socialMediaIcon"
                  />
               </div>
            </div>

            <div className={styles.rightside}>
               <h2 className={`${styles.contact}`}>Contact Us</h2>
               <form onSubmit={handleSubmit}>
                  <input
                     className={styles.inputCommon}
                     type="text"
                     name="name"
                     value={formData.name}
                     placeholder="Name"
                     onChange={handleChange}
                  />

                  <input
                     className={styles.inputCommon}
                     type="email"
                     name="email"
                     value={formData.email}
                     placeholder="Email"
                     onChange={handleChange}
                     pattern=".+@example\.com"
                  />

                  <textarea
                     className={`${styles.inputCommon} ${styles.message}`}
                     name="message"
                     value={formData.message}
                     placeholder="Message"
                     onChange={handleChange}
                     required
                  />

                  <button type="submit" className={styles.submit}>
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </>
   )
}

export default Contact
