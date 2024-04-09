import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("http://52.52.61.214:3001/teams")
      .then((response) => response.json())
      .then((data) => setTeamData(data ? data : []))
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Team TodoToday</h1>
          <h1>
            Just changing few things here to see if the mount is working
            properly.
          </h1>
          <p>Adding few more things.</p>
        </header>
        <main className="teams">
          <div className="team-list">
            {teamData.map((member) => (
              <Link className="linkBox" to={`/${member.name.split(" ")[0]}`}>
                <div key={member.id} className="team-member">
                  <img
                    className="profImage"
                    src={`https://api.multiavatar.com/${encodeURIComponent(
                      member.name
                    )}.png`}
                    alt=""
                  />
                  <h2>{member.name}</h2>
                  <p>
                    <strong>Email:</strong> {member.email}
                  </p>
                  <p>
                    <strong>Role:</strong> {member.role}
                  </p>
                  <p>
                    <strong>Hobby:</strong> {member.hobby}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
