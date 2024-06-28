import '../css/About.css';  

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our company, our mission, and our team.</p>
      </header>
      
      <section className="about-section mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to provide the best services and products to our customers.</p>
      </section>
      
      <section className="about-section team-section">
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <h3>Vijaya</h3>
            <p>CEO</p>
            <p>Vijaya leads our team with over 20 years of experience in the industry.</p>
          </div>
          <div className="team-member">
            <h3>Pavani</h3>
            <p>MD</p>
            <p>Pavani is our Managing Director over 20 years of experience in the industry.</p>
          </div>
          <div className="team-member">
            <h3>Keshava</h3>
            <p>CTO</p>
            <p>Keshava is our technology guru, with a passion for innovation and excellence.</p>
          </div>
          <div className="team-member">
            <h3>Hari</h3>
            <p>Market Excutive</p>
            <p>Hari is our technology guru, with a passion for innovation and excellence.</p>
          </div>
          
        </div>
      </section>
      
      <section className="about-section values-section">
        <h2>Our Values</h2>
        <p>We believe in integrity, innovation, and excellence.</p>
      </section>
      
      <footer className="about-footer">
        <p>Contact us: info@company.com</p>
      </footer>
    </div>
  );
};

export default About;

