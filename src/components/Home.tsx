import React from "react";

const Home: React.FC = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container home-content">
        <div className="profile-picture">
          <img src={"/assets/images/hasan-erdem-ak.jpg"} alt="Hasan Erdem Ak" />
        </div>
        <div className="text-content">
          <h1>Hasan Erdem Ak</h1>
          <p>
            Welcome to my homepage. I'm Hasan Erdem Ak, a software developer
            based in Ankara, Turkey, with a deep passion for crafting innovative
            solutions and pushing the boundaries of technology.
          </p>
          <p>
            <strong>My Areas of Interest:</strong>
          </p>
          <ul>
            <li>Back-End Development</li>
            <li>Full-Stack Development</li>
            <li>Game Development</li>
            <li>AI, ML, DL, NLP</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
