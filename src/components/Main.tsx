import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
  <div className="left-section">
    <div className="about-section">
      <div className="image-wrapper">
        <img
          src="https://res.cloudinary.com/duhlo06nb/image/upload/v1732186050/Snapchat-1185139239-modified_bqofey.png"
          alt="Avatar"
        />
      </div>
      <div className="content">
        <div className="social_icons">
          <a href="https://github.com/Shristythapa" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/shristythapa/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
        <h1>Shristy Thapa</h1>
        {/* <p>Full Stack Engineer</p> */}

        <div className="mobile_social_icons">
          <a href="https://github.com/Shristythapa" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/shristythapab7a268225" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="right-section ">
    <h1>Skills</h1>
    <p>Languages & Tools: Python, SQL, Tableau, Git, R</p> 
    <p>Methodologies: Agile Development (Scrum)</p>
    <p>Soft Skills: Critical Thinking, Quick Learning, Teamwork, Communication, Leadership (Scrum Master experience)</p>
  </div>
</div>

  );
}

export default Main;