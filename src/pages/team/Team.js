import React, { useEffect, useState } from 'react';
import './Team.css';
import Preloader from '../../components/common/preloader/Preloader';
import teamData from '../../data/teamdata/TeamData';
import { useNavigate } from 'react-router-dom';

export default function Team() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="team-section">
      <h2 className="team-title">Meet the Team</h2>
      <div className="team-grid">
        {teamData.map(member => (
          <div 
            key={member.id} 
            className="team-card"
            onClick={() => navigate(`/members/${member.id}`)}
          >
            <img src={member.image} alt={member.title} className="team-img" />
            <h3 className="team-name">{member.title}</h3>
            <p className="team-role">{member.type}</p>
            <p className="team-bio">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

