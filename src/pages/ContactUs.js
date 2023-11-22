import BlogBackMove from "../components/Blog/BlogBackMove";
import ContactUsFrom from "../components/Contactus/ContactUsFrom";
import classes from "./ContactUs.module.css"

const ContactUs = () => {
  return (
    <>
      <section className={`${classes.Contactus}`}>
        <BlogBackMove move="Contact" />
        <ContactUsFrom/>
      </section>
    </>
  );
};

export default ContactUs;
