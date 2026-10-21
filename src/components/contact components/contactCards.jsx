import ContactCardTemplate from "./contactCardTemplate";
let contactInfo = [
  {
    id: 1,
    holder: {
      icon: "bi-telephone",
      heading: "Call Us",
      subHeading: "Available 24/7.",
      detail: "+234 803 426 2759",
    },
  },
  {
    id: 2,
    holder: {
      icon: "bi-envelope",
      heading: "Email Us",
      subHeading: "Reach out to us anytime.",
      detail: "info@gctechies.com",
    },
  },
  {
    id: 3,
    holder: {
      icon: "bi-geo-alt",
      heading: "Visit Us",
      subHeading: "visit Us at our office",
      detail: "Quarry Rd, Abeokuta, Ogun State",
    },
  },
  {
    id: 4,
    holder: {
      icon: "bi-clock",
      heading: "Working Hours",
      subHeading: "Mon - Sat",
      detail: "10 AM - 5 PM",
    },
  },
];

function ContactCards() {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center align-items-stretch g-3">
          {contactInfo.map((item) => {
            return <ContactCardTemplate key={item.id} item={item.holder} />;
          })}
        </div>
      </div>
    </>
  );
}
export default ContactCards;
