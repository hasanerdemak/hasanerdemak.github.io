import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const fullText =
    "Hi, I'm Hasan Erdem Ak, a software developer from Ankara, Turkey.";
  const [displayedText, setDisplayedText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        setTypingFinished(true);
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <section id="home" className="section home-section">
      <div className="container home-content">
        <div className="profile-picture">
          <img src={"/assets/images/hasan-erdem-ak.jpg"} alt="Hasan Erdem Ak" />
        </div>
        <div className="text-content">
          <h1>Hasan Erdem Ak</h1>
          <p>
            {displayedText}
            {!typingFinished && <span className="cursor">|</span>}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
