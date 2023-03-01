// import phoneIcon from './phone-icon.png';
// import emailIcon from './email-icon.png';
// import addressIcon from './address-icon.png';

const ContactUs = () => {
  const contactInfo = [
    {
      id: 1,
      icon: "https://img.icons8.com/ios/2x/iphone14-pro.png",
      title: "Phone",
      value: "+1 (123) 456-7890",
    },
    {
      id: 2,
      icon: "https://img.icons8.com/fluency/2x/apple-mail.png",
      title: "Email",
      value: "info@example.com",
    },
    {
      id: 3,
      icon: "https://img.icons8.com/fluency/2x/order-delivered.png",
      title: "Address",
      value: "123 Main St, Anytown, USA",
    },
  ];

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        {contactInfo.map((info) => (
          <div key={info.id} className="info-item">
            <img src={info.icon} alt={info.title} className="info-icon" />
            <div>
              <p className="info-title">{info.title}</p>
              <p className="info-value">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
