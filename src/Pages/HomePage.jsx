import ContactForm from "../Components/ContactForm";
import HomeGrid from "../Components/HomeGrid";

function HomePage() {
  return (
    <>
      <HomeGrid />
      <div className="contactUs">
        <h2>Contact Us</h2>
        <p>
          Whether you think we're missing something, you want to know more, or
          you just want to tell us just how much you hate astrology - we're here
          to listen!
        </p>
        <ContactForm />
      </div>
    </>
  );
}

export default HomePage;
