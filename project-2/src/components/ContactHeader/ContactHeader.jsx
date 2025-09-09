
import styles from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
        <h1>CONTACT US</h1>
        <p>
            LET'S CONNECT: WE'ER HERE TO HELP, AND 
            WE'D LOVE TO HEAR FROM YOU!
            WHETHER YOU HVAE QUESTION, COMMENT, OR 
            JUST WANT TO CHAT, YOU CAN 
            REACH OUT TO US THHROUGH THE CONTACT FORM
            OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "} 
        </p>
    </div>
  );
};

export default ContactHeader;