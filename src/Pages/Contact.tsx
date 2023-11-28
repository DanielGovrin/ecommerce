import { useState, ChangeEventHandler } from 'react'
import { LiaFacebook } from 'react-icons/lia'
import { SiInstagram } from 'react-icons/si'
import { PiTiktokLogo } from 'react-icons/pi'
import { IoLocationOutline } from 'react-icons/io5'

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
      e.preventDefault()

      console.log('Form submitted:', formData)
   }

   return (
      <>
         <h1 className={styles.mainTitle}>We'd love to help!</h1>
         <div className={styles.contactContainer}>
            <div className={styles.leftside}>
               <div className={styles.location}>
                  <Icon icon={<IoLocationOutline />} />
                  <h3 className={styles.address}>
                     123 Code Lane, Devtown, REACT 54321
                  </h3>
               </div>

               <div className={styles.socialContainer}>
                  <Icon
                     icon={<LiaFacebook />}
                     url="https://www.facebook.com"
                     className="facebook"
                  />
                  <Icon
                     icon={<SiInstagram />}
                     url="https://www.instagram.com"
                     className="instagram"
                  />
                  <Icon
                     icon={<PiTiktokLogo />}
                     url="https://www.tiktok.com"
                     className="tiktok"
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
