import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Sulav() {
  return (
    <div className="profilePage">
      {/* Profile Image */}
      {/* Profile Name */}
      {/* Role */} {/* Back Button */}
      <div className="profilePageContainer">
        <div className="profileIntro">
          <div>
            <img
              className="profImage"
              src={`https://api.multiavatar.com/sulavjunghamal.png`}
              alt=""
            />
            <h2 className="profileTitle">Sulav Jung Hamal</h2>
            <p className="profileRole">Back-end Lead</p>
          </div>
          <div className="backButton">
            <Link to="/" className="goBackButton">
              Go Back
            </Link>
          </div>
        </div>
        {/* Something about me.  */}
        <hr />
        <section>
          <h4 className="profileAbout">About me:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            error quasi, corporis quaerat rem repellendus quo exercitationem
            iusto voluptatibus, laudantium, vero qui aspernatur nobis nam
            distinctio repellat minima laboriosam culpa! As a passionate
            computer science student with a keen interest in exploring new
            technologies, I am excited about the opportunity to be the part of
            TodoToday project. I am enthusiastic about learning and leveraging
            cutting-edge technologies to create innovative solutions. My goal is
            to collaborate with the team to develop a top-notch product that
            offers an exceptional user experience. What are you doing? What else
            is happening?
          </p>
        </section>
        <section>
          <h4 className="profileAbout">Tech Familarity:</h4>
          <p>
            Here, I provide an overview of the programming languages and
            technologies I am proficient in. This insight into my skill set
            allows you to understand the tools and technologies I use to develop
            projects and solve problems effectively. Below is a summary of my
            familiarity with various technologies
          </p>
          <table className="techTable">
            <thead>
              <tr>
                <th>Programming Language</th>
                <th>Familiarity (out of 10)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JavaScript</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Java</td>
                <td>6</td>
              </tr>
              <tr>
                <td>C</td>
                <td>4</td>
              </tr>
              <tr>
                <td>C++</td>
                <td>6</td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td>6</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Sulav;
