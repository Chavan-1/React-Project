import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'

const ContactForm = () => {

    // let name = "Aarti";
    // let email = "example@gmail.com";
    // let text = "dfghjk'";
    const [name, setName] = useState("Aarti");
    const [email, setEmail] = useState("example@gmail.com");
    const [text, setText] = useState("Aarti Here!");
   
    const onSubmit = (event) => {
        event.preventDefault();  //to prevent loading of page every time button is clicked
        
        // name = event.target[0].value;
        // email = event.target[1].value;
        // text = event.target[2].value;
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value)

        // console.log(name, email, text);
        // console.log("Name: ", event.target[0].value);
        // console.log("Email: ", event.target[1].value);
        // console.log("Text:", event.target[2].value);
    };

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
                <Button text="VIA CALL" icon={<FaPhoneAlt />} />
            </div>
            <Button 
                isOutline={true}
                text="VIA EMAIL FORM" 
                icon={<HiMail />} 
            />
            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor='text'>Text</label>
                    <textarea name='text' rows="8" />
                </div>
                <div 
                    style={{display: "flex", justifyContent: "end"}}>
                    <Button text="SUBMIT BUTTON" />
                </div>
                <div>{ name + " " + email + " " + text }</div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src='/images/contact.svg' alt='contact_image'/>
        </div>
    </section>
  )
}

export default ContactForm