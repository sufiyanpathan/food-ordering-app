import SectionHeaders from "./SectionHeaders";

const ContactUs = () => {
  return (
    <section className="text-center my-8">
      <SectionHeaders
        props={{ subHeader: "Dont't hesitate", mainHeader: "Contact Us" }}
      />
      <div className="mt-8">
        <a
          className="text-4xl underline text-gray-500"
          href="tel=+76 678 123 567"
        >
          +76 678 123 567
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
