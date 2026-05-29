import style from "./contact.module.css"
function Contact(){
    return(
        <>
        <div className={style.contactpage}>
          <h1> Contact US </h1>
          <p className={style.subtitle}>
            Have you any question?
            We'd love to hear from you!
          </p>
          <div className={style["contact-Card"]}>
              <form>
                <input type="text" placeholder="Your Name"></input>
                <input type="email" placeholder="Your email">
                </input>
                <textarea placeholder="your message/query" row="10"></textarea>
                <button type="submit">Send Messege</button>
              </form>
          </div>
          <div className={style.contactdetails}>
            <p>Email:support@shecando.com</p>
            <p>Phone:0123456789</p>
          </div>
          </div>

        </>

    )
};
export default Contact;