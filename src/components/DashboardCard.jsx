import React from 'react';
import '../style/main.scss';

const DashboardCard = ({ image, title, description }) => {
  return (
    <div className="dashboard-card">
      <img src={image} alt={title} className="dashboard-image" />
      <h2>{title}</h2>
      <p className="dashboard-description">{description}</p>
    </div>
  );
};

export default DashboardCard;
