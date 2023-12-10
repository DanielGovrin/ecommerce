import { useState, ChangeEventHandler } from 'react';
import { TbHeart } from 'react-icons/tb';
import Icon from '../components/Icon';
import styles from './contact.module.css';

function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const handleChange: ChangeEventHandler<
      HTMLInputElement | HTMLTextAreaElement
   > = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent) => {
      // e.preventDefault()

      console.log('Form submitted:', formData);
   };

   return (
      <>
         <h1 className={styles.mainTitle}>
            <span className={styles.mainTitleText}>We'd</span>
            <Icon icon={<TbHeart />} className="heart" />
            <span className={styles.mainTitleText}>to help!</span>
         </h1>
         <div className={styles.contactContainer}>
            <div className={styles.rightside}>
               <h2 className={styles.contact}>Contact Us</h2>
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
   );
}

export default Contact;
