import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import teamData from '../../data/teamdata/TeamData';
import './Members.css';

export default function Members() {
  const { id } = useParams();
  const navigate = useNavigate();

  const member = teamData.find(m => m.id === parseInt(id));

  if (!member) return <p>Member not found</p>;

  return (
    <div className="member-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <div className="member-card">
        <img src={member.image} alt={member.title} className="member-img" />
        <h2 className="member-name">{member.title}</h2>
        <h4 className="member-role">{member.type}</h4>
        <p className="member-bio">{member.description}</p>
      </div>
    </div>
  );
}
