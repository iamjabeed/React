const About = () => {
  const owners = [
    { id: 1, name: 'Jabeed Syed', position: 'Owner', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum felis vel nibh maximus faucibus.' },
    { id: 2, name: 'Jessica', position: 'Co-Owner', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum felis vel nibh maximus faucibus.' },
  ];

  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>We are a family-owned restaurant that has been serving delicious meals for over 20 years.</p>
      <h3>Our Owners</h3>
      <ul className="owner-list">
        {owners.map((owner) => (
          <li key={owner.id} className="owner-item">
            <h4>{owner.name}</h4>
            <p>{owner.position}</p>
            <p>{owner.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default About;


